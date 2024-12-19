import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  image: string;
}

export function TeamMember({ id, name, role, image }: TeamMemberProps) {
  return (
    <Link to={`/team/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader className="p-0">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
          />
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </CardContent>
      </Card>
    </Link>
  );
}