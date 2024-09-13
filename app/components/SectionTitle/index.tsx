import React from 'react';

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize">
      {children}
    </h2>
  );
};

export default SectionTitle;
