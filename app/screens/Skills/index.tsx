'use client';

import { motion } from 'framer-motion';
import React from 'react';

import SectionTitle from '@/app/components/SectionTitle';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const fadeInAnimationVariants = {
  animate: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.05 },
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: 100,
  },
};

const Skills = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionTitle>My Skills</SectionTitle>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="rounded-xl border border-black/[0.1] bg-white px-5 py-3"
            custom={index}
            initial="initial"
            key={index}
            variants={fadeInAnimationVariants}
            viewport={{ once: true }}
            whileInView="animate"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
