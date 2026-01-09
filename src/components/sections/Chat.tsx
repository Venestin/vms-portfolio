import { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ---------------- TYPES ---------------- */
type Message = {
  from: "bot" | "user";
  text: string;
};

/* ---------------- QUESTIONS ---------------- */
const ALL_QUESTIONS = [
  "who are you",
  "what do you do",
  "where are you based",
  "what are your main skills",
  "do you work more on frontend or backend",

  "what backend technologies do you use",
  "what frontend tools do you use",
  "do you have experience with databases",
  "what projects have you worked on",
  "where can i see your projects",

  "what is your education background",
  "do you have professional experience",
  "how can i contact you",
  "can i download your cv",
  "are you open to job opportunities",

  "are you available for freelance",
  "do you have references",
  "can i trust your experience?",
];

/* ---------------- BOT RESPONSES ---------------- */
const BOT_RESPONSES: Record<string, string> = {
  "who are you":
    "I’m Venestin Mtambala Stanley (VMS), a Junior Full-Stack Web Developer passionate about building modern, user-focused web applications.",

  "what do you do":
    "I design and develop full-stack web applications, from user interfaces to backend logic and APIs.",

  "where are you based":
    "I’m based in Bujumbura, Burundi, and open to remote or international opportunities.",

  "what are your main skills":
    "My main skills include HTML, CSS, JavaScript, React, Node.js, Express, REST APIs, Chart.js, Bootstrap, Tailwind CSS, UI/UX design using Figma, Visual Studio, VS Code, Git, GitHub, Photoshop, UML, Merise, ASP.NET Core, C#, and MySQL.",

  "do you work more on frontend or backend":
    "I work on both frontend and backend, but I especially enjoy building complete full-stack solutions.",

  "what backend technologies do you use":
    "I use Node.js, Express, REST APIs, ASP.NET Core, C#, and work with databases like MySQL.",

  "what frontend tools do you use":
    "I use HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS, and Chart.js.",

  "do you have experience with databases":
    "Yes, I work mainly with relational databases such as MySQL.",

  "what projects have you worked on":
    "I’ve worked on a Pharmacy Management Dashboard, full-stack CRUD applications, dashboards, marketing websites, and portfolio projects.",

  "where can i see your projects":
    "You can explore my projects directly in the Projects section of this portfolio.",

  "what is your education background":
    "I hold a Bachelor's degree in Computer Science, specialized in Software Engineering, obtained at Hope Africa University (2023–2025). I also have professional training in English and continuous self-learning in software development.",

  "do you have professional experience":
    "Yes, I have over 4 years of experience as a teacher and trainer, which strengthened my communication and problem-solving skills.",

  "how can i contact you":
    "You can contact me via the Contact form on this portfolio, by email, WhatsApp, or through my social media links.",

  "can i download your cv":
    "Yes 🙂 You can download my CV using the Resume button in the navigation bar.",

  "are you open to job opportunities":
    "Yes, I’m open to internships, junior developer roles, and remote opportunities.",

  "are you available for freelance":
    "Yes, I’m available for freelance and project-based collaborations.",

  "do you have references":
    "Yes, I have professional references available on my CV.",

  "can i trust your experience":
    "Absolutely. My experience is based on real projects, academic work, and professional teaching experience.",
};

const DEFAULT_REPLY =
  "I can answer questions related to my CV, skills, projects, education or contact information 🙂";

/* ---------------- COMPONENT ---------------- */
export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi 👋 I’m VMS Assistant. You can ask me questions about my CV, skills, projects or contact details.",
    },
  ]);

  const [input, setInput] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [visibleQuestions, setVisibleQuestions] = useState(
    ALL_QUESTIONS.slice(0, 5)
  );

  /* ✅ TYPEWRITER FIXED */
  const typeBotMessage = (fullText: string) => {
    let index = 0;

    // 1️⃣ Ajouter un message bot vide
    setMessages((prev) => [...prev, { from: "bot", text: "" }]);

    const interval = setInterval(() => {
      index++;

      setMessages((prev) => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;

        // 2️⃣ Remplir progressivement le dernier message
        updated[lastIndex] = {
          from: "bot",
          text: fullText.slice(0, index),
        };

        return updated;
      });

      // 3️⃣ Stop propre
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 20);
  };



  /* ---------------- SEND ---------------- */
  const handleSend = (text?: string) => {
    const userText = (text ?? input).trim();
    if (!userText) return;

    const lower = userText.toLowerCase();

    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");

    setVisibleQuestions((prev) => prev.filter((q) => q !== lower));

    setTimeout(() => {
      const response =
        Object.entries(BOT_RESPONSES).find(([key]) =>
          lower.includes(key)
        )?.[1] || DEFAULT_REPLY;

      typeBotMessage(response);

      if (visibleQuestions.length <= 1) {
        const next = questionIndex + 5;
        setQuestionIndex(next);
        setVisibleQuestions(ALL_QUESTIONS.slice(next, next + 5));
      }
    }, 400);
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div
        data-aos="fade-up"
        className="w-full max-w-3xl glass-card rounded-3xl p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
          <Bot className="text-primary w-6 h-6" />
          <h2 className="text-xl font-bold">Portfolio Assistant</h2>
        </div>

        <div
          data-aos="fade-up"
          className="flex-1 space-y-4 overflow-y-auto mb-4 pr-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.from === "user" ? "justify-end" : "justify-start"
                }`}
            >
              {msg.from === "bot" && (
                <Bot className="w-5 h-5 text-primary mt-1" />
              )}
              <div
                className={`px-4 py-3 rounded-2xl text-sm max-w-[75%] ${msg.from === "user"
                  ? "bg-primary text-white"
                  : "glass"
                  }`}
              >
                {msg.text}
              </div>
              {msg.from === "user" && <User className="w-5 h-5 mt-1" />}
            </div>
          ))}
        </div>

        <div 
        data-aos="fade-up"
        className="flex flex-wrap gap-2 mb-4">
          {visibleQuestions.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              data-aos="fade-up"
              className="text-xs px-3 py-1 rounded-full glass hover:text-primary transition"
            >
              {q}
            </button>
          ))}
        </div>

        <div
        data-aos="fade-up" 
        className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something about my CV..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="rounded-xl glass"
          />
          <Button onClick={() => handleSend()} className="rounded-xl">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
