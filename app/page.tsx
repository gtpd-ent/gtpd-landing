import React from 'react';

import About from './screens/About';
import Divider from './components/Divider';
import Intro from './screens/Intro';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <Divider />
      <About />
    </main>
  );
}
