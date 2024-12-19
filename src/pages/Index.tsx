import { ImageSlideshow } from "@/components/ImageSlideshow";
import { TeamMember } from "@/components/TeamMember";
import { ProjectCard } from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: "3",
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
];

const projects = [
  {
    id: "project-alpha",
    title: "Project Alpha",
    description: "A revolutionary AI-powered analytics platform",
    technologies: ["React", "Python", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: "project-beta",
    title: "Project Beta",
    description: "Next-generation e-commerce solution",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: "project-gamma",
    title: "Project Gamma",
    description: "Smart home automation system",
    technologies: ["IoT", "React Native", "AWS"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Welcome to Ungaatheble
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-8">
          Where passion meets innovation
        </p>
        <ImageSlideshow />
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;