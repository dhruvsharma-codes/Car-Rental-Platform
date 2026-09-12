
import { Clock, LocationEdit, Mail, Phone } from "lucide-react";

import contactCar from "../assets/contactcar.png";

import Logos from "../components/Logos/Logos";

import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";

import Blogs from "../components/Blogs/Blogs";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const Contact = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const [carType, setCarType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!carType) {
      return;
    }

    navigate(`/vehicles?type=${carType}`);
  };

  useEffect(() => {
    if (location.hash === "#blog") {
      document.getElementById("blog")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location.hash]);

  const newsData = [
    {
      id: 1,
      title: "How To Choose The Right Car",
      category: "News",
      date: "12 April 2024",
      image: news1,
      description:
        "Choosing the right car depends on your budget, comfort, fuel efficiency and the purpose of your trip. In this guide, we will help you understand the important things to consider before renting a car.",
    },
    {
      id: 2,
      title: "Which plan is right for me?",
      category: "News",
      date: "12 April 2024",
      image: news2,
      description:
        "Finding the right rental plan can make your journey easier and more affordable. Learn about different rental options and choose the plan that fits your travel needs.",
    },
    {
      id: 3,
      title: "Enjoy Speed, Choice & Total Control",
      category: "News",
      date: "12 April 2024",
      image: news3,
      description:
        "Enjoy a comfortable driving experience with a wide range of vehicles. Choose your preferred car and enjoy the freedom and flexibility of your journey.",
    },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">

        {/* ================= PAGE TITLE ================= */}
        <div className="flex min-h-55 w-full items-center justify-center py-10 sm:min-h-60 lg:min-h-60">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h6 className="font-secondary text-[36px] font-bold sm:text-[44px] lg:text-[50px]">
              Contact Us
            </h6>

            <p className="text-[16px] font-normal sm:text-[18px] lg:text-[20px]">
              <Link to="/">Home</Link> /{" "}
              <span className="font-medium">Contact Us</span>
            </p>
          </div>
        </div>

        {/* ================= BOOKING FORM ================= */}
        <div className="flex flex-col items-center justify-between gap-10 py-10 sm:py-12 lg:flex-row lg:gap-8 lg:py-15">

          {/* Form */}
          <div className="relative z-30 w-full max-w-[384px] rounded-[20px] bg-[#5937E0] p-5 sm:p-6 lg:shrink-0">
            <h2 className="mb-4 text-center text-[24px] font-semibold text-white sm:text-[28px]">
              Book your car
            </h2>

            <form className="mt-6 flex w-full flex-col gap-5 sm:mt-8 sm:gap-6">

              {/* Car type */}
              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full rounded-md bg-[#694BE3] px-3 py-2 text-[15px] leading-5 text-white/80 outline-none sm:text-[16px]"
              >
                <option>Car type</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Sport</option>
                <option>Van</option>
                <option>Pickup</option>
                <option>Cabriolet</option>
                <option>Minivan</option>
              </select>

              {/* Rental place */}
              <select className="w-full rounded-md bg-[#694BE3] px-3 py-2 text-[15px] leading-5 text-white/80 outline-none sm:text-[16px]">
                <option>Place of rental</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Ahmedabad</option>
                <option>Chandigarh</option>
              </select>

              {/* Return place */}
              <select className="w-full rounded-md bg-[#694BE3] px-3 py-2 text-[15px] leading-5 text-white/80 outline-none sm:text-[16px]">
                <option>Place of return</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Ahmedabad</option>
                <option>Chandigarh</option>
              </select>

              {/* Rental date */}
              <input
                type="date"
                className="w-full rounded-md bg-[#694BE3] px-3 py-2 text-[15px] leading-5 text-white/80 outline-none sm:text-[16px]"
              />

              {/* Return date */}
              <input
                type="date"
                className="w-full rounded-md bg-[#694BE3] px-3 py-2 text-[15px] leading-5 text-white/80 outline-none sm:text-[16px]"
              />

              {/* Button */}
              <button
                onClick={handleSubmit}
                className="mt-2 w-full cursor-pointer rounded-xl bg-[#FF9E0C] px-7 py-3 text-[15px] font-semibold leading-5 text-white sm:text-[16px]"
              >
                Book now
              </button>
            </form>
          </div>

          {/* Car image */}
          <div className="flex w-full items-center justify-center lg:flex-1">
            <img
              className="h-auto w-full max-w-125 object-contain sm:max-w-150 lg:max-w-175"
              src={contactCar}
              alt="contact car"
            />
          </div>
        </div>

        {/* ================= CONTACT INFORMATION ================= */}
        <div className="grid grid-cols-1 gap-8 py-10 text-start sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-6 lg:py-15">

          {/* Address */}
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF9E0C] text-center text-white">
              <LocationEdit size={22} />
            </span>

            <div className="min-w-0">
              <span className="text-[15px] font-normal sm:text-[16px]">
                Address
              </span>

              <p className="wrap-break-word font-secondary text-[15px] font-semibold sm:text-[16px]">
                Oxford Ave, Cary, NC 27511
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF9E0C] text-white">
              <Mail size={22} />
            </span>

            <div className="min-w-0">
              <span className="text-[15px] font-normal sm:text-[16px]">
                Email
              </span>

              <p className="break-all font-secondary text-[15px] font-semibold sm:text-[16px]">
                nwiger@yahoo.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF9E0C] text-white">
              <Phone size={22} />
            </span>

            <div>
              <span className="text-[15px] font-normal sm:text-[16px]">
                Phone
              </span>

              <p className="font-secondary text-[15px] font-semibold sm:text-[16px]">
                +537 547-6401
              </p>
            </div>
          </div>

          {/* Opening hours */}
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF9E0C] text-white">
              <Clock size={22} />
            </span>

            <div>
              <span className="text-[15px] font-normal sm:text-[16px]">
                Opening hours
              </span>

              <p className="font-secondary text-[15px] font-semibold sm:text-[16px]">
                Sun-Mon: 10am-10pm
              </p>
            </div>
          </div>
        </div>

        {/* ================= BLOGS ================= */}
        <div
          id="blog"
          className="flex flex-col gap-8 py-10 sm:gap-10 sm:py-12 lg:py-15"
        >
          <h1 className="font-secondary text-[34px] font-bold leading-tight sm:text-[42px] lg:text-[50px]">
            Latest blog posts & news
          </h1>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {newsData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedBlog(item)}
                className="cursor-pointer"
              >
                <Blogs
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  date={item.date}
                />
              </div>
            ))}
          </div>
        </div>

        <Logos />
      </div>

      {/* ================= BLOG MODAL ================= */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-3 sm:p-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-md sm:right-4 sm:top-4 sm:h-10 sm:w-10"
            >
              ×
            </button>

            {/* Blog Image */}
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="h-55 w-full rounded-t-2xl object-cover sm:h-75 lg:h-93.75"
            />

            {/* Blog Content */}
            <div className="p-5 text-left sm:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-gray-500 sm:gap-3">
                <span>{selectedBlog.category}</span>
                <span>•</span>
                <span>{selectedBlog.date}</span>
              </div>

              <h2 className="mb-4 font-secondary text-2xl font-bold leading-tight sm:text-3xl">
                {selectedBlog.title}
              </h2>

              <p className="text-base leading-7 text-gray-600">
                {selectedBlog.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;