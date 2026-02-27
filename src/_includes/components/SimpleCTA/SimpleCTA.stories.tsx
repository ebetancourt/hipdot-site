import type { Meta, StoryObj } from '@storybook/react';
import SimpleCTA from './SimpleCTA';

const meta = {
  title: 'Organism/SimpleCTA',
  component: SimpleCTA,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundType: {
      control: 'select',
      options: ['gradient', 'image', 'solid'],
    },
  },
} satisfies Meta<typeof SimpleCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PurpleGradient: Story = {
  args: {
    heading: 'Interested in discovering how Artificial Intelligence can drive growth in your business?',
    buttonText: 'Book a call',
    buttonHref: '#',
    backgroundType: 'gradient',
  },
};

export const WithBackgroundImage: Story = {
  args: {
    heading: 'Discover how AI can transform your business operations and accelerate innovation',
    buttonText: 'Get Started',
    buttonHref: '#',
    backgroundType: 'image',
    backgroundImage: '/assets/img/th-15/hero-img.jpg',
  },
};

export const SolidColor: Story = {
  args: {
    heading: 'Ready to take your business to the next level with AI?',
    buttonText: 'Schedule Consultation',
    buttonHref: '#',
    backgroundType: 'solid',
    backgroundColor: '#002D62',
  },
};

export const Short: Story = {
  args: {
    heading: 'Let\'s build something amazing together',
    buttonText: 'Contact Us',
    buttonHref: '#',
    backgroundType: 'gradient',
  },
};
