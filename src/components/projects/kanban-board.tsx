"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, MessageSquare } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  assignee: {
    name: string;
    avatar: string;
  };
  dueDate: string;
  comments: number;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const columns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: '1',
        title: 'Design Homepage Mockup',
        description: 'Create initial design mockups for the new homepage',
        priority: 'high',
        assignee: {
          name: 'Sarah Johnson',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        dueDate: 'Dec 15',
        comments: 3
      },
      {
        id: '2',
        title: 'Content Strategy',
        description: 'Plan content structure and navigation',
        priority: 'medium',
        assignee: {
          name: 'Emily Rodriguez',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        dueDate: 'Dec 18',
        comments: 1
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      {
        id: '3',
        title: 'Implement Navigation',
        description: 'Build responsive navigation component',
        priority: 'high',
        assignee: {
          name: 'Michael Chen',
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        dueDate: 'Dec 12',
        comments: 5
      },
      {
        id: '4',
        title: 'Database Schema',
        description: 'Design and implement new database schema',
        priority: 'medium',
        assignee: {
          name: 'David Kim',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        dueDate: 'Dec 14',
        comments: 2
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: '5',
        title: 'User Research',
        description: 'Conduct user interviews and surveys',
        priority: 'low',
        assignee: {
          name: 'Anna Williams',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        dueDate: 'Dec 8',
        comments: 8
      }
    ]
  }
];

const priorityColors = {
  low: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  medium: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
  high: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
};

export function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map((column) => (
        <div key={column.id} className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              {column.title}
              <Badge variant="secondary" className="ml-2">
                {column.tasks.length}
              </Badge>
            </h3>
          </div>

          <ScrollArea className="flex-1">
            <div className="space-y-3 pr-4">
              {column.tasks.map((task) => (
                <Card key={task.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader className="p-4 pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-sm font-medium leading-tight">
                        {task.title}
                      </CardTitle>
                      <Badge className={priorityColors[task.priority]} variant="secondary">
                        {task.priority}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-3">
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {task.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                        <AvatarFallback className="text-xs">
                          {task.assignee.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {task.dueDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {task.comments}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;