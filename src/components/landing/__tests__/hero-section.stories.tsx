import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HeroSection } from '../hero-section';

const meta: Meta<typeof HeroSection> = {
  title: 'components/landing/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {},
};
