import { BiSolidVolumeMute } from "react-icons/bi";
import { IoInformationCircleOutline } from "react-icons/io5"; 

import heroImage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[400px] md:h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>

      <div className="absolute inset-0 bg-linear-to-t from-[#181A1C] via-black/40 to-black/10" />

      <div className="absolute inset-0 flex flex-col justify-end px-4 pb-8 md:px-16 md:pb-12 z-10">
        <div className="max-w-2xl text-white">

          <h1 className="text-[24px] md:text-[48px] font-bold mb-4 drop-shadow-lg">
            Duty After School
          </h1>

          <p className="text-[14px] md:text-[18px] text-gray-200 mb-6 line-clamp-2 md:line-clamp-none font-medium drop-shadow-md">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>

          <div className="flex items-center gap-3">
            <button className="text-[12px] bg-blue-600 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full transition duration-300 md:text-[16px] md:px-6">
              Mulai
            </button>

            <button className="bg-[#333333]/80 hover:bg-[#555555] text-white font-bold py-2 px-4 md:px-6 rounded-full flex items-center justify-center gap-2 transition duration-300 backdrop-blur-sm text-[12px] md:text-[16px]">
              <IoInformationCircleOutline className="w-5 h-5 md:w-6 md:h-6 block" />

              <span className="leading-none relative -top-[2px] md:-top-[1px]">
                Selengkapnya
              </span>
            </button>

            <span className="border border-white/60 text-white/90 px-3 py-2 rounded-full text-[14px] font-medium backdrop-blur-sm md:text-[18px]">
              18+
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 md:bottom-12 md:right-16 z-20">
        <button className="border border-white/50 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition backdrop-blur-sm">
          <BiSolidVolumeMute className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}