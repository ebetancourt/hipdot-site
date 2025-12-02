import type { Meta, StoryObj } from '@storybook/react';
import TeamMemberCard from './TeamMemberCard';

const meta = {
  title: 'Molecular/TeamMemberCard',
  component: TeamMemberCard,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TeamMemberCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CEO: Story = {
  args: {
    imageSrc: '/assets/img/th-15/team-img-1.jpg',
    name: 'Adam Smith',
    title: 'Founder & CEO',
    delay: 0,
  },
};

export const COO: Story = {
  args: {
    imageSrc: '/assets/img/th-15/team-img-2.jpg',
    name: 'Jones Marco',
    title: 'Chief Operating Officer',
    delay: 0.3,
  },
};

export const Developer: Story = {
  args: {
    imageSrc: '/assets/img/th-15/team-img-5.jpg',
    name: 'Alex Taylor',
    title: 'Web Developer',
    delay: 0.6,
  },
};
