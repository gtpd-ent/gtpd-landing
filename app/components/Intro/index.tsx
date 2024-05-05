'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import SimpleMarkdown from '../../../components/SimpleMarkdown';

const Intro = () => {
  return (
    <section className="my-32 max-w-3xl text-center">
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
          className="mt-8 px-8 text-xl font-medium sm:mt-16 sm:text-4xl"
          text="**Hello, I'm Ricardo.** I'm a **full stack developer** with **3 years** of experience. I enjoy building *sites & apps*. My focus is _React (Next.js)_"
        />
      </motion.div>
    </section>
  );
};

export default Intro;
