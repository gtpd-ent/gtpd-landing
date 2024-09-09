import { CSSProperties } from 'react';

const styles: {
  arrowStyle: CSSProperties;
  contentStyle: CSSProperties;
  iconStyle: CSSProperties;
} = {
  arrowStyle: {
    borderRight: '0.5rem solid #9ca3af',
  },
  contentStyle: {
    background: '#f3f4f6',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    boxShadow: 'none',
    padding: '1.5rem 2rem',
    textAlign: 'left' as CSSProperties['textAlign'],
  },
  iconStyle: {
    background: 'white',
    fontSize: '1.5rem',
  },
};

export default styles;
