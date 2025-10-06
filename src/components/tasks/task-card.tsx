import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, MessageSquare } from 'lucide-react';

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'done';
  assignee: {
    name: string;
    avatar: string;
  };
  dueDate: string;
  comments: number;
  onClick?: () => void;
}

const priorityColors = {
  low: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  medium: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
  high: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
};

export function TaskCard({ title, description, priority, assignee, dueDate, comments, onClick }: TaskCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
      tabIndex={0}
      aria-label={`Task: ${title}. Priority: ${priority}. Click to view details.`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <CardHeader className="p-4 pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium leading-tight">{title}</h3>
          <Badge
            className={priorityColors[priority]}
            variant="secondary"
            role="status"
          >
            {priority}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <p
          className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2"
          role="text"
          aria-label={`Description: ${description}`}
        >
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2" role="text" aria-label={`Assignee: ${assignee.name}`}>
            <Avatar className="h-6 w-6" aria-hidden="true">
              <AvatarImage src={assignee.avatar} alt={`${assignee.name} avatar`} />
              <AvatarFallback className="text-xs">
                {assignee.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-slate-600 dark:text-slate-400">{assignee.name}</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1" role="text" aria-label={`Due date: ${dueDate}`}>
              <Calendar className="h-3 w-3" aria-hidden="true" />
              <span>{dueDate}</span>
            </div>
            <div className="flex items-center gap-1" role="text" aria-label={`${comments} comments`}>
              <MessageSquare className="h-3 w-3" aria-hidden="true" />
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}