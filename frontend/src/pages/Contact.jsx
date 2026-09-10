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
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center w-full items-center min-h-60 ">
          {/* contact text */}
          <div className="flex flex-col gap-4">
            <h6 className="text-[50px] font-bold font-secondary">Contact Us</h6>
            <p className="text-[20px] font-normal">
              <Link to={"/"}>Home</Link> /{" "}
              <span className="font-medium">Contact Us</span>
            </p>
          </div>
        </div>

        {/* form */}
        <div className="flex  justify-between py-15">
          <div className=" relative z-30 bg-[#5937E0] rounded-[20px] p-6  w-96">
            <h2 className="text-center font-semibold text-white text-[28px] mb-4">
              Book your car
            </h2>

            <form className="flex flex-col gap-6 w-full mt-8">
              {/* Car type */}
              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full bg-[#694BE3] text-white/80 leading-5 rounded-md px-3 py-2 text-[16px] outline-none"
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
              <select className="w-full bg-[#694BE3] text-white/80 leading-5 rounded-md px-3 py-2 text-[16px] outline-none">
                <option>Place of rental</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Ahmedabad</option>
                <option>Chandigarh</option>
              </select>

              {/* Return place */}
              <select className="w-full bg-[#694BE3] text-white/80 leading-5 rounded-md px-3 py-2 text-[16px] outline-none">
                <option>Place of return</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Ahmedabad</option>
                <option>Chandigarh</option>
              </select>

              {/* Rental date */}
              <input
                type="date"
                className="w-full bg-[#694BE3] text-white/80 rounded-md leading-5 px-3 py-2 text-[16px] outline-none"
              />

              {/* Return date */}
              <input
                type="date"
                className="w-full bg-[#694BE3] text-white/80 rounded-md px-3 leading-5 py-2 text-[16px] outline-none"
              />

              {/* Button */}
              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer bg-[#FF9E0C] text-white leading-5 py-3 px-7 rounded-xl text-[16px] font-semibold mt-2"
              >
                Book now
              </button>
            </form>
          </div>
          <img className="w-200" src={contactCar} alt="contactcar" />
        </div>

        {/* contacts*/}
        <div className="py-15 text-start flex flex-wrap items-center justify-between">
          <div className="flex gap-2 items-center">
            <span className="text-white text-center flex items-center justify-center bg-[#FF9e0C] w-10 h-10 rounded-full">
              <LocationEdit size={22} />
            </span>
            <div>
              <span className="text-[16px] font-normal">Address</span>
              <p className="text-[16px] font-semibold font-secondary">
                Oxford Ave, Cary, NC 27511
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-white flex items-center justify-center bg-[#FF9e0C] w-10 h-10 rounded-full">
              <Mail size={22} />
            </span>
            <div>
              <span className="text-[16px] font-normal">Email</span>
              <p className="text-[16px] font-semibold font-secondary">
                nwiger@yahoo.com
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-white flex items-center justify-center bg-[#FF9e0C] w-10 h-10 rounded-full">
              <Phone size={22} />
            </span>
            <div>
              <span className="text-[16px] font-normal">Phone</span>
              <p className="text-[16px] font-semibold font-secondary">
                +537 547-6401
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-white flex items-center justify-center bg-[#FF9e0C] w-10 h-10 rounded-full">
              <Clock size={22} />
            </span>
            <div>
              <span className="text-[16px] font-normal">Opening hours</span>
              <p className="text-[16px] font-semibold font-secondary">
                Sun-Mon: 10am-10pm
              </p>
            </div>
          </div>
        </div>

        {/* blogs */}
        <div id="blog" className="py-15 flex flex-col gap-10">
          <h1 className="text-[50px] font-bold font-secondary text-center">
            Latest blog posts & news
          </h1>
          <div className="grid grid-cols-3 gap-6">
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
      {selectedBlog && (
        <div
          className="fixed z-100 inset-0 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 z-10 bg-white w-10 h-10 rounded-full shadow-md text-xl cursor-pointer"
            >
              ×
            </button>

            {/* Blog Image */}
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-75 object-cover rounded-t-2xl"
            />

            {/* Blog Content */}
            <div className="p-6 sm:p-8 text-left">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <span>{selectedBlog.category}</span>
                <span>•</span>
                <span>{selectedBlog.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-secondary mb-4">
                {selectedBlog.title}
              </h2>

              <p className="text-gray-600 text-base leading-7">
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
