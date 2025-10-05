import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NotificationDropdown } from '../notification-dropdown';

const meta: Meta<typeof NotificationDropdown> = {
  title: 'components/NotificationDropdown',
  component: NotificationDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof NotificationDropdown>;

export const Default: Story = {};
