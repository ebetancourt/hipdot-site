import type { Meta, StoryObj } from '@storybook/react';
import TwoColumnContent from './TwoColumnContent';

const meta = {
  title: 'Organism/TwoColumnContent',
  component: TwoColumnContent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TwoColumnContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageLeft: Story = {
  args: {
    heading: 'Know about us',
    imageSrc: '/assets/img/th-15/content-img-1.jpg',
    imagePosition: 'left',
    content: [
      'We started our journey in January 2010. We are innovation-driven and dedicated to shaping the future through forward-thinking and cutting-edge technology solutions. Founded by a team of visionary engineers & entrepreneurs.',
      'We believe that technology should not only meet the needs of today but also anticipate the challenges of tomorrow. We are committed to creating products & services that empower individuals and businesses, making their digital experiences smarter, safer, and more efficient.',
    ],
    ctaText: 'Discover More',
    ctaHref: '#',
  },
};

export const ImageRight: Story = {
  args: {
    heading: 'Why choose us',
    imageSrc: '/assets/img/th-15/content-img-2.jpg',
    imagePosition: 'right',
    content: 'Our core values include the relentless pursuit of excellence, a commitment to ethical and responsible tech development, and a dedication to continuous learning.',
    features: [
      {
        title: 'Expertise & Specialization:',
        description: ' We\'re experts in respective fields. They specialize in various aspects of technology.',
      },
      {
        title: 'Cost Efficiency:',
        description: ' We can also scale services up or down based on making it a flexible and cost-efficient option.',
      },
      {
        title: 'Security & Compliance:',
        description: ' Help businesses maintain high levels of security and ensure compliance with industry-specific regulations.',
      },
    ],
  },
};
