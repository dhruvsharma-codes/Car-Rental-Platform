import { Link, useNavigate } from "react-router-dom";
import hero_Car from "../../assets/herocar.png";
import { useState } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [carType, setCarType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!carType) {
      return;
    }

    navigate(`/vehicles?type=${carType}`);
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative flex min-h-150 flex-col items-center justify-between gap-10 overflow-hidden rounded-3xl bg-[#5937E0] px-5 py-10 sm:px-8 sm:py-12 lg:min-h-145 lg:flex-row lg:gap-12 lg:px-10 lg:py-0">
        {/* Background Image */}
        <img
          src={hero_Car}
          alt="Hero car"
          className="absolute bottom-0 left-1/2 z-0 w-125 max-w-none -translate-x-1/2 scale-110 object-contain opacity-70 blur-md sm:w-162.5 lg:left-[52%] lg:w-180 lg:-translate-x-1/2 lg:scale-125"
        />

        {/* Left Content */}
        <div className="relative z-20 w-full max-w-140 text-center text-white lg:text-left">
          <h1 className="font-secondary text-[38px] font-bold leading-tight sm:text-[48px] lg:text-[60px] lg:leading-[1.07]">
            Experience the road
            <br className="hidden sm:block" />
            like never before
          </h1>

          <p className="mx-auto mt-5 max-w-105 text-[15px] font-normal leading-6 sm:text-[16px] lg:mx-0">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper.
          </p>

          <Link to="/vehicles">
            <button className="mt-5 cursor-pointer rounded-md bg-[#FF9E0C] px-7 py-3 text-[16px] font-semibold text-white">
              View all cars
            </button>
          </Link>
        </div>

        {/* Booking Form */}
        <div className="relative z-30 w-full max-w-84 rounded-xl bg-white p-5 shadow-lg sm:max-w-90">
          <h2 className="mb-4 text-center text-[26px] font-semibold sm:text-[28px]">
            Book your car
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Car Type */}
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full rounded-md bg-gray-100 px-3 py-2 text-[16px] leading-5 outline-none"
            >
              <option value="">Car type</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Sport">Sport</option>
              <option value="Pickup">Pickup</option>
              <option value="Cabriolet">Cabriolet</option>
              <option value="Minivan">Minivan</option>
            </select>

            {/* Rental Place */}
            <select className="w-full rounded-md bg-gray-100 px-3 py-2 text-[16px] leading-5 outline-none">
              <option>Place of rental</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Ahmedabad</option>
              <option>Chandigarh</option>
            </select>

            {/* Return Place */}
            <select className="w-full rounded-md bg-gray-100 px-3 py-2 text-[16px] leading-5 outline-none">
              <option>Place of return</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Ahmedabad</option>
              <option>Chandigarh</option>
            </select>

            {/* Rental Date */}
            <input
              type="date"
              className="w-full rounded-md bg-gray-100 px-3 py-2 text-[16px] leading-5 outline-none"
              placeholder="Rental date"
            />

            {/* Return Date */}
            <input
              type="date"
              className="w-full rounded-md bg-gray-100 px-3 py-2 text-[16px] leading-5 outline-none"
              placeholder="Return date"
            />

            {/* Button */}
            <button
              type="submit"
              className="mt-2 w-full cursor-pointer rounded-md bg-[#FF9E0C] px-7 py-3 text-[16px] font-semibold leading-5 text-white"
            >
              Book now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
