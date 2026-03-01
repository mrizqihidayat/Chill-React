import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ContinueSection from "../components/ContinueSection";
import TrendingSection from "../components/TrendingSection";
import TopRatedSection from "../components/TopRatedSection";
import NewReleaseSection from "../components/NewReleaseSection";

export default function Home({ savedMovies, toggleMyList }) {
  return (
    <div className="bg-[#181A1C] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ContinueSection />

      <TrendingSection savedMovies={savedMovies} toggleMyList={toggleMyList} />
      <TopRatedSection savedMovies={savedMovies} toggleMyList={toggleMyList} />
      <NewReleaseSection savedMovies={savedMovies} toggleMyList={toggleMyList} />
      
      <Footer />
    </div>
  );
}