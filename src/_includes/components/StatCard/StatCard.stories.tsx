import type { Meta, StoryObj } from '@storybook/react';
import StatCard from './StatCard';

const meta = {
  title: 'Molecular/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YearsExperience: Story = {
  args: {
    number: 15,
    suffix: '+',
    description: 'We have worked with reputation for the last 15 years',
    delay: 0,
  },
};

export const TotalClients: Story = {
  args: {
    number: 2,
    suffix: 'M+',
    description: 'Worked with 2M clients in different countries around the world',
    delay: 0.3,
  },
};

export const SatisfactionRate: Story = {
  args: {
    number: 99,
    suffix: '%',
    description: 'About 99% of our clients express their satisfaction with our work',
    delay: 0.6,
  },
};
