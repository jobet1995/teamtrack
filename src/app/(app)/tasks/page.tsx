"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';
import { TaskCard } from '@/components/tasks/task-card';
import { TaskModal } from '@/components/tasks/task-modal';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Task {
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
}

const allTasks: Task[] = [
  {
    id: '1',
    title: 'Design Homepage Mockup',
    description: 'Create initial design mockups for the new homepage',
    priority: 'high',
    status: 'todo',
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
    status: 'todo',
    assignee: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    dueDate: 'Dec 18',
    comments: 1
  },
  {
    id: '3',
    title: 'Implement Navigation',
    description: 'Build responsive navigation component',
    priority: 'high',
    status: 'in-progress',
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
    status: 'in-progress',
    assignee: {
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    dueDate: 'Dec 14',
    comments: 2
  },
  {
    id: '5',
    title: 'User Research',
    description: 'Conduct user interviews and surveys',
    priority: 'low',
    status: 'done',
    assignee: {
      name: 'Anna Williams',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    dueDate: 'Dec 8',
    comments: 8
  }
];

const columns = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'done', title: 'Done' }
];

export default function TasksPage() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [filterPriority, setFilterPriority] = useState<string>('all');

  const filteredTasks = filterPriority === 'all'
    ? allTasks
    : allTasks.filter(task => task.priority === filterPriority);

  const getTasksByStatus = (status: Task['status']) => {
    return filteredTasks.filter(task => task.status === status);
  };

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Tasks</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Manage your tasks with Kanban board
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={filterPriority} onValueChange={setFilterPriority}>
            <SelectTrigger className="w-[150px]" aria-label="Filter tasks by priority">
              <SelectValue placeholder="Filter by priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Button aria-label="Create new task">
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            New Task
          </Button>
        </div>
      </header>

      <main
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        aria-label="Task board with three columns"
      >
        {columns.map((column) => {
          const tasks = getTasksByStatus(column.id as Task['status']);
          return (
            <section key={column.id} className="flex flex-col" aria-labelledby={`${column.id}-heading`}>
              <div className="flex items-center justify-between mb-4">
                <h2
                  id={`${column.id}-heading`}
                  className="font-semibold text-slate-900 dark:text-white flex items-center gap-2"
                >
                  {column.title}
                  <Badge
                    variant="secondary"
                    role="status"
                    aria-labelledby={`${column.id}-heading`}
                  >
                    {tasks.length}
                  </Badge>
                </h2>
              </div>

              <ScrollArea className="flex-1" aria-label={`${column.title} tasks`}>
                <div className="space-y-3 pr-4" role="list" aria-label={`Tasks in ${column.title}`}>
                  {tasks.map((task) => (
                    <div key={task.id} role="listitem">
                      <TaskCard
                        {...task}
                        onClick={() => setSelectedTask(task)}
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </section>
          );
        })}
      </main>

      {selectedTask && (
        <TaskModal
          open={!!selectedTask}
          onOpenChange={(open) => !open && setSelectedTask(null)}
          task={selectedTask}
        />
      )}
    </div>
  );
}
