import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Sidebar } from '../sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('Sidebar closed!'),
  },
};

export const Open: Story = {
  args: {
    ...Default.args,
    isOpen: true,
  },
};

export const Closed: Story = {
  args: {
    ...Default.args,
    isOpen: false,
  },
};

export const CloseInteraction: Story = {
  ...Default,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const closeButton = canvas.getByRole('button', { name: /close sidebar/i });
    await userEvent.click(closeButton);
    // Check if the onClose function was called
    // You might need to mock the function to properly test this
  },
};
