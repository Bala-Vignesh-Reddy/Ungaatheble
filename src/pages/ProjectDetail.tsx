import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projectsData = {
  "project-alpha": {
    title: "Project Alpha",
    description: "A revolutionary AI-powered analytics platform that helps businesses make data-driven decisions. Our platform combines advanced machine learning algorithms with intuitive user interfaces to provide actionable insights. Through sophisticated data processing and visualization techniques, Project Alpha transforms complex datasets into clear, actionable intelligence that drives business growth and innovation.",
    technologies: ["React", "Python", "TensorFlow", "AWS", "Docker", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    github: "https://github.com/ungaatheble/project-alpha",
    features: [
      "Real-time data analysis with sub-second latency",
      "Custom dashboard creation with drag-and-drop interface",
      "Automated reporting with scheduled email delivery",
      "Predictive analytics using state-of-the-art ML models",
      "Integration with popular data sources",
      "Advanced data visualization tools"
    ],
    team: ["John Doe", "Jane Smith", "Mike Wilson"],
    status: "In Development",
    timeline: "Started: January 2024 | Expected Completion: December 2024",
    challenges: [
      "Handling large-scale data processing",
      "Ensuring data privacy and security",
      "Optimizing ML model performance"
    ],
    achievements: [
      "Successfully processed over 1M data points",
      "Reduced analysis time by 75%",
      "Achieved 99.9% uptime"
    ]
  },
  "project-beta": {
    title: "Project Beta",
    description: "Next-generation e-commerce solution built with modern technologies. This platform provides a seamless shopping experience with advanced features for both customers and administrators. Project Beta revolutionizes online retail by incorporating AI-driven recommendations, real-time inventory management, and sophisticated analytics to optimize the shopping experience.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe", "ElasticSearch"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "https://github.com/ungaatheble/project-beta",
    features: [
      "Advanced search functionality with instant results",
      "Real-time inventory management across multiple warehouses",
      "Integrated payment processing with multiple providers",
      "Analytics dashboard with custom reporting",
      "AI-powered product recommendations",
      "Mobile-first responsive design"
    ],
    team: ["Mike Johnson", "Sarah Parker", "Alex Chen"],
    status: "Live",
    timeline: "Started: June 2023 | Launched: January 2024",
    challenges: [
      "Scaling to handle high traffic loads",
      "Implementing real-time inventory sync",
      "Optimizing search performance"
    ],
    achievements: [
      "Processed $1M in transactions",
      "Achieved 50% faster checkout times",
      "Reduced cart abandonment by 30%"
    ]
  },
  "project-gamma": {
    title: "Project Gamma",
    description: "Smart home automation system that revolutionizes how people interact with their living spaces. This IoT solution provides seamless integration with various smart devices, enabling users to create sophisticated automation routines and monitor their home environment from anywhere in the world.",
    technologies: ["IoT", "React Native", "AWS", "MQTT", "Node-RED", "InfluxDB"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
    github: "https://github.com/ungaatheble/project-gamma",
    features: [
      "Device synchronization across multiple protocols",
      "Energy monitoring with cost analysis",
      "Voice control integration with major platforms",
      "Mobile app control with geofencing",
      "Advanced automation scenarios",
      "Real-time environmental monitoring"
    ],
    team: ["John Doe", "Lisa Wong", "David Miller"],
    status: "Beta Testing",
    timeline: "Started: March 2023 | Beta Launch: February 2024",
    challenges: [
      "Ensuring device compatibility",
      "Maintaining low latency control",
      "Implementing robust security measures"
    ],
    achievements: [
      "Connected 1000+ devices successfully",
      "Reduced energy consumption by 40%",
      "Achieved 95% user satisfaction rate"
    ]
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
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-primary mb-4">Status: {project.status}</p>
          <p className="text-muted-foreground mb-2">{project.timeline}</p>
          <p className="text-lg mb-8">{project.description}</p>
          
          <div className="flex items-center space-x-4 mb-8">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button>
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </Button>
            </a>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
              <div className="flex flex-wrap gap-2">
                {project.team.map((member) => (
                  <span key={member} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                    {member}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-center">
                    <span className="w-2 h-2 bg-destructive rounded-full mr-3"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
              <ul className="space-y-2">
                {project.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;