import type { Meta, StoryObj } from '@storybook/nextjs-vite';
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Find the close button by its accessible name
    const closeButton = canvas.getByRole('button', { name: /close sidebar/i });
    await userEvent.click(closeButton);
  },
};
