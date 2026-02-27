import React from 'react';
import Icon from '../Icon/index.ts';

interface IconBulletItem {
  title: string;
  description: string;
}

interface IconBulletListProps {
  items: IconBulletItem[];
}

export default function IconBulletList({ items }: IconBulletListProps) {
  return (
    <ul className="flex list-inside flex-col gap-y-8 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] dark:text-white/70 md:text-xl xl:text-2xl">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-x-[10px]">
          <span className="mr-3 mt-[3px] text-[#0000FF]">
            <Icon name="solid fa-circle-check" />
          </span>
          <p>
            <strong className="font-semibold text-black dark:text-white">{item.title}</strong>
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
