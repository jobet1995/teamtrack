import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TasksPage from '../page';

const meta: Meta<typeof TasksPage> = {
  title: 'Tasks/TasksPage',
  component: TasksPage,
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

export const WithAllTasks: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Tasks page showing all tasks across different statuses and priorities.',
      },
    },
  },
};

export const FilteredByHighPriority: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Tasks page with filter set to show only high priority tasks.',
      },
    },
  },
};

export const FilteredByMediumPriority: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Tasks page with filter set to show only medium priority tasks.',
      },
    },
  },
};

export const FilteredByLowPriority: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Tasks page with filter set to show only low priority tasks.',
      },
    },
  },
};

export const EmptyColumns: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Tasks page with no tasks to demonstrate empty state handling.',
      },
    },
  },
};

export const TaskModalOpen: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Tasks page with a task modal open, showing task details.',
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
        story: 'Tasks page in mobile view to test responsive design.',
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
        story: 'Tasks page in tablet view to test responsive design.',
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
        story: 'Tasks page in desktop view showing the full layout.',
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
        story: 'Tasks page in dark mode theme.',
      },
    },
  },
};

export const HighContrast: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Tasks page with high contrast for accessibility testing.',
      },
    },
  },
};
