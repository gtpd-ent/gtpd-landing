import { createContext } from 'react';

import { Theme } from '@/lib/types';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
