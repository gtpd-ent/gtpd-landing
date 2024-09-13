'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/lib/hooks';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="relative z-[999]">
      <motion.div
        animate={{ opacity: 1, x: '-50%', y: 0 }}
        className="fixed left-1/2 top-0 h-24 w-full rounded-none border border-white/50 bg-white/50 shadow-lg shadow-black/5 backdrop-blur-md dark:border-black/40 dark:bg-gray-950/75 sm:mt-8 sm:h-16 sm:w-[48rem] sm:rounded-full"
        initial={{ opacity: 0, x: '-50%', y: -100 }}
      />
      <nav className="fixed left-1/2 top-0 flex h-24 w-full -translate-x-1/2 justify-center py-2 sm:mt-8 sm:h-16 sm:py-0">
        <ul className="flex w-full flex-wrap items-center justify-center gap-x-2 px-4 text-base font-medium text-gray-500 sm:w-[48rem] sm:flex-nowrap sm:justify-between sm:gap-5">
          {links.map(({ hash, name }) => (
            <motion.li
              animate={{ opacity: 1, y: 0 }}
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, y: -100 }}
              key={hash}
            >
              <Link
                className={clsx(
                  'flex w-full items-start justify-center px-3 py-1 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300 sm:px-4 sm:py-2',
                  {
                    'text-gray-950 dark:text-gray-200': activeSection === name,
                  },
                )}
                href={hash}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(name);
                }}
              >
                {name}
                {name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-xl bg-gray-100 dark:bg-gray-800 sm:rounded-full"
                    layoutId="activeSection"
                    transition={{ damping: 30, stiffness: 400, type: 'spring' }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
