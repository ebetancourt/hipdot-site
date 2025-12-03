import type { Meta, StoryObj } from '@storybook/react';
import ClientLogosSection from './ClientLogosSection';

const meta = {
  title: 'Organism/ClientLogosSection',
  component: ClientLogosSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ClientLogosSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Brands You May Recognize',
    columns: 6,
    darkMode: true,
    brands: [
      { src: '/assets/img/th-15/brand-1.png', alt: 'Brand 1' },
      { src: '/assets/img/th-15/brand-2.png', alt: 'Brand 2' },
      { src: '/assets/img/th-15/brand-3.png', alt: 'Brand 3' },
      { src: '/assets/img/th-15/brand-4.png', alt: 'Brand 4' },
      { src: '/assets/img/th-15/brand-5.png', alt: 'Brand 5' },
      { src: '/assets/img/th-15/brand-1.png', alt: 'Brand 6' },
      { src: '/assets/img/th-15/brand-2.png', alt: 'Brand 7' },
      { src: '/assets/img/th-15/brand-3.png', alt: 'Brand 8' },
      { src: '/assets/img/th-15/brand-4.png', alt: 'Brand 9' },
      { src: '/assets/img/th-15/brand-5.png', alt: 'Brand 10' },
      { src: '/assets/img/th-15/brand-1.png', alt: 'Brand 11' },
      { src: '/assets/img/th-15/brand-2.png', alt: 'Brand 12' },
    ],
  },
};

export const LightMode: Story = {
  args: {
    title: 'Our Trusted Partners',
    columns: 6,
    darkMode: false,
    brands: [
      { src: '/assets/img/th-15/brand-1.png', alt: 'Brand 1' },
      { src: '/assets/img/th-15/brand-2.png', alt: 'Brand 2' },
      { src: '/assets/img/th-15/brand-3.png', alt: 'Brand 3' },
      { src: '/assets/img/th-15/brand-4.png', alt: 'Brand 4' },
      { src: '/assets/img/th-15/brand-5.png', alt: 'Brand 5' },
      { src: '/assets/img/th-15/brand-1.png', alt: 'Brand 6' },
    ],
  },
};

export const FourColumns: Story = {
  args: {
    title: 'Key Clients',
    columns: 4,
    darkMode: true,
    brands: [
      { src: '/assets/img/th-15/brand-1.png', alt: 'Brand 1' },
      { src: '/assets/img/th-15/brand-2.png', alt: 'Brand 2' },
      { src: '/assets/img/th-15/brand-3.png', alt: 'Brand 3' },
      { src: '/assets/img/th-15/brand-4.png', alt: 'Brand 4' },
      { src: '/assets/img/th-15/brand-5.png', alt: 'Brand 5' },
      { src: '/assets/img/th-15/brand-1.png', alt: 'Brand 6' },
      { src: '/assets/img/th-15/brand-2.png', alt: 'Brand 7' },
      { src: '/assets/img/th-15/brand-3.png', alt: 'Brand 8' },
    ],
  },
};

export const NoTitle: Story = {
  args: {
    columns: 6,
    darkMode: true,
    brands: [
      { src: '/assets/img/th-15/brand-1.png', alt: 'Brand 1' },
      { src: '/assets/img/th-15/brand-2.png', alt: 'Brand 2' },
      { src: '/assets/img/th-15/brand-3.png', alt: 'Brand 3' },
      { src: '/assets/img/th-15/brand-4.png', alt: 'Brand 4' },
      { src: '/assets/img/th-15/brand-5.png', alt: 'Brand 5' },
      { src: '/assets/img/th-15/brand-1.png', alt: 'Brand 6' },
    ],
  },
};
