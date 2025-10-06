import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { userEvent, within } from '@storybook/testing-library';
import { CommentBox } from '../comment-box';

const meta: Meta<typeof CommentBox> = {
  title: 'Tasks/CommentBox',
  component: CommentBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const EmptyComments: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'CommentBox with no initial comments, showing only the comment input area.',
      },
    },
  },
};

export const SingleComment: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'CommentBox with a single comment to show basic functionality.',
      },
    },
  },
};

export const MultipleComments: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'CommentBox with multiple comments showing conversation thread.',
      },
    },
  },
};

export const LongComment: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'CommentBox with a very long comment to test text wrapping and layout.',
      },
    },
  },
};

export const WithUserAvatar: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'CommentBox showing user avatars alongside comments.',
      },
    },
  },
};

export const ScrollableComments: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'CommentBox with many comments to test scrolling functionality.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive CommentBox where you can type and submit new comments.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find the textarea and type a comment
    const textarea = canvas.getByPlaceholderText('Add a comment...');
    await userEvent.type(textarea, 'This is a test comment from Storybook!');

    // Find and click the Post Comment button
    const submitButton = canvas.getByRole('button', { name: /post comment/i });
    await userEvent.click(submitButton);
  },
};
