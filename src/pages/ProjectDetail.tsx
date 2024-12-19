import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projectsData = {
  "project-alpha": {
    title: "Project Alpha",
    description: "A revolutionary AI-powered analytics platform that helps businesses make data-driven decisions. Our platform combines advanced machine learning algorithms with intuitive user interfaces to provide actionable insights.",
    technologies: ["React", "Python", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    github: "https://github.com/ungaatheble/project-alpha",
    features: [
      "Real-time data analysis",
      "Custom dashboard creation",
      "Automated reporting",
      "Predictive analytics"
    ],
    team: ["John Doe", "Jane Smith"],
    status: "In Development"
  },
  "project-beta": {
    title: "Project Beta",
    description: "Next-generation e-commerce solution built with modern technologies. This platform provides a seamless shopping experience with advanced features for both customers and administrators.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "https://github.com/ungaatheble/project-beta",
    features: [
      "Advanced search functionality",
      "Real-time inventory management",
      "Integrated payment processing",
      "Analytics dashboard"
    ],
    team: ["Mike Johnson", "Jane Smith"],
    status: "Live"
  },
  "project-gamma": {
    title: "Project Gamma",
    description: "Smart home automation system that revolutionizes how people interact with their living spaces. This IoT solution provides seamless integration with various smart devices.",
    technologies: ["IoT", "React Native", "AWS"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
    github: "https://github.com/ungaatheble/project-gamma",
    features: [
      "Device synchronization",
      "Energy monitoring",
      "Voice control",
      "Mobile app control"
    ],
    team: ["John Doe", "Mike Johnson"],
    status: "Beta Testing"
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/" className="inline-block mb-8">
        <Button variant="ghost">← Back to Home</Button>
      </Link>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-primary mb-6">Status: {project.status}</p>
          <p className="text-lg mb-8">{project.description}</p>
          
          <div className="flex items-center space-x-4 mb-8">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button>
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </Button>
            </a>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-2 mb-8">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
          <div className="flex flex-wrap gap-2">
            {project.team.map((member) => (
              <span key={member} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                {member}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;