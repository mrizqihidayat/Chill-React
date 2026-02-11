import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import profileImage from "../assets/profile.png";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";

const navigation = [
  { name: 'Series', href: '#', current: true },
  { name: 'Film', href: '#', current: false },
  { name: 'Daftar Saya', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("chill.auth", "false");
    navigate("/login");
  };

  return (
    <nav className="bg-[#22282A] px-4 py-5 flex justify-between items-center sticky top-0 z-1000 md:px-8 md:py-6">

        <div className="flex gap-4 md:gap-[60px] items-center">
          <img
            alt="CHILL"
            src={logo}
            className="hidden h-10 w-auto cursor-pointer md:inline"
          />

          <img
            alt="CHILL"
            src={logo2}
            className="h-5 w-auto cursor-pointer md:hidden"
          />

          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-white' : 'text-white',
                'text-[14px] font-medium transition-colors duration-200 md:text-[18px]',
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

      <div className="flex items-center">
        <Menu as="div" className="relative">
          <div>
            <MenuButton className="flex items-center gap-2 rounded-full focus:outline-none cursor-pointer group">
              <img
                alt="profile"
                src={profileImage}
                className="h-7 w-7 rounded-full object-cover border border-transparent group-hover:border-white/50 transition md:h-10 md:w-10"
              />
              <GoChevronDown className="h-4 w-4 stroke-2 text-white transition-transform duration-200 group-data-open:rotate-180 md:h-5 md:w-5" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-xl bg-[#181A1C] py-2 shadow-xl ring-1 ring-white/10 focus:outline-none data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75 data-enter:ease-out data-leave:ease-in"
          >
            <MenuItem
              as="a"
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 text-[14px] text-[#3254FF] hover:bg-white/10 "
            >
              <FaUser className="h-5 w-5" />
              Profil Saya
            </MenuItem>
            <MenuItem
              as="a"
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 text-[14px] text-white hover:bg-white/10"
            >
              <IoStar className="h-5 w-5" />
              Ubah Premium
            </MenuItem>
            <MenuItem
              as="a"
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 text-[14px] text-white hover:bg-white/10"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="h-5 w-5" />
              Keluar
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  )
}