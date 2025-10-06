import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TaskModal } from '../task-modal';

const meta: Meta<typeof TaskModal> = {
  title: 'Tasks/TaskModal',
  component: TaskModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the modal is open',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when modal open state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTask = {
  id: '1',
  title: 'Design new user onboarding flow',
  description: 'Create wireframes and mockups for the new user onboarding experience. Focus on improving user engagement and reducing drop-off rates.',
  priority: 'high' as const,
  status: 'in-progress' as const,
  assignee: {
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  dueDate: '2024-01-15',
};

export const Default: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    task: sampleTask,
  },
};

export const TodoTask: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    task: {
      ...sampleTask,
      status: 'todo' as const,
      title: 'Review project requirements',
      description: 'Review and analyze the project requirements document to ensure all features are properly understood.',
    },
  },
};

export const CompletedTask: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    task: {
      ...sampleTask,
      status: 'done' as const,
      priority: 'medium' as const,
      title: 'Set up CI/CD pipeline',
      description: 'Configure automated testing and deployment pipeline for the project.',
    },
  },
};

export const LowPriorityTask: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    task: {
      ...sampleTask,
      priority: 'low' as const,
      title: 'Update documentation',
      description: 'Update the API documentation to reflect recent changes in the authentication system.',
    },
  },
};

export const MediumPriorityTask: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    task: {
      ...sampleTask,
      priority: 'medium' as const,
      title: 'Fix responsive layout issues',
      description: 'Address responsive design issues on mobile devices, particularly in the dashboard view.',
    },
  },
};

export const LongDescription: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    task: {
      ...sampleTask,
      description: 'This is a very long description that should test how the modal handles longer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  },
};

export const Closed: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    task: sampleTask,
  },
};
