import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NotificationItem } from '../notification-item';

const meta: Meta<typeof NotificationItem> = {
  title: 'components/notifications/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'warning', 'success'],
    },
    unread: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Default: Story = {
  args: {
    id: '1',
    type: 'info',
    title: 'Welcome to TeamTrack',
    message: 'Your account has been successfully created and you can now start using all features.',
    time: '2 minutes ago',
    unread: true,
    onMarkAsRead: (id: string) => console.log(`Marking notification ${id} as read`),
  },
};

export const InfoNotification: Story = {
  args: {
    id: '2',
    type: 'info',
    title: 'System Update',
    message: 'A new version of TeamTrack is now available with improved performance.',
    time: '1 hour ago',
    unread: false,
  },
};

export const WarningNotification: Story = {
  args: {
    id: '3',
    type: 'warning',
    title: 'Storage Warning',
    message: 'You are running low on storage space. Consider cleaning up old files.',
    time: '30 minutes ago',
    unread: true,
    onMarkAsRead: (id: string) => console.log(`Marking notification ${id} as read`),
  },
};

export const SuccessNotification: Story = {
  args: {
    id: '4',
    type: 'success',
    title: 'Task Completed',
    message: 'Your project "Q4 Marketing Campaign" has been successfully completed.',
    time: '5 minutes ago',
    unread: true,
    onMarkAsRead: (id: string) => console.log(`Marking notification ${id} as read`),
  },
};

export const ReadNotification: Story = {
  args: {
    id: '5',
    type: 'success',
    title: 'Backup Completed',
    message: 'Your data has been successfully backed up to the cloud.',
    time: '2 hours ago',
    unread: false,
  },
};
