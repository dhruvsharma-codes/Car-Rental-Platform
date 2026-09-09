import blur1 from "../assets/blur1.png";
import blur2 from "../assets/blur2.png";
import blur3 from "../assets/blur3.png";
import gear_shift from "../assets/gear-shift.png";
import { ArrowRight, Check } from "lucide-react";
import Card from "../components/Card/Card";
import { cars } from "../assets/cars";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
const Details = () => {
  const { id } = useParams();
  const car = cars.find((item) => item.id === Number(id));
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);
  if (!car) {
    return <h1>Car not found</h1>;
  }
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
        <div className="flex flex-wrap justify-center gap-15">
          {/* left */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <div className="text-[40px] font-bold">{car.name}</div>
                <div className="text-[#5937E0] font-semibold font-secondary text-[40px]">
                  ${car.price}
                  <span className="text-[16px] text-black/80">/day</span>
                </div>
              </div>
              <img className="min-h-76" src={car.image} alt={car.id} />
            </div>
            <div className="flex gap-6 w-full justify-start">
              <img src={blur1} alt="blur1" />
              <img src={blur2} alt="blur2" />
              <img src={blur3} alt="blur3" />
            </div>
          </div>
          {/* right */}
          <div className="w-159 flex flex-col gap-16">
            <div className="flex gap-10 flex-col">
              <h3 className="text-[24px] font-semibold font-secondary">
                Technical Specification
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#FAFAFA] p-6 rounded-xl">
                  <img src={gear_shift} alt="gear-shift" />
                  <h4 className="text-[16px] font-semibold font-secondary mt-5">
                    Gear Box
                  </h4>
                  <span className="text-[16px] font-normal text-black/60 mt-2">
                    {car.gearbox}
                  </span>
                </div>
                <div className="bg-[#FAFAFA] p-6 rounded-xl">
                  <img src={gear_shift} alt="" />
                  <h4 className="text-[16px] font-semibold font-secondary mt-5">
                    Fuel
                  </h4>
                  <span className="text-[16px] font-normal text-black/60 mt-2">
                    {car.fuel}
                  </span>
                </div>
                <div className="bg-[#FAFAFA] p-6 roundedxl">
                  <img src={gear_shift} alt="" />
                  <h4 className="text-[16px] font-semibold font-secondary mt-5">
                    Doors
                  </h4>
                  <span className="text-[16px] font-normal text-black/60 mt-2">
                    {car.doors}
                  </span>
                </div>
                <div className="bg-[#FAFAFA] p-6 rounded-xl">
                  <img src={gear_shift} alt="" />
                  <h4 className="text-[16px] font-semibold font-secondary mt-5">
                    Air Conditioner
                  </h4>
                  <span className="text-[16px] font-normal text-black/60 mt-2">
                    {car.airConditioner}
                  </span>
                </div>
                <div className="bg-[#FAFAFA] p-6 rounded-xl">
                  <img src={gear_shift} alt="" />
                  <h4 className="text-[16px] font-semibold font-secondary mt-5">
                    Seats
                  </h4>
                  <span className="text-[16px] font-normal text-black/60 mt-2">
                    {car.seats}
                  </span>
                </div>
                <div className="bg-[#FAFAFA] p-6 rounded-xl">
                  <img src={gear_shift} alt="" />
                  <h4 className="text-[16px] font-semibold font-secondary mt-5">
                    Mileage
                  </h4>
                  <span className="text-[16px] font-normal text-black/60 mt-2">
                    {car.distance}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Link to={`/booking/${car.id}`}>
                <button className="px-7 max-w-73 py-3.5 text-white bg-[#5937E0] rounded-xl w-full text-[16px] semibold">
                  Rent a car
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[24px] font-semibold font-secondary">
                Car Equipment
              </h3>
              <div className="flex gap-15">
                <ul className="flex gap-5 flex-col">
                  {car.equipment?.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center gap-3.5">
                      <span className="bg-[#5937E0] text-white rounded-full p-1 leading-1">
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="flex gap-5 flex-col">
                  {car.equipment?.slice(3, 6).map((item) => (
                    <li key={item} className="flex items-center gap-3.5">
                      <span className="bg-[#5937E0] text-white rounded-full p-1 leading-1">
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* other cars */}
        <div className="flex flex-col gap-10 py-15 px-4 mt-2">
          <div className="flex justify-between items-center w-full">
            <h3 className="w-120 text-[50px] font-bold leading-13 font-secondary text-black">
              Other cars
            </h3>
            <Link
              to={"/vehicles"}
              className=" flex gap-2 mt-8 text-[20px] font-bold font-secondary"
            >
              View All <ArrowRight width={24} height={24} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {cars.slice(0, 6).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                type={item.type}
                image={item.image}
                price={item.price}
                transmission={item.transmission}
                feature={item.feature}
                seats={item.seats}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
