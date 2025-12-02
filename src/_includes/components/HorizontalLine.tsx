import React from 'react';

interface HorizontalLineProps {
  bgColor?: string;
}

export default function HorizontalLine({ bgColor = 'bg-ColorBlack' }: HorizontalLineProps) {
  return <div className={`horizontal-line ${bgColor}`}></div>;
}
