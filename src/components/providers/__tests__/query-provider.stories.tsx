import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'components/providers/QueryProvider',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'QueryProvider sets up React Query with optimized default settings for the application.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h1>QueryProvider Configuration</h1>
      <p>This provider configures React Query with:</p>
      <ul>
        <li><code>staleTime: 60 * 1000</code> (1 minute)</li>
        <li><code>refetchOnWindowFocus: false</code></li>
      </ul>
      <p>Wrap your app with QueryProvider to enable React Query functionality.</p>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div style={{ padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Usage Example</h2>
      <p>The QueryProvider wraps your entire application to provide React Query context.</p>
      <div style={{ marginTop: '1rem' }}>
        <strong>Example usage:</strong>
        <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '0.5rem' }}>
{`<QueryProvider>
  <App />
</QueryProvider>`}
        </pre>
      </div>
    </div>
  ),
};
