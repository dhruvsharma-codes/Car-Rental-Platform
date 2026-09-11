import { LocationEdit, Mail, Phone } from "lucide-react";
import car from "../../assets/car.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/googleplay.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Footer = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <footer className="w-full bg-white pt-15 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl ">
        <div className="flex flex-col gap-15">
          {/* top */}
          <div className="flex justify-between">
            <Link to={"/"} className="flex gap-3 items-center">
              <img width={48} src={car} alt={car} />
              <h2 className="font-bold text-[16px]">Car Rental</h2>
            </Link>
            {/* location */}
            <div className="flex gap-3 items-center">
              <span className="text-white text-center flex items-center justify-center bg-[#FF9e0C] w-10 h-10 rounded-full">
                <LocationEdit size={22} />
              </span>
              <div>
                <span className="text-[16px] font-normal">Address</span>
                <p className="text-[16px] font-semibold font-secondary">
                  Munda Mazra, Yamuna Nagar, Haryana, 135001
                </p>
              </div>
            </div>
            {/* mail */}
            <div className="flex gap-3 items-center">
              <span className="text-white flex items-center justify-center bg-[#FF9e0C] w-10 h-10 rounded-full">
                <Mail size={22} />
              </span>
              <div>
                <span className="text-[16px] font-normal">Email</span>
                <p className="text-[16px] font-semibold font-secondary">
                  dhruvsharma8363@gmail.com
                </p>
              </div>
            </div>
            {/* phone */}
            <div className="flex gap-3 items-center">
              <span className="text-white flex items-center justify-center bg-[#FF9e0C] w-10 h-10 rounded-full">
                <Phone size={22} />
              </span>
              <div>
                <span className="text-[16px] font-normal">Phone</span>
                <p className="text-[16px] font-semibold font-secondary">
                  +91 8053103060
                </p>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="flex justify-between">
            <div className="flex flex-col gap-8 justify-between max-w-70">
              <p className="text-[20px] font-semibold font-secondary">
                Faucibus faucibus pellentesque dictum turpis. Id pellentesque
                turpis massa a id iaculis lorem{" "}
              </p>
              <div className="flex items-center gap-5">
                <img src={facebook} alt="facebook" />
                <img src={insta} alt="insta" />
                <img src={twitter} alt="twitter" />
                <img src={youtube} alt="youtube" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-[20px] font-semibold font-secondary">
                Useful links
              </h3>
              <ul className="flex flex-col gap-2 text-[16px] font-normal font-secondary">
                <li>
                  <Link to={"/about"}>About us</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact us</Link>
                </li>
                <li>
                  <Link to={"/vehicles"}>Gallery</Link>
                </li>
                <li>
                  <Link to={"/contact#blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/about#faq"}>F.A.Q</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-[20px] font-semibold font-secondary">
                Vehicles
              </h3>
              <ul className="flex flex-col gap-2 text-[16px] font-normal font-secondary">
                <li>
                  <Link to={"/vehicles?type=Sedan"}>Sedan</Link>
                </li>
                <li>
                  <Link to={"/vehicles?type=Cabriolet"}>Cabriolet</Link>
                </li>
                <li>
                  <Link to={"/vehicles?type=Pickup"}>Pickup</Link>
                </li>
                <li>
                  <Link to={"/vehicles?type=Minivan"}>Minivan</Link>
                </li>
                <li>
                  <Link to={"/vehicles?type=SUV"}>SUV</Link>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-6">
              <h3 className="text-[20px] font-semibold font-secondary">
                Download App
              </h3>
              <div className="flex flex-col gap-6">
                <img height={50} src={appStore} alt="appStore" />
                <img height={50} src={googlePlay} alt="googlePlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
