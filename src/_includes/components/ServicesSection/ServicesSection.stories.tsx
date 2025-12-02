import type { Meta, StoryObj } from '@storybook/react';
import ServicesSection from './ServicesSection';

const meta = {
  title: 'Organism/ServicesSection',
  component: ServicesSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServicesSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'impactful numbers',
    services: [
      {
        title: 'Digital Transformation',
        description: 'We partner with CTOs and CIOs to co-create and execute long-term digital strategies that increase sales, brand awareness, and operational efficiency.',
        link: '/service-details.html',
      },
      {
        title: 'E-Commerce Development',
        description: 'We build high converting, fast-loading, headless eCommerce websites for enterprise brands, that accelerate growth.',
        link: '/service-details.html',
      },
      {
        title: 'Custom Software Development',
        description: 'We work with startups and global enterprises to design and develop custom web & mobile apps that drive their business forward.',
        link: '/service-details.html',
      },
      {
        title: 'Website Design & Development',
        description: 'We design and develop beautiful websites that deliver best-in-class experiences to your users.',
        link: '/service-details.html',
      },
    ],
  },
};
