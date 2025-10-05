import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { AppLayout } from '../app-layout';

const meta: Meta<typeof AppLayout> = {
  title: 'components/AppLayout',
  component: AppLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  args: {
    children: <div className="p-4">This is the main content area.</div>,
  },
};

export const WithSidebarOpen: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', { name: /open menu/i }));

    await expect(canvas.getByRole('dialog')).toBeInTheDocument();
  },
};
