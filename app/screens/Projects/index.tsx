import React, { Fragment } from 'react';

import { projectsData } from '@/lib/data';
import SectionTitle from '@/app/components/SectionTitle';

import ProjectCard from './components/ProjectCard';

const Projects = () => {
  return (
    <section>
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
