import type { Meta, StoryObj } from '@storybook/react';
import CtaSection from './CtaSection';

const meta = {
  title: 'Organism/CtaSection',
  component: CtaSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CtaSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Are you ready to get started?',
    description: 'Join us on this exciting journey as we continue to redefine what is possible with ever-evolving technology.',
    ctaText: 'View Our Services',
    ctaHref: '#',
    brands: [
      { src: '/assets/img/th-15/brand-1.png', alt: 'brand-1' },
      { src: '/assets/img/th-15/brand-2.png', alt: 'brand-2' },
      { src: '/assets/img/th-15/brand-3.png', alt: 'brand-3' },
      { src: '/assets/img/th-15/brand-4.png', alt: 'brand-4' },
      { src: '/assets/img/th-15/brand-5.png', alt: 'brand-5' },
    ],
  },
};
