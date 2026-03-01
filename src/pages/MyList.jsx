import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import { FaPlay, FaTrash, FaChevronDown } from "react-icons/fa6";

export default function MyList({ savedMovies, toggleMyList }) {
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event) => setIsMobile(event.matches);
    handleChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <div className="bg-[#181A1C] min-h-screen text-white flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 md:px-16 py-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Daftar Saya</h1>

        {savedMovies.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <p className="text-lg">Belum ada film di Daftar Anda.</p>
            <p className="text-sm mt-2">Tambahkan film favorit dari halaman Beranda!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 pb-20 pt-6">
            {savedMovies.map((movie, index) => {
              
              const isLeftEdge = index % 5 === 0; 
              const isRightEdge = (index + 1) % 5 === 0;
              let positionClass = "left-1/2 -translate-x-1/2 origin-center";
              if (isLeftEdge) positionClass = "left-0 origin-left";
              if (isRightEdge) positionClass = "right-0 origin-right";

              return (
                <div 
                  key={index} 
                  className={`relative w-full aspect-[2/3] shrink-0 transition-all ${expandedId === movie.title ? 'z-50' : 'z-0'}`}
                  onMouseLeave={() => !isMobile && setExpandedId(null)}
                >
                  
                  <div
                    className="w-full h-full rounded-xl overflow-hidden cursor-pointer border border-transparent transition-all"
                    onClick={() => setExpandedId(movie.title)}
                  >
                    <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />

                    {movie.top10 && (
                      <div className="absolute top-0 right-3 bg-[#E50914] w-[28px] h-[40px] flex flex-col items-center justify-center shadow-md rounded-b-sm">
                        <span className="text-white text-[8px] font-bold uppercase leading-none mt-1">Top</span>
                        <span className="text-white text-[16px] font-bold leading-none">10</span>
                      </div>
                    )}
                    {movie.isNewEpisode && (
                      <div className="absolute top-3 left-3 bg-blue-600 px-2 py-1 rounded-full shadow-lg">
                        <span className="text-white font-bold text-[10px]">Episode Baru</span>
                      </div>
                    )}
                  </div>

                  {expandedId === movie.title && (
                    <div className={`absolute top-1/2 -translate-y-1/2 w-[300px] md:w-[340px] h-[350px] bg-[#181A1C] rounded-xl shadow-2xl overflow-hidden scale-110 transition-all duration-300 border border-gray-700 ${positionClass}`}>
                      <div className="relative h-[220px]">
                        <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent" />
                        <h4 className="absolute bottom-2 left-4 text-white font-bold text-lg drop-shadow-md">{movie.title}</h4>
                      </div>

                      <div className="p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <button className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition">
                            <FaPlay size={16} className="ml-0.5" />
                          </button>
                          
                          <button 
                            className="border border-red-500 text-red-500 rounded-full p-2 hover:bg-red-500 hover:text-white transition"
                            onClick={(e) => { e.stopPropagation(); toggleMyList(movie); setExpandedId(null); }}
                          >
                            <FaTrash size={16} />
                          </button>
                          
                          <button 
                            className="border border-gray-400 text-white rounded-full p-2 ml-auto hover:border-white transition"
                            onClick={(e) => { e.stopPropagation(); setExpandedId(null); }}
                          >
                            <FaChevronDown size={16} />
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-3 text-white text-xs font-medium">
                          <span className="text-green-400">98% Cocok</span>
                          <span className="border border-gray-500 px-1 rounded text-[10px]">{movie.rating || "13+"}</span>
                          <span className="text-gray-300">{movie.duration || "2j 10m"}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {movie.genres?.map((genre, i) => (
                             <span key={i} className="text-xs text-gray-400">{genre} {i < movie.genres.length - 1 && "•"}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}