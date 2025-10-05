import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Timeline } from '../timeline';

const meta: Meta<typeof Timeline> = {
  title: 'components/projects/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A timeline component that displays project activity events with user avatars and timestamps.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default timeline showing recent project activities with user avatars and timestamps.',
      },
    },
  },
};

export const WithScrollArea: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Timeline demonstrating scroll behavior when there are many activity events.',
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1f2937',
        },
      ],
    },
    docs: {
      description: {
        story: 'Timeline component in dark mode showing proper contrast and styling.',
      },
    },
  },
};
