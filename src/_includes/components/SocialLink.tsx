import React from 'react';

interface SocialLinkProps {
  platform: string;
  url: string;
  iconClass: string;
}

export default function SocialLink({ platform, url, iconClass }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white"
      aria-label={platform}
    >
      <i className={iconClass}></i>
    </a>
  );
}
