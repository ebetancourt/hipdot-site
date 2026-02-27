import type { Meta, StoryObj } from '@storybook/react';
import AccordionItem from './AccordionItem';

const meta = {
  title: 'Molecular/AccordionItem',
  component: AccordionItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WhatWeDo: Story = {
  args: {
    question: 'What does your tech company do?',
    answer: 'HipDot Media is not just a tech company; it\'s a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology.',
    isActive: false,
  },
};

export const ActiveQuestion: Story = {
  args: {
    question: 'What does your tech company do?',
    answer: 'HipDot Media is not just a tech company; it\'s a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology.',
    isActive: true,
  },
};

export const IndustriesServed: Story = {
  args: {
    question: 'What industries or sectors do you serve?',
    answer: 'HipDot Media is not just a tech company; it\'s a catalyst for progress, a hub of innovation, and a partner in your digital journey & connected future of technology.',
    isActive: false,
  },
};
