import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembersData = {
  "1": {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "John has over 15 years of experience in technology and entrepreneurship. He founded Ungaatheble with the vision of creating innovative solutions for modern businesses.",
    expertise: ["Business Strategy", "Product Vision", "Team Leadership"],
  },
  "2": {
    name: "Jane Smith",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Jane is a seasoned technology leader with a background in distributed systems and AI. She leads our technical strategy and innovation initiatives.",
    expertise: ["System Architecture", "AI/ML", "Technical Leadership"],
  },
  "3": {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    bio: "Mike is our lead developer with expertise in full-stack development. He ensures our technical implementations meet the highest standards.",
    expertise: ["Full-stack Development", "DevOps", "Technical Architecture"],
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