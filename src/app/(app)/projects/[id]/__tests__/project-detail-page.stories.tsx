import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectDetailPage from '../page';

const meta: Meta<typeof ProjectDetailPage> = {
  title: 'pages/ProjectDetailPage',
  component: ProjectDetailPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Project detail page showing comprehensive project information including tasks, timeline, and team members.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectDetailPage>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default project detail page showing all project information, tasks kanban board, and activity timeline.',
      },
    },
  },
};

export const WithDifferentProjectData: Story = {
  render: () => {
    // Simulate different project data by creating a custom component
    const CustomProjectDetailPage = () => {
      const project = {
        title: 'Mobile App Development',
        description: 'Cross-platform mobile application development with React Native including iOS and Android deployment.',
        deadline: 'March 15, 2026',
        progress: 45,
        status: 'active',
        members: [
          { name: 'David Kim', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' },
          { name: 'Anna Williams', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150' },
          { name: 'James Wilson', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150' }
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
                <span className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 text-sm px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                {project.description}
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 dark:bg-slate-50 px-4 py-2 text-sm font-medium text-slate-50 dark:text-slate-900 shadow hover:bg-slate-900/90 dark:hover:bg-slate-50/90">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Project
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 space-y-4">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Deadline</span>
              </div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {project.deadline}
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 space-y-4">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <span className="text-sm font-medium">Team Members</span>
              </div>
              <div className="flex -space-x-2">
                {project.members.map((member, i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm font-medium">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Progress</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{project.progress}%</span>
              </div>
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className="h-full bg-blue-600 transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Simulated Kanban columns */}
              {['To Do', 'In Progress', 'Done'].map((columnTitle) => (
                <div key={columnTitle} className="flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      {columnTitle}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {/* Sample task cards */}
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-sm font-medium text-slate-900 dark:text-white">Sample Task</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Task description...</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Activity Timeline</h2>
            <div className="space-y-6">
              {/* Sample timeline events */}
              {[
                { user: 'Michael Chen', action: 'moved task to In Progress', time: '10 minutes ago' },
                { user: 'Sarah Johnson', action: 'added a comment', time: '1 hour ago' },
                { user: 'David Kim', action: 'created new task', time: '2 hours ago' }
              ].map((event, i) => (
                <div key={i} className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm font-medium">
                    {event.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">{event.user}</span>{' '}
                      <span className="text-slate-600 dark:text-slate-400">{event.action}</span>
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    return <CustomProjectDetailPage />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Project detail page with different project data showing mobile app development project.',
      },
    },
  },
};
