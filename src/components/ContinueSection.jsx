import { useRef } from "react";
import { continueWatchingData } from "../data/movie.js"; 
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";

export default function ContinueSection() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = 310 + 16; 

      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-2 py-[20px] md:px-16 md:py-[40px]">
      <h3 className="text-white text-[20px] font-bold mb-6 md:text-[32px]">Melanjutkan Tonton Film</h3>

      <div className="relative group"> 
        
        <button 
          className="absolute left-[-25px] top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full items-center justify-center transition hidden md:inline"
          onClick={() => scrollSlider("left")}
        >
          <FaArrowLeft size={20}/>
        </button>

        <div 
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          id="movieSlider" 
          ref={sliderRef}
          style={{ scrollbarWidth: 'none' }} 
        >
          {continueWatchingData.map((movie) => (
            <div 
              className="relative min-w-[310px] h-[200px] rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300" 
              key={movie.id}
            >
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black via-black/70 to-transparent p-4">
                <div className="flex justify-between items-end">
                  <h6 className="text-white font-bold text-lg">{movie.title}</h6>
                  
                  <div className="flex items-center gap-1">
                    <FaStar className="text-white" size={14} /> 
                    <span className="text-white text-sm font-medium"> {movie.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full items-center justify-center transition hidden md:inline"
          onClick={() => scrollSlider("right")}
        >
          <FaArrowRight size={20}/>
        </button>

      </div>
    </section>
  );
}