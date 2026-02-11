import { useState } from "react";
import logo from "../assets/logo.svg"; // Pastikan path logo benar
import { FaChevronRight } from "react-icons/fa6";

export default function Footer() {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const genres = [
    "Aksi", "Anak-anak", "Anime", "Britania",
    "Drama", "Fantasi", "Kejahatan", "KDrama",
    "Komedi", "Petualangan", "Perang", "Romantis",
    "Sains & Alam", "Thriller"
  ];

  const helpLinks = [
    "FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"
  ];

  return (
    <footer className="bg-[#181A1C] text-white border-t border-gray-800 p-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-5 md:gap-20">
        
          <div className="flex flex-col items-start gap-2 md:w-1/5">
          <img src={logo} alt="Chill Logo" className="h-15 object-contain" />
          <p className="text-[12px]  text-gray-400 md:text-[16px] ">
            ©2023 Chill All Rights Reserved
          </p>
        </div>

        <div className="md:w-3/5">

          <button 
            className="flex justify-between items-center w-full md:hidden mb-4 font-bold"
            onClick={() => setIsGenreOpen(!isGenreOpen)}
          >
            <span className="text-[16px]">Genre</span>
            <FaChevronRight 
              className={`transition-transform duration-300 text-[16px] ${isGenreOpen ? 'rotate-90' : 'rotate-0'}`} 
            />
          </button>

          <h4 className="hidden md:block font-bold text-[16px]">Genre</h4>

          <div className={`${isGenreOpen ? 'block' : 'hidden'} md:block`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4">
              {genres.map((genre, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-white text-[16px] transition-colors"
                >
                  {genre}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-1/5">
          <button 
            className="flex justify-between items-center w-full md:hidden font-bold"
            onClick={() => setIsHelpOpen(!isHelpOpen)}
          >
            <span className="text-[16px]">Bantuan</span>
            <FaChevronRight 
              className={`transition-transform duration-300 text-[16px] ${isHelpOpen ? 'rotate-90' : 'rotate-0'}`} 
            />
          </button>

          <h4 className="hidden md:block font-bold text-[16px]">Bantuan</h4>

          <div className={`${isHelpOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-col gap-2">
              {helpLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-white text-[16px] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}