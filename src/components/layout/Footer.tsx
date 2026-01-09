import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import {
  X,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold font-display tracking-tighter mb-6 block">
              DEV<span className="text-primary">VMS</span>
            </a>
            <p className="text-muted-foreground max-w-md mb-8">
              Full-stack developer specializing in modern web technologies, UI/UX design, and data-driven growth, bridging engineering, design, and strategy to solve real business problems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg glass hover:text-primary transition-colors">
                <X className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:venestinmtambalavms@gmail.com">venestinmtambalavms@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>70 Kinama Gitega, Bujumbura</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>
                  <a href="tel:+25765196741">(+257) 651 967 41</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevVms Portfolio. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
