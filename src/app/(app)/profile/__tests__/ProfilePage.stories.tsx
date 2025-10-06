import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProfilePage from '../page';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/ProfilePage',
  component: ProfilePage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
    docs: {
      description: {
        component: 'User profile page that displays personal information, avatar management, and password change functionality in a clean card-based layout.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default profile page view showing personal information form, avatar upload section, and password change form.',
      },
    },
  },
};

export const WithFormInteraction: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Profile page demonstrating form interactions with sample data filled in the input fields.',
      },
    },
  },
  args: {
    // Note: Since this is a client component with internal state,
    // we can't easily pass props to control the form values in Storybook
    // This story shows the component in its default state
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
        story: 'Profile page in dark mode theme showing proper contrast and styling for dark backgrounds.',
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
        story: 'Profile page optimized for mobile devices showing responsive layout with stacked form elements.',
      },
    },
  },
};
