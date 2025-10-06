import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SettingsPage from '../page';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/SettingsPage',
  component: SettingsPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
    docs: {
      description: {
        component: 'Settings page that allows users to manage their notification preferences, project settings, and account security options in a clean card-based layout.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SettingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default settings page view showing notification preferences, project settings, and danger zone sections.',
      },
    },
  },
};

export const WithNotificationsEnabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Settings page demonstrating all notification toggles enabled for comprehensive notification management.',
      },
    },
  },
};

export const WithProjectSettings: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Settings page showing project visibility configuration with team-level access selected.',
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
        story: 'Settings page in dark mode theme showing proper contrast and styling for dark backgrounds.',
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
        story: 'Settings page optimized for mobile devices showing responsive layout with stacked form elements.',
      },
    },
  },
};
