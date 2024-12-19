import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useEffect } from "react";

const teamMembersData = {
  "1": {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "John has over 15 years of experience in technology and entrepreneurship. He founded Ungaatheble with the vision of creating innovative solutions for modern businesses. His expertise in business strategy and product development has been instrumental in driving the company's growth.",
    expertise: ["Business Strategy", "Product Vision", "Team Leadership", "Innovation Management", "Strategic Planning"],
    achievements: [
      "Led company to successful Series A funding",
      "Grew team from 5 to 50 employees",
      "Launched 3 successful product lines"
    ],
    education: [
      "MBA from Harvard Business School",
      "BS in Computer Science from MIT"
    ],
    projects: [
      "Project Alpha - Lead Strategist",
      "Project Beta - Product Owner",
      "Project Gamma - Executive Sponsor"
    ],
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
    bio: "Jane is a seasoned technology leader with a background in distributed systems and AI. She leads our technical strategy and innovation initiatives, bringing over a decade of experience in building scalable systems.",
    expertise: ["System Architecture", "AI/ML", "Technical Leadership", "Cloud Infrastructure", "Team Mentoring"],
    achievements: [
      "Architected cloud-native platform",
      "Patent holder for ML algorithms",
      "Speaker at major tech conferences"
    ],
    education: [
      "PhD in Computer Science from Stanford",
      "MS in AI from Carnegie Mellon"
    ],
    projects: [
      "AI Platform Development",
      "Cloud Migration Initiative",
      "Technical Strategy 2024"
    ],
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
    bio: "Mike is our lead developer with expertise in full-stack development. He ensures our technical implementations meet the highest standards and mentors junior developers.",
    expertise: ["Full-stack Development", "DevOps", "Technical Architecture", "Agile Methodologies", "Code Quality"],
    achievements: [
      "Reduced deployment time by 70%",
      "Implemented CI/CD pipeline",
      "Led team of 10 developers"
    ],
    education: [
      "BS in Software Engineering",
      "Multiple AWS Certifications"
    ],
    projects: [
      "Backend Infrastructure",
      "Developer Tools",
      "Performance Optimization"
    ],
    social: {
      github: "https://github.com/mikejohnson",
      linkedin: "https://linkedin.com/in/mikejohnson",
      twitter: "https://twitter.com/mikejohnson",
      email: "mike@ungaatheble.com"
    }
  },
  "4": {
    name: "Sarah Wilson",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Sarah brings creativity and user-centered design thinking to our products. With 8 years of experience in digital product design, she ensures our solutions are both beautiful and functional.",
    expertise: ["UI Design", "UX Research", "Design Systems", "Prototyping", "User Testing"],
    achievements: [
      "Redesigned core product UI",
      "Established design system",
      "Reduced user error rates by 40%"
    ],
    education: [
      "BFA in Digital Design",
      "UX Certification from Google"
    ],
    projects: [
      "Design System Creation",
      "Mobile App Redesign",
      "User Research Initiative"
    ],
    social: {
      github: "https://github.com/sarahwilson",
      linkedin: "https://linkedin.com/in/sarahwilson",
      twitter: "https://twitter.com/sarahwilson",
      email: "sarah@ungaatheble.com"
    }
  },
  "5": {
    name: "David Brown",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "David specializes in building robust backend systems and APIs. His focus on scalability and performance has been crucial to our platform's success.",
    expertise: ["Backend Development", "Database Design", "API Architecture", "Performance Optimization", "Security"],
    achievements: [
      "Built scalable microservices architecture",
      "Improved API response time by 60%",
      "Implemented robust security measures"
    ],
    education: [
      "MS in Computer Engineering",
      "Database Administration Certification"
    ],
    projects: [
      "API Gateway Implementation",
      "Database Optimization",
      "Security Infrastructure"
    ],
    social: {
      github: "https://github.com/davidbrown",
      linkedin: "https://linkedin.com/in/davidbrown",
      twitter: "https://twitter.com/davidbrown",
      email: "david@ungaatheble.com"
    }
  },
  "6": {
    name: "Emily Davis",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    bio: "Emily bridges the gap between business needs and technical implementation. Her product management expertise helps guide our development roadmap and ensure customer satisfaction.",
    expertise: ["Product Strategy", "Agile Management", "User Stories", "Market Research", "Stakeholder Management"],
    achievements: [
      "Launched 5 major product features",
      "Increased user engagement by 200%",
      "Established agile processes"
    ],
    education: [
      "MBA in Product Management",
      "BS in Business Administration"
    ],
    projects: [
      "Product Roadmap 2024",
      "Feature Prioritization",
      "Market Analysis"
    ],
    social: {
      github: "https://github.com/emilydavis",
      linkedin: "https://linkedin.com/in/emilydavis",
      twitter: "https://twitter.com/emilydavis",
      email: "emily@ungaatheble.com"
    }
  }
};

const TeamMemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = teamMembersData[id as keyof typeof teamMembersData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Member not found</h1>
        <Button onClick={() => {
          navigate('/');
          setTimeout(() => {
            const teamSection = document.querySelector('#team-section');
            teamSection?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}>
          Return to Team
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        variant="ghost"
        onClick={() => {
          navigate('/');
          setTimeout(() => {
            const teamSection = document.querySelector('#team-section');
            teamSection?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        className="mb-8"
      >
        ← Back to Team
      </Button>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
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

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
              <ul className="space-y-2">
                {member.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <ul className="space-y-2">
                {member.education.map((edu) => (
                  <li key={edu} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {edu}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <ul className="space-y-2">
                {member.projects.map((project) => (
                  <li key={project} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {project}
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

export default TeamMemberDetail;