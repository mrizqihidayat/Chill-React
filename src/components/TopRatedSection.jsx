import { useEffect, useRef, useState } from "react";
import { topRatedData } from "../data/movie";
import { FaArrowLeft, FaArrowRight, FaPlay, FaCheck, FaChevronDown } from "react-icons/fa6";

export default function TopRatedSection() {
  const sliderRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    handleChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setExpandedId(null);
    }
  }, [isMobile]);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      const scrollAmount = 264;
      sliderRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-2 py-[5px] md:px-16 md:py-[30px]">
      <h3 className="text-white text-[20px] font-bold  md:text-[32px]">
        Top Rating Film dan Series Hari ini
      </h3>

      <div className="relative group">

        <button
          className="absolute left-[-25px] top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full items-center justify-center transition hidden md:inline"
          onClick={() => scrollSlider("left")}
        >
          <FaArrowLeft size={20} />
        </button>

        <div
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-6"
          id="topSlider"
          ref={sliderRef}
          style={{ scrollbarWidth: 'none' }}
        >
          {topRatedData.map((movie) => (
            <div
              key={movie.id}
              className="relative min-w-[245px] h-[340px] shrink-0"
              onMouseLeave={() => {
                if (!isMobile) {
                  setExpandedId(null);
                }
              }}
            >

              <div
                className="w-full h-full rounded-xl overflow-hidden cursor-pointer border border-transparent transition-all"
                onClick={() => {
                  if (!isMobile) {
                    setExpandedId(movie.id);
                  }
                }}
              >
                <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />

                {movie.isNewEpisode && (
                  <div className="absolute top-4 left-4 bg-blue-600 px-3 py-2 rounded-full shadow-lg justify-center items-center flex">
                    <span className="text-white  font-bold text-[14px]">Episode Baru</span>
                  </div>
                )}

                <span className="absolute top-2 right-4 text-4xl font-bold text-white drop-shadow-md opacity-80">
                  {movie.id}
                </span>
              </div>

              {expandedId === movie.id && (
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[340px] h-[350px] bg-[#181A1C] rounded-xl shadow-2xl overflow-hidden scale-110 transition-all duration-300 border border-gray-700"
                >
                  <div className="relative h-[220px]">
                    <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#181A1C] to-transparent" />
                    <h4 className="absolute bottom-2 left-4 text-white font-bold text-lg drop-shadow-md">
                      {movie.title}
                    </h4>
                  </div>

                  <div className="p-4 flex flex-col gap-3">

                    <div className="flex items-center gap-2">
                      <button className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition">
                        <FaPlay size={16} className="ml-0.5" />
                      </button>
                      <button className="border border-gray-400 text-white rounded-full p-2 hover:border-white transition">
                        <FaCheck size={16} />
                      </button>
                      <button className="border border-gray-400 text-white rounded-full p-2 ml-auto hover:border-white transition">
                        <FaChevronDown size={16} />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 text-white text-xs font-medium">
                      <span className="text-green-400">98% Cocok</span>
                      <span className="border border-gray-500 px-1 rounded text-[10px]">{movie.rating}</span>
                      <span className="text-gray-300">{movie.duration}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {movie.genres.map((genre, index) => (
                        <span key={index} className="text-xs text-gray-400 flex items-center">
                          {genre} {index < movie.genres.length - 1 && <span className="mx-1">•</span>}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        <button
          className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full items-center justify-center transition hidden md:inline"
          onClick={() => scrollSlider("right")}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}