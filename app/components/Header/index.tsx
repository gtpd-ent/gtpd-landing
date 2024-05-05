'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-20 w-full rounded-none border border-white border-opacity-50 bg-white bg-opacity-50 shadow-lg shadow-black/5 backdrop-blur-md sm:mt-8 sm:h-16 sm:w-[48rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-0 flex h-20 w-full -translate-x-1/2 py-2 sm:mt-8 sm:h-16 sm:py-0">
        <ul className="flex w-full flex-wrap items-center justify-center text-base font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center justify-center"
              key={link.hash}
            >
              <Link
                className="flex w-full items-start justify-center px-3 transition hover:text-gray-950"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
