'use client';

import { motion } from 'framer-motion';
import React from 'react';

import SimpleMarkdown from '@/components/SimpleMarkdown';
import { useSectionInView } from '@/lib/hooks';

import SectionTitle from '../../components/SectionTitle';

const About = () => {
  const { ref } = useSectionInView('About', 0.8);

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="my-28 max-w-3xl scroll-mt-36 text-center leading-8 sm:mb-40"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      ref={ref}
      transition={{ delay: 0.4 }}
    >
      <SectionTitle>About me</SectionTitle>
      <SimpleMarkdown className="mb-3">
        After graduating with a degree in **Accounting**, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned
        **full-stack web development**. *My favorite part of programming* is the
        problem-solving aspect. I _love_ the feelin of finally figuring out a
        solution to a problem. My core stack is **React, Next.js, Node.js, and
        MongoDB**. I am also familiar with TypeScript and Prisma. I am always
        looking to learn new technologies. I am also currently looking for a
        **full-time position** as a software developer
      </SimpleMarkdown>
      <SimpleMarkdown>
        *When I&apos;m not coding*, I enjoy playing video games, watching
        movies, and playing with my dog. I also enjoy **learning new things**. I
        am currently learning about **history and philosophy**. I&apos;m also
        learning how to play the guitar
      </SimpleMarkdown>
    </motion.section>
  );
};

export default About;
