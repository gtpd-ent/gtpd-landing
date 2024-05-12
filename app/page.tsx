import React from 'react';

import About from './screens/About';
import Divider from './components/Divider';
import Intro from './screens/Intro';
import Projects from './screens/Projects';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <Divider />
      <About />
      <Projects />
    </main>
  );
}
