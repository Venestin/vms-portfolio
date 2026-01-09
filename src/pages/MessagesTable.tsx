import { useEffect, useState } from "react";

export function MessagesTable() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("messages") || "[]");
    setMessages(stored);
  }, []);

  return (
    <div className="glass rounded-xl p-6 w-full">
      <h2 className="text-xl font-bold mb-4">Contact Messages</h2>

      {messages.length === 0 ? (
        <p className="text-muted-foreground">No messages yet.</p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-[600px] text-sm md:text-base">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="py-2 px-2 md:px-4">Name</th>
                <th className="py-2 px-2 md:px-4">Email</th>
                <th className="py-2 px-2 md:px-4">Subject</th>
                <th className="py-2 px-2 md:px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-2 px-2 md:px-4">{msg.name}</td>
                  <td className="py-2 px-2 md:px-4 break-all">{msg.email}</td>
                  <td className="py-2 px-2 md:px-4">{msg.subject}</td>
                  <td className="py-2 px-2 md:px-4">{msg.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
