import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '../theme-toggle';

// Wrapper component to provide theme context for stories
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem={false}
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
);

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A theme toggle component that allows users to switch between light, dark, and system themes.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <div className="p-4">
          <Story />
        </div>
      </ThemeWrapper>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default theme toggle with light theme as the initial state.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
    docs: {
      description: {
        story: 'Theme toggle displayed with dark background to show dark mode appearance.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <div className="p-4 dark">
          <Story />
        </div>
      </ThemeWrapper>
    ),
  ],
};

export const WithCustomStyling: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Theme toggle with additional custom styling applied.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <div className="p-4 bg-gray-100 rounded-lg">
          <Story />
        </div>
      </ThemeWrapper>
    ),
  ],
};

// Interactive story that allows testing different themes
export const Interactive: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive theme toggle where you can test all theme options in Storybook.',
      },
    },
  },
};
