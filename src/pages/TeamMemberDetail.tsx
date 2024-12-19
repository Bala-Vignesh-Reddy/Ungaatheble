import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const teamMembersData = {
  "1": {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "John has over 15 years of experience in technology and entrepreneurship. He founded Ungaatheble with the vision of creating innovative solutions for modern businesses.",
    expertise: ["Business Strategy", "Product Vision", "Team Leadership"],
    social: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      email: "john@ungaatheble.com"
    }
  },
  "2": {
    name: "Jane Smith",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Jane is a seasoned technology leader with a background in distributed systems and AI. She leads our technical strategy and innovation initiatives.",
    expertise: ["System Architecture", "AI/ML", "Technical Leadership"],
    social: {
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      email: "jane@ungaatheble.com"
    }
  },
  "3": {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    bio: "Mike is our lead developer with expertise in full-stack development. He ensures our technical implementations meet the highest standards.",
    expertise: ["Full-stack Development", "DevOps", "Technical Architecture"],
    social: {
      github: "https://github.com/mikejohnson",
      linkedin: "https://linkedin.com/in/mikejohnson",
      twitter: "https://twitter.com/mikejohnson",
      email: "mike@ungaatheble.com"
    }
  },
};

const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamMembersData[id as keyof typeof teamMembersData];

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Member not found</h1>
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
            src={member.image}
            alt={member.name}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
          <p className="text-xl text-primary mb-6">{member.role}</p>
          <p className="text-lg mb-8">{member.bio}</p>
          
          <div className="flex items-center space-x-4 mb-8">
            <a href={member.social.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </a>
            <a href={`mailto:${member.social.email}`}>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Areas of Expertise</h2>
          <ul className="space-y-2">
            {member.expertise.map((skill) => (
              <li key={skill} className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;