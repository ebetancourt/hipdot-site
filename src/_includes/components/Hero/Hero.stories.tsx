import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta = {
  title: 'Organism/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Smart Solutions for a Modern era',
    imageSrc: '/assets/img/th-15/hero-img.jpg',
    description: 'We are dedicated to shaping the future. In the fast-paced world of technology, our company stands as a beacon of innovation and progress.',
    ctaPrimary: { text: 'Talk To Us', href: '#' },
    ctaSecondary: { text: 'View Our Services', href: '#' },
  },
};
