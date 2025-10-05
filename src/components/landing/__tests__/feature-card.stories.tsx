import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Kanban, SquareCheck as CheckSquare, Users, Bell } from 'lucide-react';
import { FeatureCard } from '../feature-card';

const meta: Meta<typeof FeatureCard> = {
  title: 'components/landing/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const ProjectManagement: Story = {
  args: {
    icon: Kanban,
    title: 'Project Management',
    description: 'Organize projects with powerful boards, lists, and cards. Visualize your workflow and track progress at a glance.'
  },
};

export const TaskTracking: Story = {
  args: {
    icon: CheckSquare,
    title: 'Task Tracking',
    description: 'Break down projects into manageable tasks. Set deadlines, assign team members, and monitor completion status.'
  },
};

export const TeamCollaboration: Story = {
  args: {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time updates, comments, and mentions. Keep everyone on the same page.'
  },
};

export const Notifications: Story = {
  args: {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay informed with intelligent notifications. Get updates on what matters most without the noise.'
  },
};

export const LongContent: Story = {
  args: {
    icon: Kanban,
    title: 'Very Long Project Title That Tests Layout and Wrapping',
    description: 'This is a very long description that should test how the component handles longer text content and ensures proper text wrapping and spacing within the card layout.'
  },
};