import type { Meta, StoryObj } from '@storybook/react';
import IconBulletList from './IconBulletList';

const meta = {
  title: 'Molecular/IconBulletList',
  component: IconBulletList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconBulletList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WhyChooseUs: Story = {
  args: {
    items: [
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
