import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta = {
  title: 'Atomic/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Check: Story = {
  args: {
    name: 'solid fa-circle-check',
    className: 'text-[#0000FF] text-2xl',
  },
};

export const Arrow: Story = {
  args: {
    name: 'solid fa-angle-left',
    className: 'text-black text-xl',
  },
};

export const Twitter: Story = {
  args: {
    name: 'brands fa-x-twitter',
    className: 'text-black text-sm',
  },
};

export const Facebook: Story = {
  args: {
    name: 'brands fa-facebook-f',
    className: 'text-black text-sm',
  },
};
