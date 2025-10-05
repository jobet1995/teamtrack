import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { SimpleProgress } from '@/components/ui/simple-progress';
import { Calendar, Users } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  deadline: string;
  progress: number;
  members: Array<{ name: string; avatar: string }>;
  status: 'active' | 'completed' | 'on-hold';
}

export function ProjectCard({ id, title, description, deadline, progress, members, status }: ProjectCardProps) {
  const statusColors = {
    active: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
    completed: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    'on-hold': 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300'
  };

  return (
    <Link href={`/projects/${id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
            <Badge className={statusColors[status]} variant="secondary">
              {status}
            </Badge>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-2">
            {description}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-600 dark:text-slate-400">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <SimpleProgress value={progress} className="h-2" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Calendar className="h-4 w-4" />
              <span>{deadline}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-slate-600 dark:text-slate-400" />
            <div className="flex -space-x-2">
              {members.slice(0, 3).map((member, i) => (
                <Avatar key={i} className="h-8 w-8 border-2 border-white dark:border-slate-950">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              ))}
              {members.length > 3 && (
                <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-950 flex items-center justify-center text-xs font-medium">
                  +{members.length - 3}
                </div>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProjectCard;