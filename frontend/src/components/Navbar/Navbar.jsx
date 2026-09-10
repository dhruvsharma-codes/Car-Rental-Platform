import { Link, NavLink} from "react-router-dom";
import car from "../../assets/car.png";
import { Phone } from "lucide-react";
// import { useState } from "react";
const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className=" w-full sticky top-0 z-50 backdrop-blur-lg bg-white/60">
      <nav className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        {/* logo */}
        <Link to={"/"} className="flex items-center gap-3">
          <img src={car} alt="car" className="w-8 h-8 object-contain" />
          <h1 className="font-bold text-[16px]">Car Rental</h1>
        </Link>

        {/* desktop menu */}
        <div className="flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[18px] font-medium transition-colors ${
                  isActive
                    ? "text-[#5937E0]"
                    : "hover:text-[#5937E0]"
                }

`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* icon + text  */}
        <div className="flex items-center gap-3 ">
          <span className="bg-[#5937E0]  rounded-full h-10 w-10 flex items-center justify-center">
            <Phone height={20} width={20} fill="white" className="text-white" />
          </span>
          <div>
            <p className="text-[16px] font-normal leading-6.5">Need Help?</p>
            <p className="text-[16px] font-normal leading-6.5">+91 8053103060</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
