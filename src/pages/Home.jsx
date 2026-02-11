import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import ContinueSection from "../components/ContinueSection";
import TopRatedSection from '../components/TopRatedSection';
import TrendingSection from '../components/TrendingSection';
import NewReleaseSection from '../components/NewReleaseSection';

function Home() {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ContinueSection />
        <TopRatedSection />
        <TrendingSection />
        <NewReleaseSection />
      </main>
      <Footer />
    </>
  )
}

export default Home
