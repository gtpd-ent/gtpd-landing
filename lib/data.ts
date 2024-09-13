import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import React from 'react';

import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    hash: '#home',
    name: 'Home',
  },
  {
    hash: '#about',
    name: 'About',
  },
  {
    hash: '#projects',
    name: 'Projects',
  },
  {
    hash: '#skills',
    name: 'Skills',
  },
  {
    hash: '#experience',
    name: 'Experience',
  },
  {
    hash: '#contact',
    name: 'Contact',
  },
] as const;

export const experiencesData = [
  {
    date: '2019',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    location: 'Miami, FL',
    title: 'Graduated bootcamp',
  },
  {
    date: '2019 - 2021',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    location: 'Orlando, FL',
    title: 'Front-End Developer',
  },
  {
    date: '2021 - present',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    location: 'Houston, TX',
    title: 'Full-Stack Developer',
  },
] as const;

export const projectsData = [
  {
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    imageUrl: corpcommentImg,
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    title: 'CorpComment',
  },
  {
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    imageUrl: rmtdevImg,
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    title: 'rmtDev',
  },
  {
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    imageUrl: wordanalyticsImg,
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    title: 'Word Analytics',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
