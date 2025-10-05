import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectCard } from '../project-card';

const meta: Meta<typeof ProjectCard> = {
  title: 'components/projects/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['active', 'completed', 'on-hold'],
    },
    progress: {
      control: { type: 'number', min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

const sampleMembers = [
  {
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'David Kim',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const Default: Story = {
  args: {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: 'Complete overhaul of the user interface and user experience for our main e-commerce platform.',
    deadline: 'Dec 30, 2024',
    progress: 65,
    members: sampleMembers,
    status: 'active',
  },
};

export const Completed: Story = {
  args: {
    id: '2',
    title: 'Mobile App Launch',
    description: 'Successfully launched the new mobile application with enhanced features and improved performance.',
    deadline: 'Nov 15, 2024',
    progress: 100,
    members: sampleMembers,
    status: 'completed',
  },
};

export const OnHold: Story = {
  args: {
    id: '3',
    title: 'Marketing Campaign Q4',
    description: 'Quarterly marketing campaign planning and execution across all digital channels.',
    deadline: 'Jan 15, 2025',
    progress: 25,
    members: sampleMembers,
    status: 'on-hold',
  },
};

export const LowProgress: Story = {
  args: {
    id: '4',
    title: 'Database Migration',
    description: 'Migrate legacy database systems to modern cloud infrastructure with zero downtime.',
    deadline: 'Feb 28, 2025',
    progress: 15,
    members: sampleMembers,
    status: 'active',
  },
};

export const ManyMembers: Story = {
  args: {
    id: '5',
    title: 'Team Collaboration Platform',
    description: 'Build an internal platform to improve team communication and project management efficiency.',
    deadline: 'Mar 20, 2025',
    progress: 45,
    members: [
      ...sampleMembers,
      {
        name: 'Anna Williams',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'James Wilson',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ],
    status: 'active',
  },
};
