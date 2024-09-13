'use client';

import React, { Fragment } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiencesData } from '@/lib/data';
import SectionTitle from '@/app/components/SectionTitle';
import { useSectionInView, useTheme } from '@/lib/hooks';

import { getStyles } from './styles';

const Experience = () => {
  const { inView, ref } = useSectionInView('Experience');
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <section className="mb-28 scroll-mt-36 sm:mb-40" id="experience" ref={ref}>
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
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
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
