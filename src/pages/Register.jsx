import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { FcGoogle } from "react-icons/fc"; 
import { useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.svg"; 
import bgImage from "../assets/bg.png"; 

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate(); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault(); 

    if (!username || !password || !confirmPassword) {
      alert("Harap isi semua kolom!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Kata sandi dan Konfirmasi kata sandi tidak cocok!");
      return;
    }

    localStorage.setItem(
      "chill.user",
      JSON.stringify({ username, password })
    );
    localStorage.setItem("chill.auth", "false");
    alert("Pendaftaran berhasil! Silakan masuk.");
    navigate("/login");
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative px-4"
      style={{ 
        backgroundImage: `url(${bgImage})`, 
      }}
    >

      <div className="relative z-10 bg-[#181A1C]/85 backdrop-blur-sm p-8 md:py-6 px-10 rounded-2xl w-full max-w-[450px] shadow-2xl border border-white/5">
        
        <div className="flex flex-col items-center mb-2">
          <img src={logo} alt="Chill Logo" className="h-15 mb-1" />
          <h2 className="text-white text-[18px] font-bold mb-1 md:text-[32px]">Daftar</h2>
          <p className="text-white text-[10px] md:text-[16px]">Selamat datang!</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-white text-sm font-medium ml-1">
              Username
            </label>
            <input 
              type="text" 
              id="username"
              placeholder="Masukkan username"
              className="bg-transparent border border-[#3D4142] text-white rounded-full px-5 py-2.5 focus:outline-none focus:border-white/50 transition placeholder-gray-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-white text-sm font-medium ml-1">
              Kata Sandi
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password"
                placeholder="Masukkan kata sandi"
                className="w-full bg-transparent border border-[#3D4142] text-white rounded-full px-5 py-2 pr-12 focus:outline-none focus:border-white/50 transition placeholder-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition cursor-pointer"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-white text-sm font-medium ml-1">
              Konfirmasi Kata Sandi
            </label>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirmPassword"
                placeholder="Masukkan kata sandi"
                className="w-full bg-transparent border border-[#3D4142] text-white rounded-full px-5 py-2 pr-12 focus:outline-none focus:border-white/50 transition placeholder-gray-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
              <button 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition cursor-pointer"
              >
                {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-400 mt-[-5px]">
            <span>Sudah punya akun? </span>
            <a href="/login" className="text-white hover:underline font-medium">Masuk</a>
          </div>

          <button 
            type="submit" 
            className="bg-[#3D4142] hover:bg-[#555] text-white font-medium py-2 rounded-full transition duration-300 mt-1"
          >
            Daftar
          </button>

          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <div className="h-px w-full bg-gray-600"></div>
            <span>Atau</span>
            <div className="h-px w-full bg-gray-600"></div>
          </div>

          <button 
            type="button" 
            className="bg-transparent border border-gray-600 hover:border-white hover:bg-white/5 text-white font-medium py-2.5 rounded-full transition duration-300 flex items-center justify-center gap-3"
          >
            <FcGoogle size={20} />
            Daftar dengan Google
          </button>

        </form>
      </div>
    </div>
  );
}