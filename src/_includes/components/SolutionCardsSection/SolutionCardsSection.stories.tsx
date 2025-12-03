import type { Meta, StoryObj } from '@storybook/react';
import SolutionCardsSection from './SolutionCardsSection';

const meta = {
  title: 'Organism/SolutionCardsSection',
  component: SolutionCardsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [2, 3, 4],
    },
  },
} satisfies Meta<typeof SolutionCardsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'AI For Companies',
    subtitle: 'Choose the solution that fits your needs',
    columns: 2,
    solutions: [
      {
        title: 'Chatbot setup',
        description: 'Set up a custom AI chatbot for your website or internal use. Improve customer service and automate responses.',
        buttonText: 'Learn More',
        buttonHref: '#',
        icon: 'check',
      },
      {
        title: 'Digitalisation projects',
        description: 'Transform your business processes with AI-powered automation and digital workflows.',
        buttonText: 'Learn More',
        buttonHref: '#',
        icon: 'check',
      },
      {
        title: 'Custom solutions',
        description: 'Get a tailored AI solution designed specifically for your business needs and challenges.',
        buttonText: 'Learn More',
        buttonHref: '#',
        icon: 'check',
      },
      {
        title: 'Looking for something else?',
        description: 'Tell us about your specific requirements and we\'ll create a custom solution for you.',
        buttonText: 'Contact Us',
        buttonHref: '#',
        icon: 'question',
      },
    ],
  },
};

export const ThreeColumns: Story = {
  args: {
    title: 'Our Solutions',
    columns: 3,
    solutions: [
      {
        title: 'AI Consulting',
        description: 'Strategic guidance to help you leverage AI effectively in your organization.',
        buttonText: 'Get Started',
        buttonHref: '#',
        icon: 'check',
      },
      {
        title: 'Implementation',
        description: 'Full-service AI implementation from strategy to deployment.',
        buttonText: 'Get Started',
        buttonHref: '#',
        icon: 'check',
      },
      {
        title: 'Training',
        description: 'Comprehensive training programs to upskill your team in AI technologies.',
        buttonText: 'Get Started',
        buttonHref: '#',
        icon: 'check',
      },
    ],
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    solutions: [
      {
        title: 'Strategy',
        description: 'Develop an AI strategy aligned with your business goals.',
        icon: 'check',
      },
      {
        title: 'Development',
        description: 'Build custom AI solutions tailored to your needs.',
        icon: 'check',
      },
      {
        title: 'Integration',
        description: 'Seamlessly integrate AI into your existing systems.',
        icon: 'check',
      },
      {
        title: 'Support',
        description: 'Ongoing support and optimization for your AI solutions.',
        icon: 'check',
      },
    ],
  },
};

export const NoTitleOrButtons: Story = {
  args: {
    columns: 2,
    solutions: [
      {
        title: 'Machine Learning',
        description: 'Advanced machine learning models to extract insights from your data.',
        icon: 'check',
      },
      {
        title: 'Natural Language Processing',
        description: 'Process and understand human language at scale.',
        icon: 'check',
      },
      {
        title: 'Computer Vision',
        description: 'Enable machines to interpret and understand visual information.',
        icon: 'check',
      },
      {
        title: 'Predictive Analytics',
        description: 'Forecast trends and make data-driven decisions.',
        icon: 'check',
      },
    ],
  },
};
