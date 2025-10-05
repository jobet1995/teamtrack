import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SimpleProgress } from '@/components/ui/simple-progress';
import { Calendar, Users, CreditCard as Edit } from 'lucide-react';
import { KanbanBoard } from '@/components/projects/kanban-board';
import { Timeline } from '@/components/projects/timeline';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];
}

export const dynamicParams = true;

export default function ProjectDetailPage() {
  const project = {
    title: 'Website Redesign',
    description: 'Complete overhaul of the company website with modern design and improved user experience. This project includes updating the visual design, improving navigation, optimizing performance, and ensuring mobile responsiveness.',
    deadline: 'December 31, 2025',
    progress: 75,
    status: 'active',
    members: [
      { name: 'Sarah Johnson', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Michael Chen', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Emily Rodriguez', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h1>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
              {project.status}
            </Badge>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
            {project.description}
          </p>
        </div>
        <Button>
          <Edit className="h-4 w-4 mr-2" />
          Edit Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Calendar className="h-5 w-5" />
            <span className="text-sm font-medium">Deadline</span>
          </div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            {project.deadline}
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Users className="h-5 w-5" />
            <span className="text-sm font-medium">Team Members</span>
          </div>
          <div className="flex -space-x-2">
            {project.members.map((member, i) => (
              <Avatar key={i} className="h-10 w-10 border-2 border-white dark:border-slate-950">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Progress</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">{project.progress}%</span>
          </div>
          <SimpleProgress value={project.progress} className="h-3" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Tasks</h2>
        <KanbanBoard />
      </div>

      <Timeline />
    </div>
  );
}
