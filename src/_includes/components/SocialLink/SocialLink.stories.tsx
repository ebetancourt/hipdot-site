import type { Meta, StoryObj } from '@storybook/react';
import SocialLink from './SocialLink';

const meta = {
  title: 'Atomic/SocialLink',
  component: SocialLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Twitter: Story = {
  args: {
    platform: 'twitter',
    url: 'https://twitter.com',
    iconClass: 'fa-brands fa-x-twitter',
  },
};

export const Facebook: Story = {
  args: {
    platform: 'facebook',
    url: 'https://www.facebook.com/',
    iconClass: 'fa-brands fa-facebook-f',
  },
};

export const Instagram: Story = {
  args: {
    platform: 'instagram',
    url: 'https://www.instagram.com/',
    iconClass: 'fa-brands fa-instagram',
  },
};

export const GitHub: Story = {
  args: {
    platform: 'github',
    url: 'https://www.github.com/',
    iconClass: 'fa-brands fa-github',
  },
};
