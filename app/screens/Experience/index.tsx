'use client';

import React, { Fragment } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiencesData } from '@/lib/data';
import SectionTitle from '@/app/components/SectionTitle';
import { useSectionInView } from '@/lib/hooks';

import styles from './styles';

const Experience = () => {
  const { inView, ref } = useSectionInView('Experience');

  return (
    <section id="experience" ref={ref}>
      <SectionTitle>My Experience</SectionTitle>
      <VerticalTimeline lineColor="">
        {experiencesData.map(
          ({ date, description, icon, location, title }, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                contentArrowStyle={styles.arrowStyle}
                contentStyle={styles.contentStyle}
                date={date}
                icon={icon}
                iconStyle={styles.iconStyle}
                visible={inView}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="!mt-0 font-normal">{location}</p>
                <p className="!mt-1 !font-normal text-gray-700">
                  {description}
                </p>
              </VerticalTimelineElement>
            </Fragment>
          ),
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
