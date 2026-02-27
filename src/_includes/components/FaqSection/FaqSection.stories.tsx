import type { Meta, StoryObj } from '@storybook/react';
import FaqSection from './FaqSection';

const meta = {
  title: 'Organism/FaqSection',
  component: FaqSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FaqSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'We\'re often asked',
    faqs: [
      {
        question: 'What does your tech company do?',
        answer: 'HipDot Media is not just a tech company; it\'s a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology.',
      },
      {
        question: 'What industries or sectors do you serve?',
        answer: 'HipDot Media is not just a tech company; it\'s a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology.',
      },
      {
        question: 'How much does a custom software solution cost?',
        answer: 'HipDot Media is not just a tech company; it\'s a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology.',
      },
      {
        question: 'Is data protection and privacy secure?',
        answer: 'HipDot Media is not just a tech company; it\'s a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology.',
      },
      {
        question: 'Which software is right for me?',
        answer: 'HipDot Media is not just a tech company; it\'s a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology.',
      },
    ],
  },
};
