"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectFormModal } from '@/components/projects/project-form-modal';

const projects = [
  {
    id: '1',
    title: 'Website Redesign',
    description: 'Complete overhaul of the company website with modern design and improved UX',
    deadline: 'Dec 31, 2025',
    progress: 75,
    status: 'active' as const,
    members: [
      { name: 'Sarah Johnson', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Michael Chen', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Emily Rodriguez', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' }
    ]
  },
  {
    id: '2',
    title: 'Mobile App Launch',
    description: 'Develop and launch iOS and Android mobile applications',
    deadline: 'Jan 15, 2026',
    progress: 45,
    status: 'active' as const,
    members: [
      { name: 'David Kim', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Anna Williams', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150' }
    ]
  },
  {
    id: '3',
    title: 'Marketing Campaign',
    description: 'Q4 marketing campaign across social media and email channels',
    deadline: 'Nov 30, 2025',
    progress: 90,
    status: 'active' as const,
    members: [
      { name: 'Sarah Johnson', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Emily Rodriguez', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Michael Chen', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'David Kim', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' }
    ]
  },
  {
    id: '4',
    title: 'Customer Portal',
    description: 'Build self-service portal for customer account management',
    deadline: 'Feb 28, 2026',
    progress: 30,
    status: 'active' as const,
    members: [
      { name: 'Michael Chen', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150' }
    ]
  },
  {
    id: '5',
    title: 'API Documentation',
    description: 'Comprehensive API documentation with examples and tutorials',
    deadline: 'Dec 15, 2025',
    progress: 100,
    status: 'completed' as const,
    members: [
      { name: 'David Kim', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Anna Williams', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150' }
    ]
  },
  {
    id: '6',
    title: 'Security Audit',
    description: 'Complete security audit and penetration testing',
    deadline: 'Jan 30, 2026',
    progress: 0,
    status: 'on-hold' as const,
    members: [
      { name: 'Sarah Johnson', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' }
    ]
  }
];

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Projects</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Manage and track all your projects in one place
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <ProjectFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
