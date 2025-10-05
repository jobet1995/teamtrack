import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeaturesSection } from '../feature-section';

const meta: Meta<typeof FeaturesSection> = {
  title: 'components/landing/FeaturesSection',
  component: FeaturesSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {
  args: {},
};