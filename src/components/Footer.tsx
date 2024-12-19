import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Ungaatheble</h3>
            <p className="text-muted-foreground">Where passion meets innovation</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-muted-foreground">Email: info@ungaatheble.com</p>
            <p className="text-muted-foreground">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-muted-foreground text-sm mt-8">
          © 2024 Ungaatheble. All rights reserved.
        </div>
      </div>
    </footer>
  );
}