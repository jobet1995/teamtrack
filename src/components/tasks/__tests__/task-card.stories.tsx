import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TaskCard } from '../task-card';

const meta: Meta<typeof TaskCard> = {
  title: 'Tasks/TaskCard',
  component: TaskCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
      description: 'Callback when card is clicked',
    },
    priority: {
      control: 'select',
      options: ['low', 'medium', 'high'],
      description: 'Priority level of the task',
    },
    status: {
      control: 'select',
      options: ['todo', 'in-progress', 'done'],
      description: 'Status of the task',
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
  comments: 3,
};

export const Default: Story = {
  args: {
    ...sampleTask,
  },
};

export const HighPriority: Story = {
  args: {
    ...sampleTask,
    priority: 'high' as const,
    title: 'Fix critical security vulnerability',
    description: 'Urgent security issue needs immediate attention. Patch needs to be deployed ASAP.',
  },
};

export const MediumPriority: Story = {
  args: {
    ...sampleTask,
    priority: 'medium' as const,
    title: 'Implement user feedback system',
    description: 'Add functionality to collect and display user feedback on the platform.',
  },
};

export const LowPriority: Story = {
  args: {
    ...sampleTask,
    priority: 'low' as const,
    title: 'Update team documentation',
    description: 'Refresh the internal documentation with recent changes and best practices.',
  },
};

export const TodoStatus: Story = {
  args: {
    ...sampleTask,
    status: 'todo' as const,
    title: 'Plan sprint retrospective',
    description: 'Organize and facilitate the team retrospective meeting for the current sprint.',
  },
};

export const InProgressStatus: Story = {
  args: {
    ...sampleTask,
    status: 'in-progress' as const,
    title: 'Develop API endpoints',
    description: 'Implement the new REST API endpoints for the user management system.',
  },
};

export const DoneStatus: Story = {
  args: {
    ...sampleTask,
    status: 'done' as const,
    title: 'Set up monitoring dashboard',
    description: 'Configure monitoring tools and create dashboards for system performance tracking.',
  },
};

export const NoComments: Story = {
  args: {
    ...sampleTask,
    comments: 0,
    title: 'Quick bug fix',
    description: 'Fix minor styling issue in the navigation component.',
  },
};

export const ManyComments: Story = {
  args: {
    ...sampleTask,
    comments: 15,
    title: 'Controversial feature request',
    description: 'Discussion around implementing a new feature that has divided opinions in the team.',
  },
};

export const LongTitle: Story = {
  args: {
    ...sampleTask,
    title: 'This is a very long task title that should test how the card handles long titles and wraps them appropriately',
    description: 'Short description for a task with a very long title.',
  },
};

export const LongDescription: Story = {
  args: {
    ...sampleTask,
    description: 'This is a very long description that should test how the card handles longer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const Clickable: Story = {
  args: {
    ...sampleTask,
    onClick: () => alert('Task card clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'TaskCard with click handler. Click the card to see the action in the Actions panel.',
      },
    },
  },
};
