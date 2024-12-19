import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export function ProjectCard({ id, title, description, technologies, image }: ProjectProps) {
  return (
    <Link to={`/project/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader className="p-0">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}