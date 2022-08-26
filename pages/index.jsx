import Footer from './components/Footer';
import HomeBody from './components/HomeBody';
import Nav from './components/Nav';

export default function Home() {
  const search = (event, searchTerm) => {
    event.preventDefault();
    console.log(searchTerm)
    if (!searchTerm) {
        return;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Nav />
      <HomeBody search={search} />
      <Footer />
    </div>
  );
}
