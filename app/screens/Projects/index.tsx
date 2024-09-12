'use client';

import React, { Fragment } from 'react';

import { projectsData } from '@/lib/data';
import SectionTitle from '@/app/components/SectionTitle';
import { useSectionInView } from '@/lib/hooks';

import ProjectCard from './components/ProjectCard';

const Projects = () => {
  const { ref } = useSectionInView('Projects');
  return (
    <section className="mb-28 scroll-mt-36" id="projects" ref={ref}>
      <SectionTitle>My Projects</SectionTitle>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <ProjectCard {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
