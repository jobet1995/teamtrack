import type { Meta, StoryObj } from '@storybook/react';
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
    children: <div className='p-4'>This is the main content area.</div>,
  },
};
