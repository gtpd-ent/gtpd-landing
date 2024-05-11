import React from 'react';

import Divider from './components/Divider';
import Intro from './components/Intro';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <Divider />
    </main>
  );
}
