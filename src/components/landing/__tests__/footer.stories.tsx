import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from '../footer';

const meta: Meta<typeof Footer> = {
  title: 'components/landing/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};