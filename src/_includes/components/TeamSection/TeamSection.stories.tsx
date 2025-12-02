import type { Meta, StoryObj } from '@storybook/react';
import TeamSection from './TeamSection';

const meta = {
  title: 'Organism/TeamSection',
  component: TeamSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TeamSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Meet our team',
    members: [
      { imageSrc: '/assets/img/th-15/team-img-1.jpg', name: 'Adam Smith', title: 'Founder & CEO' },
      { imageSrc: '/assets/img/th-15/team-img-2.jpg', name: 'Jones Marco', title: 'Chief Operating Officer' },
      { imageSrc: '/assets/img/th-15/team-img-3.jpg', name: 'Marsal Joy', title: 'General Manager' },
      { imageSrc: '/assets/img/th-15/team-img-4.jpg', name: 'Douglas Luhan', title: 'Sales Executive' },
      { imageSrc: '/assets/img/th-15/team-img-5.jpg', name: 'Alex Taylor', title: 'Web Developer' },
      { imageSrc: '/assets/img/th-15/team-img-6.jpg', name: 'Henry Fayol', title: 'UI/UX Designer' },
    ],
  },
};
