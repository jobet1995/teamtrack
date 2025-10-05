import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { KanbanBoard } from '../kanban-board';

const meta: Meta<typeof KanbanBoard> = {
  title: 'components/projects/KanbanBoard',
  component: KanbanBoard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

export const Default: Story = {
  args: {},
};

export const WithManyTasks: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Kanban board with multiple tasks across all columns to demonstrate scroll behavior and layout.',
      },
    },
  },
};

export const EmptyColumns: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Kanban board showing how empty columns are displayed when there are no tasks.',
      },
    },
  },
};
