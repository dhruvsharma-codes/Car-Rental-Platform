
import { Link, NavLink } from "react-router-dom";

import car from "../../assets/car.png";

import { Phone, Menu, X } from "lucide-react";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex items-center gap-2 outline-none sm:gap-3"
        >
          <img
            src={car}
            alt="car"
            className="h-7 w-7 object-contain sm:h-8 sm:w-8"
          />

          <h1 className="text-[15px] font-bold sm:text-[16px]">
            Car Rental
          </h1>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[16px] font-medium transition-colors xl:text-[18px] ${
                  isActive
                    ? "text-[#5937E0]"
                    : "hover:text-[#5937E0]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* ================= DESKTOP PHONE ================= */}
        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5937E0]">
            <Phone
              height={20}
              width={20}
              fill="white"
              className="text-white"
            />
          </span>

          <div>
            <p className="text-[15px] font-normal leading-6 sm:text-[16px]">
              Need Help?
            </p>

            <p className="text-[15px] font-normal leading-6 sm:text-[16px]">
              +91 8053103060
            </p>
          </div>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-800 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-5 shadow-sm lg:hidden sm:px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-[16px] font-medium transition-colors ${
                    isActive
                      ? "text-[#5937E0]"
                      : "text-gray-800 hover:text-[#5937E0]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Phone */}
          <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5937E0]">
              <Phone
                height={20}
                width={20}
                fill="white"
                className="text-white"
              />
            </span>

            <div>
              <p className="text-[14px] font-normal leading-5">
                Need Help?
              </p>

              <p className="text-[15px] font-normal leading-5">
                +91 8053103060
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;