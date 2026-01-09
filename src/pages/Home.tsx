// src/pages/Home.tsx
import { useEffect, useRef } from "react";

import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Chat } from "@/components/sections/Chat"; // ✅ AJOUT ICI

const VISIT_DELAY = 2 * 60 * 1000; // 2 minutes

export default function Home() {
  const countedRef = useRef(false);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem("visitCounted");
    if (alreadyCounted) return;

    const timer = setTimeout(() => {
      if (countedRef.current) return;

      const total = Number(localStorage.getItem("totalVisitors")) || 0;
      const history: number[] = JSON.parse(
        localStorage.getItem("visitorsHistory") || "[]"
      );

      const newTotal = total + 1;
      const newHistory = [...history.slice(-6), newTotal];

      localStorage.setItem("totalVisitors", String(newTotal));
      localStorage.setItem(
        "visitorsHistory",
        JSON.stringify(newHistory)
      );

      sessionStorage.setItem("visitCounted", "true");
      countedRef.current = true;

      console.log("✅ Visiteur qualifié compté");
    }, VISIT_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* ✅ CHATBOT FLOTTANT */}
      <Chat />
    </>
  );
}
