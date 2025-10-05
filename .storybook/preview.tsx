import React from 'react';
import type { Preview } from '@storybook/react';
import { NextUIProvider } from '@nextui-org/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <NextUIProvider>
        <MemoryRouterProvider>
          <Story />
        </MemoryRouterProvider>
      </NextUIProvider>
    ),
  ],
};

export default preview;
