import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // ✅ Import Link pour React Router

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", type: "section" },
    { name: "Projects", href: "#projects", type: "section" },
    { name: "Skills", href: "#skills", type: "section" },
    { name: "Contact", href: "#contact", type: "section" },
    { name: "Chat", href: "/chat", type: "route" }, // route React Router
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold font-display tracking-tighter gap-2"
        >
          {/* Logo */}
          <img
            src={`${import.meta.env.BASE_URL}VMSLogoPortofolio.webp`}
            alt="VMS Logo"
            className="w-8 h-8 object-contain"
          />
          {/* Texte */}
          VMS<span className="text-primary">Dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            )
          )}

          <div className="flex items-center gap-4 ml-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>

            {/* Resume Download Button */}
            <a
              href={`${import.meta.env.BASE_URL}CV_FullStack_VMS.pdf`}
              download
            >
              <Button
                size="sm"
                className="rounded-full px-6 flex items-center gap-2"
              >
                <i className="bi bi-download text-base"></i>
                Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass animate-in fade-in slide-in-from-top-4 py-6 px-6 border-t border-white/10">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
            <hr className="border-white/10 my-2" />
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <Github className="w-6 h-6" />
                <Linkedin className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
              </div>

              {/* Resume Download (Mobile) */}
              <a href="/vms-portfolio/CV_FullStack_VMS.pdf" download>
                <Button className="rounded-full">Resume</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
