import type { Meta, StoryObj } from '@storybook/react';
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
