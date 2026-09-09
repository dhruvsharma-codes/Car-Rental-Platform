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
  // const Navigate = useNavigate();

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const user = JSON.parse(
  //   localStorage.getItem("user") || "null"
  // );
  
// const handleLogout = () => {
//   localStorage.removeItem("isLoggedIn");
//   localStorage.removeItem("user");
//   setIsDropdownOpen(false);
//   Navigate("/login");
// };
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
            <p className="text-[16px] font-normal leading-6.5">+996 247-1680</p>
          </div>
          {/* <button
    onClick={handleLogout}
    className="ml-4 flex items-center gap-2 bg-[#FF9E0C] text-white px-4 py-2.5 rounded-lg font-semibold cursor-pointer hover:bg-[#e98f05] transition"
  >
    <LogOut size={18} />
    Logout
  </button> */}


  {/* <div className="relative hidden lg:block">

  <button
    type="button"
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    className="flex items-center gap-2 cursor-pointer"
  >
    <UserCircle
      size={34}
      className="text-[#5937E0]"
    />

    <span className="font-semibold">
      {user?.name || "User"}
    </span>

    <ChevronDown
      size={18}
      className={`transition-transform ${
        isDropdownOpen ? "rotate-180" : ""
      }`}
    />
  </button>


  {isDropdownOpen && (
    <div className="absolute right-0 top-12 w-52 bg-white rounded-xl shadow-lg border border-gray-100 p-2 z-50">

      <Link
        to="/profile"
        onClick={() => setIsDropdownOpen(false)}
        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50"
      >
        <UserCircle
          size={19}
          className="text-[#5937E0]"
        />

        <span>
          Profile
        </span>
      </Link>


      <button
        type="button"
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 cursor-pointer"
      >
        <LogOut
          size={19}
          className="text-[#FF9E0C]"
        />

        <span>
          Logout
        </span>
      </button>

    </div>
  )}

</div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
