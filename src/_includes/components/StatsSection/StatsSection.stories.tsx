import type { Meta, StoryObj } from '@storybook/react';
import StatsSection from './StatsSection';

const meta = {
  title: 'Organism/StatsSection',
  component: StatsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'impactful numbers',
    stats: [
      { number: 15, suffix: '+', description: 'We have worked with reputation for the last 15 years' },
      { number: 2, suffix: 'M+', description: 'Worked with 2M clients in different countries around the world' },
      { number: 99, suffix: '%', description: 'About 99% of our clients express their satisfaction with our work' },
    ],
  },
};
