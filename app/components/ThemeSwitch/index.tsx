'use client';

import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

import { useTheme } from '@/lib/hooks';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
