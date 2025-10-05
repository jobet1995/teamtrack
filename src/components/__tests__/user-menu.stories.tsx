import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
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

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Open the dropdown
    await userEvent.click(canvas.getByRole('button'));

    // Click on the different menu items
    await userEvent.click(canvas.getByText('Profile'));
    await userEvent.click(canvas.getByText('Settings'));
    await userEvent.click(canvas.getByText('Logout'));
  },
};
