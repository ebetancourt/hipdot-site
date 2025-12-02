import type { Meta, StoryObj } from '@storybook/react';
import ProcessStep from './ProcessStep';

const meta = {
  title: 'Molecular/ProcessStep',
  component: ProcessStep,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProcessStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Discovery: Story = {
  args: {
    stepNumber: 1,
    title: 'Project Discovery',
    description: 'We create a detailed project plan with work outlines, milestones, timelines.',
    delay: 0,
  },
};

export const Implementation: Story = {
  args: {
    stepNumber: 2,
    title: 'Implementation',
    description: 'Developers & engineers is essential in creating the necessary solutions.',
    delay: 0.3,
  },
};

export const Establishment: Story = {
  args: {
    stepNumber: 3,
    title: 'Establishment',
    description: 'Includes all functional performance testing, testing, and security testing.',
    delay: 0.6,
  },
};
