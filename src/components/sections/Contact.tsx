import {
  Mail,
  Send,
  MessageSquare,
  Linkedin,
  Github,
  X,
  Facebook,
  Instagram,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingMessages = JSON.parse(
      localStorage.getItem("messages") || "[]"
    );

    const newMessage = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "messages",
      JSON.stringify([newMessage, ...existingMessages])
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8">
              <span className="text-sm font-medium text-primary">
                Get in touch
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-8">
              Let's build something <br />
              <span className="text-gradient">remarkable</span> together.
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed">
              Have a project in mind? Or just want to say hi? I'm always open to
              discussing new opportunities.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Email Me
                  </p>
                  <p className="text-xl font-bold font-display">
                    venestinmtambalavms@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <MessageSquare className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Social Channels
                  </p>
                  <div className="flex gap-4 mt-2">
                    <Linkedin className="w-5 h-5" />
                    <X className="w-5 h-5" />
                    <Facebook className="w-5 h-5" />
                    <Instagram className="w-5 h-5" />
                    <MessageCircle className="w-5 h-5" />
                    <Github className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div 
          data-aos="fade-up"
          className="glass-card p-10 rounded-3xl relative">
            {success && (
              <div className="mb-6 flex items-center gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-emerald-400 animate-in fade-in">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">
                  Message sent successfully. I’ll get back to you soon 🚀
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="rounded-xl glass border-white/10 h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="rounded-xl glass border-white/10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="rounded-xl glass border-white/10 h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="rounded-xl glass border-white/10 min-h-[160px] resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-xl text-lg group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
