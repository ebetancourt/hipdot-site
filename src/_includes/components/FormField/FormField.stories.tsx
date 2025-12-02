import type { Meta, StoryObj } from '@storybook/react';
import FormField from './FormField';

const meta = {
  title: 'Atomic/FormField',
  component: FormField,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'select', 'textarea'],
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    type: 'text',
    label: 'Your name',
    id: 'name',
    placeholder: 'Enter your full name',
    required: true,
  },
};

export const EmailInput: Story = {
  args: {
    type: 'email',
    label: 'Email address',
    id: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
};

export const Select: Story = {
  args: {
    type: 'select',
    label: 'Select a service',
    id: 'service',
    placeholder: 'Choose a service',
    required: true,
    options: [
      { value: 'ui/ux design', label: 'ui/ux design' },
      { value: 'web development', label: 'web development' },
      { value: 'cloud hosting', label: 'cloud hosting' },
    ],
  },
};

export const Textarea: Story = {
  args: {
    type: 'textarea',
    label: 'Write your message',
    id: 'message',
    placeholder: 'Write us your question here...',
    required: true,
  },
};
