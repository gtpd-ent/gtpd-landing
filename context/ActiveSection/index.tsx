'use client';

import React, { useState } from 'react';

import type { SectionName } from '@/lib/types';

import { ActiveSectionContext } from './utils';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        setTimeOfLastClick,
        timeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
