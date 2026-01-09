import { useEffect, useRef, useState } from "react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { VisitorsChart } from "@/components/dashboard/VisitorsChart";
import { MessagesTable } from "@/components/dashboard/MessagesTable";

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
};

const VISIT_DELAY = 2 * 60 * 1000; // 5 minutes

export default function Dashboard() {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [visitorsHistory, setVisitorsHistory] = useState<number[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const visitCountedRef = useRef(false);

  /* ================= QUALIFIED VISITOR ================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (visitCountedRef.current) return;

      const storedTotal =
        Number(localStorage.getItem("totalVisitors")) || 0;
      const storedHistory: number[] = JSON.parse(
        localStorage.getItem("visitorsHistory") || "[]"
      );

      const newTotal = storedTotal + 1;
      const newHistory = [...storedHistory.slice(-6), newTotal];

      localStorage.setItem("totalVisitors", String(newTotal));
      localStorage.setItem(
        "visitorsHistory",
        JSON.stringify(newHistory)
      );

      setTotalVisitors(newTotal);
      setVisitorsHistory(newHistory);

      visitCountedRef.current = true;
    }, VISIT_DELAY);

    return () => clearTimeout(timer);
  }, []);

  /* ================= LOAD INITIAL DATA ================= */
  useEffect(() => {
    const storedTotal =
      Number(localStorage.getItem("totalVisitors")) || 0;
    const storedHistory: number[] = JSON.parse(
      localStorage.getItem("visitorsHistory") || "[]"
    );
    const storedMessages: Message[] = JSON.parse(
      localStorage.getItem("messages") || "[]"
    );

    setTotalVisitors(storedTotal);
    setVisitorsHistory(storedHistory);
    setMessages(storedMessages);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      <h1 className="text-3xl font-bold mb-8">
        Dashboard <span className="text-[#11C1AF]"><br />Overview</span>
      </h1>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatsCard title="Total Visitors" value={totalVisitors} />
        <StatsCard title="New Messages" value={messages.length} />
        <StatsCard title="Projects Requests" value={messages.length} />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <VisitorsChart visitorsHistory={visitorsHistory} />
        <MessagesTable messages={messages} />
      </div>
    </div>
  );
}
