import type { Meta, StoryObj } from '@storybook/react';
import { UserMenu } from '../user-menu';

const meta: Meta<typeof UserMenu> = {
  title: 'components/UserMenu',
  component: UserMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof UserMenu>;

export const Default: Story = {};
