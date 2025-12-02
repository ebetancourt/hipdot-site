import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta = {
  title: 'Atomic/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dark', 'light'],
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    variant: 'dark',
    href: '/index.html',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    href: '/index.html',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
