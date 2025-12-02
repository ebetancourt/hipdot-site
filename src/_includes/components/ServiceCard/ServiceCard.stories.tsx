import type { Meta, StoryObj } from '@storybook/react';
import ServiceCard from './ServiceCard';

const meta = {
  title: 'Molecular/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DigitalTransformation: Story = {
  args: {
    title: 'Digital Transformation',
    description: 'We partner with CTOs and CIOs to co-create and execute long-term digital strategies that increase sales, brand awareness, and operational efficiency.',
    link: '/service-details.html',
  },
};

export const ECommerce: Story = {
  args: {
    title: 'E-Commerce Development',
    description: 'We build high converting, fast-loading, headless eCommerce websites for enterprise brands, that accelerate growth.',
    link: '/service-details.html',
  },
};

export const CustomSoftware: Story = {
  args: {
    title: 'Custom Software Development',
    description: 'We work with startups and global enterprises to design and develop custom web & mobile apps that drive their business forward.',
    link: '/service-details.html',
  },
};
