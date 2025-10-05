import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ActivityFeed } from '../activity-feed';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Dashboard/ActivityFeed',
  component: ActivityFeed,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ActivityFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const WithCustomActivities: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'ActivityFeed with custom activity data showing various types of team activities.',
      },
    },
  },
};

export const EmptyState: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'ActivityFeed with no activities to show.',
      },
    },
  },
};

export const LongActivityList: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'ActivityFeed with a longer list of activities to test scrolling behavior.',
      },
    },
  },
};
