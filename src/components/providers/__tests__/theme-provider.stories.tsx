import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'components/providers/ThemeProvider',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'ThemeProvider enables theme switching throughout your application using next-themes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h1>ThemeProvider Configuration</h1>
      <p>This provider enables theme switching with the following features:</p>
      <ul>
        <li>Light and dark theme support</li>
        <li>System theme preference detection</li>
        <li>Smooth theme transitions</li>
        <li>Persistent theme selection</li>
      </ul>
    </div>
  ),
};

export const LightTheme: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: 'white', color: 'black' }}>
      <h2>Light Theme</h2>
      <p>This demonstrates the light theme configuration.</p>
      <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
        <p>Light theme content area</p>
      </div>
    </div>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <div style={{ padding: '2rem', background: '#1a1a1a', color: 'white' }}>
      <h2>Dark Theme</h2>
      <p>This demonstrates the dark theme configuration.</p>
      <div style={{ padding: '1rem', background: '#2a2a2a', borderRadius: '4px' }}>
        <p>Dark theme content area</p>
      </div>
    </div>
  ),
};

export const SystemTheme: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h2>System Theme</h2>
      <p>This configuration follows the user's system theme preference.</p>
      <div style={{
        padding: '1rem',
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderRadius: '4px',
        border: '1px solid var(--border)'
      }}>
        <p>System theme content area - adapts to light/dark mode automatically</p>
      </div>
    </div>
  ),
};
