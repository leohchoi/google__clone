import { useRef } from 'react';
import { useRouter } from 'next/router'
import Footer from './components/Footer';
import HomeBody from './components/HomeBody';
import Nav from './components/Nav';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) {
        return;
    }
    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Nav />
      <HomeBody search={search} input={searchInputRef}/>
      <Footer />
    </div>
  );
}
