"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Calendar, User, CreditCard as Edit, Trash2 } from 'lucide-react';
import { CommentBox } from './comment-box';

interface TaskModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  task: {
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
  };
}

const priorityColors = {
  low: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  medium: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300',
  high: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
};

export function TaskModal({ open, onOpenChange, task }: TaskModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-xl">{task.title}</DialogTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                aria-label={`Edit task: ${task.title}`}
              >
                <Edit className="h-4 w-4 mr-2" aria-hidden="true" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600"
                aria-label={`Delete task: ${task.title}`}
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Description</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {task.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block" id="status-label">Status</label>
              <Select defaultValue={task.status} aria-labelledby="status-label">
                <SelectTrigger aria-label={`Current status: ${task.status}`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block" id="priority-label">Priority</label>
              <Badge
                className={priorityColors[task.priority]}
                variant="secondary"
                role="status"
              >
                {task.priority}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-slate-600 dark:text-slate-400" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8" aria-hidden="true">
                  <AvatarImage src={task.assignee.avatar} alt={`${task.assignee.name} avatar`} />
                  <AvatarFallback>
                    {task.assignee.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm" role="text" aria-label={`Assignee: ${task.assignee.name}`}>{task.assignee.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-slate-600 dark:text-slate-400" aria-hidden="true" />
              <span className="text-sm" role="text" aria-label={`Due date: ${task.dueDate}`}>{task.dueDate}</span>
            </div>
          </div>

          <Separator />

          <CommentBox />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TaskModal;