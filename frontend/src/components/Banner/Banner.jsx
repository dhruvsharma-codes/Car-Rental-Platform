import { Calendar, CarFront, Gauge, UserCheck } from "lucide-react";

import banner from "../../assets/banner.png";

const Banner = () => {
  const info = [
    {
      id: 1,
      icon: <CarFront size={40} />,
      target: "540+",
      type: "Cars",
    },
    {
      id: 2,
      icon: <UserCheck size={40} />,
      target: "20k+",
      type: "Customers",
    },
    {
      id: 3,
      icon: <Calendar size={40} />,
      target: "25+",
      type: "Years",
    },
    {
      id: 4,
      icon: <Gauge size={40} />,
      target: "20m+",
      type: "Miles",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="relative overflow-hidden rounded-[20px] bg-[#5937E0] px-4 py-12 sm:px-8 sm:py-16 lg:px-15 lg:py-20">
          {/* Background Image */}
          <img
            src={banner}
            alt="carsedan"
            className="absolute bottom-0 left-1/2 z-0 w-175 max-w-none -translate-x-1/2 object-contain opacity-40 blur-md sm:w-200 lg:w-225"
          />

          {/* Text */}
          <div className="relative z-20 flex flex-col items-center justify-center gap-3 text-center text-white">
            <h3 className="font-secondary text-[36px] font-bold leading-tight sm:text-[44px] lg:text-[50px]">
              Facts In Numbers
            </h3>

            <p className="max-w-175 text-[15px] font-normal leading-6 sm:text-[16px]">
              Amet crac hec orchi lacus. faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorperin. Diam tincidunt tincidunt erat at semper
              fermentum.
            </p>
          </div>

          {/* Stats */}
          <div className="relative z-20 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
            {info.map((item) => (
              <div
                key={item.id}
                className="flex w-full items-center gap-4 rounded-[20px] bg-white p-4"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#FF9E0C]">
                  {item.icon}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="font-secondary text-[24px] font-bold">
                    {item.target}
                  </span>

                  <span className="font-secondary text-[16px] font-semibold text-black/60">
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
