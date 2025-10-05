import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { ProjectFormModal } from '../project-form-modal';

const meta: Meta<typeof ProjectFormModal> = {
  title: 'components/projects/ProjectFormModal',
  component: ProjectFormModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal component for creating new projects with form validation.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the modal is open or closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectFormModal>;

const ModalWrapper = (args: { open?: boolean }) => {
  const [open, setOpen] = useState(args.open || false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Open Project Modal
      </button>
      <ProjectFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export const Default: Story = {
  render: ModalWrapper,
  args: {
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Project form modal in closed state with trigger button.',
      },
    },
  },
};

export const OpenModal: Story = {
  render: ModalWrapper,
  args: {
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Project form modal in open state showing the form fields.',
      },
    },
    // Override a11y rules for focus guards which are expected in modals
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-hidden-focus',
            enabled: false,
          },
        ],
      },
    },
  },
};

export const WithFormInteraction: Story = {
  render: ModalWrapper,
  args: {
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive modal where you can test form filling and submission.',
      },
    },
    // Override a11y rules for focus guards which are expected in modals
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-hidden-focus',
            enabled: false,
          },
        ],
      },
    },
  },
};
