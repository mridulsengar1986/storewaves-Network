import React from 'react';

export default function ToolBadge({ name }) {
  return (
    <span className="inline-flex items-center space-x-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
      <svg
        className="h-3 w-3 text-accent"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <circle cx="10" cy="10" r="3" />
      </svg>
      <span>{name}</span>
    </span>
  );
}
