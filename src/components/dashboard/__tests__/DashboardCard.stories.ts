import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DashboardCard } from '../dashboard-card';
import { Users, TrendingUp, Activity, DollarSign, Calendar, Target } from 'lucide-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Dashboard/DashboardCard',
  component: DashboardCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the card',
    },
    value: {
      control: 'text',
      description: 'The main value to display',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    trend: {
      control: 'object',
      description: 'Optional trend information with value and direction',
    },
  },
} satisfies Meta<typeof DashboardCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TotalUsers: Story = {
  args: {
    title: 'Total Users',
    value: '2,847',
    icon: Users,
    description: 'from last month',
    trend: {
      value: 12,
      isPositive: true,
    },
  },
};

export const Revenue: Story = {
  args: {
    title: 'Revenue',
    value: '$54,239',
    icon: DollarSign,
    description: 'from last month',
    trend: {
      value: 8,
      isPositive: true,
    },
  },
};

export const ActiveProjects: Story = {
  args: {
    title: 'Active Projects',
    value: 24,
    icon: Target,
    description: 'currently running',
  },
};

export const MonthlyGrowth: Story = {
  args: {
    title: 'Monthly Growth',
    value: '+23.1%',
    icon: TrendingUp,
    description: 'vs last month',
    trend: {
      value: 23.1,
      isPositive: true,
    },
  },
};

export const EventsThisMonth: Story = {
  args: {
    title: 'Events This Month',
    value: 12,
    icon: Calendar,
    description: 'scheduled events',
  },
};

export const SystemActivity: Story = {
  args: {
    title: 'System Activity',
    value: '98.5%',
    icon: Activity,
    description: 'uptime this month',
    trend: {
      value: 0.5,
      isPositive: true,
    },
  },
};

export const NegativeTrend: Story = {
  args: {
    title: 'Support Tickets',
    value: 47,
    icon: Users,
    description: 'open tickets',
    trend: {
      value: 15,
      isPositive: false,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'DashboardCard showing a negative trend with red styling.',
      },
    },
  },
};

export const Minimal: Story = {
  args: {
    title: 'Tasks Completed',
    value: 156,
    icon: Target,
  },
  parameters: {
    docs: {
      description: {
        story: 'DashboardCard with only the essential information - no description or trend.',
      },
    },
  },
};
