import { Calendar, CarFront, Gauge, UserCheck } from "lucide-react";
import banner from "../../assets/banner.png";
const Banner = () => {
  const info = [
    {
      id: 1,
      icon: <CarFront width={40} height={40} />,
      target: "540+",
      type: "Cars",
    },
    {
      id: 2,
      icon: <UserCheck width={40} height={40} />,
      target: "20k+",
      type: "Customers",
    },
    {
      id: 3,
      icon: <Calendar width={40} height={40} />,
      target: "25+",
      type: "Years",
    },
    {
      id: 4,
      icon: <Gauge width={40} height={40} />,
      target: "20m+",
      type: "Miles",
    },
  ];
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 min-h-121.5">
        <div className=" relative overflow-hidden bg-[#5937E0] rounded-[20px] px-15 py-20">
          <img
            src={banner}
            className="absolute scale-95 z-0 -bottom-5 blur-md left-70 opacity-50 object-contain "
            alt="carsedan"
          />
          {/* text */}
          <div className="flex relative z-20 flex-col items-center gap-2.5 text-center text-white justify-center">
            <h3 className="text-[50px] font-bold font-secondary">
              Facts In Numbers
            </h3>
            <p className=" max-w-175  text-[16px] font-secondary font-normal">
              Amet crac hec orchi lacus. faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorperin. Diam tincidunt tincidunt erat at semper
              fermentum.
            </p>
          </div>
          {/* target */}
          <div className=" relative z-20 flex gap-16 justify-center mt-20">
            {info.map((item) => (
              <div
                className="bg-white p-4 rounded-[20px] flex gap-4 w-60"
                key={item.id}
              >
                <div className="rounded-xl bg-[#FF9E0C] w-18 h-17 flex items-center justify-center ">
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[24px] font-bold font-secondary">
                    {item.target}
                  </span>
                  <span className="text-[16px] font-semibold bg-[#00000] opacity-60">
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
