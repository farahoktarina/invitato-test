import DesktopViewLeft from './cover/DesktopViewLeft.jsx';
import DesktopViewRight from './cover/DesktopViewRight.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen relative w-full md:flex-row flex-col">
      <DesktopViewLeft/>
      <DesktopViewRight/>
    </main>
  )
};