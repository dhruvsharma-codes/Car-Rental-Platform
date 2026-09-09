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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#5937E0] relative overflow-hidden rounded-3xl min-h-145 flex items-center justify-between px-10">
        {/* background-image */}
        <img
          src={hero_Car}
          alt="hero_car"
          className="absolute z-0 w-180 h-auto object-contain left-80 bottom-8 blur-md opacity-80 scale-125"
        />
        {/* left content */}
        <div className=" relative z-20 text-white">
          <h1 className="text-[60px] font-bold leading-16">
            Experience the road
            <br />
            like never before
          </h1>
          <p className="text-[16px] font-normal mt-5 max-w-105">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper.
          </p>
          <Link to={"/vehicles"}>
          <button className="mt-5 cursor-pointer bg-[#FF9E0C] text-white px-7 py-3 rounded-md text-[16px] font-semibold">
            View all cars
          </button>
          </Link>
        </div>
        {/* booking form */}
        <div className=" relative z-30 bg-white rounded-xl p-5 w-84">
          <h2 className="text-center font-semibold text-[28px] mb-4">
            Book your car
          </h2>

          <form onClick={handleSubmit} className="flex flex-col gap-4">
            {/* Car type */}
            <select value={carType} onChange={(e)=>setCarType(e.target.value)} className="w-full bg-gray-100 leading-5 rounded-md px-3 py-2 text-[16px] outline-none">
              <option>Car type</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Sport</option>
              <option>Pickup</option>
              <option>Cabriolet</option>
              <option>Minivan</option>
            </select>

            {/* Rental place */}
            <select className="w-full bg-gray-100 leading-5 rounded-md px-3 py-2 text-[16px] outline-none">
              <option>Place of rental</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Ahmedabad</option>
              <option>Chandigarh</option>
            </select>

            {/* Return place */}
            <select className="w-full bg-gray-100 leading-5 rounded-md px-3 py-2 text-[16px] outline-none">
              <option>Place of return</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Ahmedabad</option>
              <option>Chandigarh</option>
            </select>

            {/* Rental date */}
            <input
              type="date"
              className="w-full bg-gray-100 rounded-md leading-5 px-3 py-2 text-[16px] outline-none"
            />

            {/* Return date */}
            <input
              type="date"
              className="w-full bg-gray-100 rounded-md px-3 leading-5 py-2 text-[16px] outline-none"
            />

            {/* Button */}
            <button type="submit" className="w-full cursor-pointer bg-[#FF9E0C] text-white leading-5 py-3 px-7 rounded-md text-[16px] font-semibold mt-2">
              Book now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;






