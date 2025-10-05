import type { Meta, StoryObj } from '@storybook/nextjs-vite';

/** Meta configuration: Sets up the story with title, component, and layout parameters */
// Simplified mock layout for Storybook testing
const MockRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  );
};

const meta: Meta<typeof MockRootLayout> = {
  title: 'layout/RootLayout',
  component: MockRootLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MockRootLayout>;

/** Default story: Renders the RootLayout with sample children content to demonstrate how the layout wraps and provides context to child components */
/** Simplified test environment: Uses a simplified version that works better in Storybook's test environment */
export const Default: Story = {
  args: {
    children: (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Sample Page Content</h1>
        <p>This is sample content to demonstrate the layout wrapper in a test environment.</p>
      </div>
    ),
  },
};
