import Intro from '@/app/components/Intro';
import Divider from './components/Divider';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <Divider />
    </main>
  );
}
