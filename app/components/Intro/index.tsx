'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import SimpleMarkdown from '../../../components/SimpleMarkdown';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

const Intro = () => {
  return (
    <section className="my-32 max-w-4xl text-center">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1567784177951-6fa58317e16b"
              alt="Ricardo portrait"
              width={200}
              height={200}
              quality={95}
              priority
              className=" size-48 rounded-full border-8 border-white object-cover shadow-xl sm:size-64"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-5xl sm:text-7xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <SimpleMarkdown
          className="mb-12 mt-8 px-8 text-xl font-medium sm:mt-16 sm:text-4xl"
          text="**Hello, I'm Ricardo.** I'm a **full stack developer** with **3 years** of experience. I enjoy building *sites & apps*. My focus is _React (Next.js)_"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact me here
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <div className="flex gap-2">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://guthib.com"
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
