import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import ProjectsPage from '../page';

const meta: Meta<typeof ProjectsPage> = {
  title: 'pages/ProjectsPage',
  component: ProjectsPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main projects listing page that displays all projects in a grid layout with modal for creating new projects.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectsPage>;

const ProjectsPageWrapper = () => {
  // The component handles its own state, so we just render it directly
  return <ProjectsPage />;
};

export const Default: Story = {
  render: ProjectsPageWrapper,
  parameters: {
    docs: {
      description: {
        story: 'Default projects page showing all projects in a grid layout with the "New Project" button.',
      },
    },
  },
};

export const WithModalOpen: Story = {
  render: () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Projects</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Manage and track all your projects in one place
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
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
            }
          ].map((project) => (
            <div key={project.id} className={`transition-opacity duration-200 ${isModalOpen ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 text-xs px-2 py-1 rounded">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-950 rounded-lg p-6 max-w-md w-full mx-4">
              <h2 className="text-lg font-semibold mb-4">Create New Project</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                This modal is open and would contain a form for creating new projects.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  className="px-3 py-2 text-sm border rounded hover:bg-slate-50 dark:hover:bg-slate-800"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Projects page with modal open, showing how the interface appears when creating a new project.',
      },
    },
  },
};
