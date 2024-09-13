'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

import { projectsData } from '@/lib/data';

type ProjectCardProps = (typeof projectsData)[number];

const ProjectCard = ({
  description,
  imageUrl,
  tags,
  title,
}: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ['0 1', '1.33 1'],
    target: ref,
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], ['0.8', '1']);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], ['0.6', '1']);

  return (
    <motion.div
      className="group mb-3 last:mb-0 sm:mb-8"
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
    >
      <article className="relative max-w-2xl overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-80 sm:pr-8 sm:group-even:pl-8">
        <div className="flex h-full flex-col px-5 pb-8 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-72">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.5] px-3 py-1 text-sm uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          alt="Projects Image"
          className="absolute -right-40 top-8 hidden w-[28rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 sm:block"
          quality={95}
          src={imageUrl}
        />
      </article>
    </motion.div>
  );
};

export default ProjectCard;
