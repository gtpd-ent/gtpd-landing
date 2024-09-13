/* eslint-disable no-unused-vars */
import { CSSProperties } from 'react';

import { Theme } from '@/lib/types';

type Styles = {
  arrowStyle: CSSProperties;
  contentStyle: CSSProperties;
  iconStyle: CSSProperties;
};

export const getStyles = (theme: Theme): Styles => ({
  arrowStyle: {
    borderRight:
      theme === 'light'
        ? '0.5rem solid #9ca3af'
        : '0.5rem solid rgba(255, 255, 255, 0.05)',
  },
  contentStyle: {
    background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    boxShadow: 'none',
    padding: '1.5rem 2rem',
    textAlign: 'left' as CSSProperties['textAlign'],
  },
  iconStyle: {
    background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.05)',
    fontSize: '1.5rem',
  },
});
