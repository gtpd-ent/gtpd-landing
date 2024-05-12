'use client';

import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';

import SimpleMarkdown from '@/components/SimpleMarkdown';
import { useSectionInView } from '@/lib/hooks';

const Intro = () => {
  const { ref } = useSectionInView('Home');
  return (
    <section
      className="my-32 max-w-4xl scroll-mt-[100rem] text-center"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.2,
              type: 'tween',
            }}
          >
            <Image
              alt="Ricardo portrait"
              className=" size-48 rounded-full border-8 border-white object-cover shadow-xl sm:size-64"
              height={200}
              priority
              quality={95}
              src="https://images.unsplash.com/photo-1567784177951-6fa58317e16b"
              width={200}
            />
          </motion.div>
          <motion.span
            animate={{ opacity: 1, scale: 1 }}
            className="absolute bottom-0 right-0 text-5xl sm:text-7xl"
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.7,
              stiffness: 125,
              type: 'spring',
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
      >
        <SimpleMarkdown
          className="mb-12 mt-8 px-8 text-xl font-medium sm:mt-16 sm:text-4xl"
          Tag="h1"
        >
          **Hello, I&apos;m Ricardo.** I&apos;m a **full stack developer** with
          **3 years** of experience. I enjoy building *sites & apps*. My focus
          is _React (Next.js)_
        </SimpleMarkdown>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          href="#contact"
        >
          Contact me here
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          download
          href="/CV.pdf"
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <div className="flex gap-2">
          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
            href="https://linkedin.com"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
            href="https://guthib.com"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
