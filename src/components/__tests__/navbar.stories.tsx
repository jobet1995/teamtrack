import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Navbar } from '../layout/navbar';

const meta: Meta<typeof Navbar> = {
  title: 'components/Navbar',
  component: Navbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    onMenuClick: () => alert('Menu clicked!'),
  },
};