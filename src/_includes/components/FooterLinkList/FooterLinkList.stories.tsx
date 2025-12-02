import type { Meta, StoryObj } from '@storybook/react';
import FooterLinkList from './FooterLinkList';

const meta = {
  title: 'Molecular/FooterLinkList',
  component: FooterLinkList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FooterLinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryPages: Story = {
  args: {
    title: 'Primary Pages',
    links: [
      { label: 'Home', href: '/index.html' },
      { label: 'About Us', href: '/about.html' },
      { label: 'Services', href: '/services.html' },
      { label: 'pricing', href: '/pricing.html' },
      { label: 'Contact', href: '/contact.html' },
    ],
  },
};

export const Resources: Story = {
  args: {
    title: 'Resources',
    links: [
      { label: 'Support', href: 'https://www.example.com/', external: true },
      { label: 'Privacy policy', href: 'https://www.example.com/', external: true },
      { label: 'Terms & Conditions', href: 'https://www.example.com/', external: true },
      { label: 'Strategic finance', href: 'https://www.example.com/', external: true },
      { label: 'Video guide', href: 'https://www.example.com/', external: true },
    ],
  },
};
