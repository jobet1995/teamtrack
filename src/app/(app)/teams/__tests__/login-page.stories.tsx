import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LoginPage from '../page';

const meta: Meta<typeof LoginPage> = {
  title: 'Auth/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithEmailEntered: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Login page with email field pre-filled to show form interaction.',
      },
    },
  },
};

export const WithBothFieldsEntered: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Login page with both email and password fields filled.',
      },
    },
  },
};

export const RememberMeChecked: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Login page with the "Remember me" checkbox selected.',
      },
    },
  },
};

export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Login page in mobile view to test responsive design.',
      },
    },
  },
};

export const TabletView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Login page in tablet view to test responsive design.',
      },
    },
  },
};

export const DesktopView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: 'Login page in desktop view showing the full layout.',
      },
    },
  },
};

export const DarkMode: Story = {
  args: {},
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
    docs: {
      description: {
        story: 'Login page in dark mode theme.',
      },
    },
  },
};

export const HighContrast: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Login page with high contrast for accessibility testing.',
      },
    },
  },
};
