import type { Meta, StoryObj } from '@storybook/react';
import HorizontalLine from './HorizontalLine';

const meta = {
  title: 'Atomic/HorizontalLine',
  component: HorizontalLine,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HorizontalLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    bgColor: 'bg-ColorBlack',
  },
};

export const White: Story = {
  args: {
    bgColor: 'bg-white',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
