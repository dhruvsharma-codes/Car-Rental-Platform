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
    <footer className="w-full bg-white px-4 pt-12 pb-8 sm:px-6 lg:px-8 lg:pt-15">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-12 lg:gap-15">
          {/* ================= TOP ================= */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-center lg:gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img width={48} src={car} alt="Car Rental" />

              <h2 className="text-[16px] font-bold">Car Rental</h2>
            </Link>

            {/* Location */}
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF9E0C] text-white">
                <LocationEdit size={22} />
              </span>

              <div>
                <span className="text-[16px] font-normal">Address</span>

                <p className="font-secondary text-[16px] font-semibold leading-6">
                  Munda Mazra, Yamuna Nagar, Haryana, 135001
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF9E0C] text-white">
                <Mail size={22} />
              </span>

              <div>
                <span className="text-[16px] font-normal">Email</span>

                <p className="break-all font-secondary text-[16px] font-semibold">
                  dhruvsharma8363@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF9E0C] text-white">
                <Phone size={22} />
              </span>

              <div>
                <span className="text-[16px] font-normal">Phone</span>

                <p className="font-secondary text-[16px] font-semibold">
                  +91 8053103060
                </p>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM ================= */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* About */}
            <div className="flex flex-col gap-8">
              <p className="max-w-70 font-secondary text-[18px] font-semibold leading-7 sm:text-[20px]">
                Faucibus faucibus pellentesque dictum turpis. Id pellentesque
                turpis massa a id iaculis lorem
              </p>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <img src={facebook} alt="Facebook" className="h-auto w-auto" />

                <img src={insta} alt="Instagram" className="h-auto w-auto" />

                <img src={twitter} alt="Twitter" className="h-auto w-auto" />

                <img src={youtube} alt="YouTube" className="h-auto w-auto" />
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-6">
              <h3 className="font-secondary text-[20px] font-semibold">
                Useful links
              </h3>

              <ul className="flex flex-col gap-2 font-secondary text-[16px]">
                <li>
                  <Link to="/about">About us</Link>
                </li>

                <li>
                  <Link to="/contact">Contact us</Link>
                </li>

                <li>
                  <Link to="/vehicles">Gallery</Link>
                </li>

                <li>
                  <Link to="/contact#blog">Blog</Link>
                </li>

                <li>
                  <Link to="/about#faq">F.A.Q</Link>
                </li>
              </ul>
            </div>

            {/* Vehicles */}
            <div className="flex flex-col gap-6">
              <h3 className="font-secondary text-[20px] font-semibold">
                Vehicles
              </h3>

              <ul className="flex flex-col gap-2 font-secondary text-[16px]">
                <li>
                  <Link to="/vehicles?type=Sedan">Sedan</Link>
                </li>

                <li>
                  <Link to="/vehicles?type=Cabriolet">Cabriolet</Link>
                </li>

                <li>
                  <Link to="/vehicles?type=Pickup">Pickup</Link>
                </li>

                <li>
                  <Link to="/vehicles?type=Minivan">Minivan</Link>
                </li>

                <li>
                  <Link to="/vehicles?type=SUV">SUV</Link>
                </li>
              </ul>
            </div>

            {/* Download App */}
            <div className="flex flex-col gap-6">
              <h3 className="font-secondary text-[20px] font-semibold">
                Download App
              </h3>

              <div className="flex flex-col items-start gap-4">
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  className="h-12 w-auto"
                />

                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
