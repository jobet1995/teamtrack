import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeatureSection } from '../feature-section';

const meta: Meta<typeof FeatureSection> = {
  title: 'components/landing/FeatureSection',
  component: FeatureSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FeatureSection>;

export const Default: Story = {
  args: {},
};