import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="font-playfair text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            {personalInfo.name}
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center gap-2 justify-center">
              © {currentYear} {personalInfo.name}. Fait avec <Heart className="h-4 w-4 text-red-500 fill-red-500" /> et React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
