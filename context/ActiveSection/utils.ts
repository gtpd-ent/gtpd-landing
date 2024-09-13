import React, { createContext } from 'react';

import { SectionName } from '@/lib/types';

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  timeOfLastClick: number;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
