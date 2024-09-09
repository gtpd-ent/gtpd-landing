import { useInView } from 'react-intersection-observer';
import { useContext, useEffect } from 'react';

import { ActiveSectionContext } from '@/context/ActiveSection/utils';

import type { SectionName } from './types';

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    );
  }

  return context;
};

export const useSectionInView = (sectionName: SectionName, threshold = 0.5) => {
  const { inView, ref } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { inView, ref };
};
