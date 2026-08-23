import React from 'react';

const HomeitLogo = ({ size = 28, color = '#E84057' }) => (
  <svg
    width={size}
    height={Math.round(size * 1.2)}
    viewBox="0 0 100 120"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    {/* Right half arch */}
    <path
      d="M50 12 C72 12 88 30 88 55 C88 72 80 87 68 97 L60 104 C57 106 54 110 54 114 C54 118 57 121 61 119"
      stroke={color}
      strokeWidth="13"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Left half arch + spiral */}
    <path
      d="M50 12 C28 12 12 30 12 55 C12 72 20 87 32 97 L40 104 C43 106 46 110 46 114 C46 118 43 121 39 119 C26 112 22 97 28 84 C34 71 52 67 64 77 C76 87 76 106 64 115 C52 124 36 118 31 106 C26 94 33 81 46 79 C59 77 68 88 65 99 C62 110 50 113 46 107 C44 103 46 99 50 98"
      stroke={color}
      strokeWidth="13"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeitLogo;
