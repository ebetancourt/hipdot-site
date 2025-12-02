import type { Meta, StoryObj } from '@storybook/react';
import BrandLogo from './BrandLogo';

const meta = {
  title: 'Molecular/BrandLogo',
  component: BrandLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Brand1: Story = {
  args: {
    src: '/assets/img/th-15/brand-1.png',
    alt: 'brand-1',
    maxWidth: '170px',
  },
};

export const Brand2: Story = {
  args: {
    src: '/assets/img/th-15/brand-2.png',
    alt: 'brand-2',
    maxWidth: '170px',
  },
};
