import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Atomic/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'outlineWhite'],
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Talk To Us',
    variant: 'primary',
    size: 'large',
  },
};

export const Outline: Story = {
  args: {
    children: 'View Our Services',
    variant: 'outline',
    size: 'large',
  },
};

export const OutlineWhite: Story = {
  args: {
    children: 'Get Started',
    variant: 'outlineWhite',
    size: 'large',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Medium: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'medium',
  },
};

export const WithLink: Story = {
  args: {
    children: 'Go to Homepage',
    variant: 'primary',
    size: 'large',
    href: '/index.html',
  },
};
