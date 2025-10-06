import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import DashboardPage from '../page';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/DashboardPage',
  component: DashboardPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main dashboard page that displays project overview, statistics cards, activity feed, and quick stats in a responsive layout.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof DashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default dashboard view showing all sections: header, statistics cards, activity feed, and quick stats sidebar.',
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Dashboard optimized for mobile devices showing responsive layout with stacked cards and sidebar content.',
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
          value: '#0f172a',
        },
      ],
    },
    docs: {
      description: {
        story: 'Dashboard in dark mode theme showing proper contrast and styling for dark backgrounds.',
      },
    },
  },
};

export const HighContrast: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Dashboard with high contrast styling for better accessibility and readability.',
      },
    },
  },
};
