import type { Meta, StoryObj } from '@storybook/react';
import ProcessSection from './ProcessSection';

const meta = {
  title: 'Organism/ProcessSection',
  component: ProcessSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProcessSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Our work process',
    steps: [
      {
        title: 'Project Discovery',
        description: 'We create a detailed project plan with work outlines, milestones, timelines.',
      },
      {
        title: 'Implementation',
        description: 'Developers & engineers is essential in creating the necessary solutions.',
      },
      {
        title: 'Establishment',
        description: 'Includes all functional performance testing, testing, and security testing.',
      },
    ],
  },
};
