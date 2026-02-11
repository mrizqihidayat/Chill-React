import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { FcGoogle } from "react-icons/fc"; 
import { useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.svg"; 
import bgImage from "../assets/bg.png"; 

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (!username || !password) {
      alert("Harap isi username dan password!");
      return;
    }

    const storedUser = localStorage.getItem("chill.user");
    if (!storedUser) {
      alert("Akun belum terdaftar. Silakan daftar dulu.");
      return;
    }

    const { username: storedUsername, password: storedPassword } =
      JSON.parse(storedUser);

    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("chill.auth", "true");
      navigate("/home");
      return;
    }

    alert("Username atau kata sandi salah!");
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative px-4"
      style={{ 
        backgroundImage: `url(${bgImage})`, 
      }}
    >

      <div className="relative z-10 bg-[#181A1C]/85 backdrop-blur-sm p-8 md:py-8 px-10 rounded-2xl w-full max-w-[450px] shadow-2xl border border-white/5">
        
        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="Chill Logo" className="h-15 mb-3" />
          <h2 className="text-white text-[18px] font-bold mb-1 md:text-[32px]">Masuk</h2>
          <p className="text-white text-[10px] md:text-[16px]">Selamat datang kembali!</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          
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

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-white text-sm font-medium ml-1">
              Kata Sandi
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password"
                placeholder="Masukkan kata sandi"
                className="w-full bg-transparent border border-[#3D4142] text-white rounded-full px-5 py-2.5 pr-12 focus:outline-none focus:border-white/50 transition placeholder-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition cursor-pointer"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400 mt-[-10px]">
            <div>
              Belum punya akun? <a href="/register" className="text-white hover:underline font-medium">Daftar</a>
            </div>
            <a href="#" className="text-white hover:underline font-medium">Lupa kata sandi?</a>
          </div>

          <button 
            type="submit" 
            className="bg-[#3D4142] hover:bg-[#555] text-white font-medium py-2.5 rounded-full transition duration-300 mt-2"
          >
            Masuk
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
            Masuk dengan Google
          </button>

        </form>
      </div>
    </div>
  );
}