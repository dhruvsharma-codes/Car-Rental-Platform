
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
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-15">

        {/* ================= CAR DETAILS ================= */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">

          {/* LEFT */}
          <div className="w-full lg:flex-1">

            <div className="flex flex-col gap-5">

              <div className="flex flex-col gap-3">
                <div className="font-secondary text-[32px] font-bold sm:text-[36px] lg:text-[40px]">
                  {car.name}
                </div>

                <div className="font-secondary text-[32px] font-semibold text-[#5937E0] sm:text-[36px] lg:text-[40px]">
                  ${car.price}

                  <span className="text-[14px] text-black/80 sm:text-[16px]">
                    /day
                  </span>
                </div>
              </div>

              {/* Main Car Image */}
              <div className="flex min-h-[260px] items-center justify-center sm:min-h-[320px] lg:min-h-[380px]">
                <img
                  className="h-auto max-h-[380px] w-full object-contain"
                  src={car.image}
                  alt={car.name}
                />
              </div>

            </div>

            {/* Small Images */}
            <div className="mt-5 flex w-full justify-center gap-4 sm:justify-start sm:gap-6">
              <img
                className="h-auto w-[70px] sm:w-[90px]"
                src={blur1}
                alt="blur1"
              />

              <img
                className="h-auto w-[70px] sm:w-[90px]"
                src={blur2}
                alt="blur2"
              />

              <img
                className="h-auto w-[70px] sm:w-[90px]"
                src={blur3}
                alt="blur3"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:max-w-[620px]">

            {/* Technical Specification */}
            <div className="flex flex-col gap-8 sm:gap-10">

              <h3 className="font-secondary text-[22px] font-semibold sm:text-[24px]">
                Technical Specification
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {/* Gear Box */}
                <div className="rounded-xl bg-[#FAFAFA] p-5 sm:p-6">
                  <img
                    className="h-6 w-6"
                    src={gear_shift}
                    alt="gear-shift"
                  />

                  <h4 className="mt-4 font-secondary text-[16px] font-semibold">
                    Gear Box
                  </h4>

                  <span className="mt-2 block text-[16px] font-normal text-black/60">
                    {car.gearbox}
                  </span>
                </div>

                {/* Fuel */}
                <div className="rounded-xl bg-[#FAFAFA] p-5 sm:p-6">
                  <img
                    className="h-6 w-6"
                    src={gear_shift}
                    alt=""
                  />

                  <h4 className="mt-4 font-secondary text-[16px] font-semibold">
                    Fuel
                  </h4>

                  <span className="mt-2 block text-[16px] font-normal text-black/60">
                    {car.fuel}
                  </span>
                </div>

                {/* Doors */}
                <div className="rounded-xl bg-[#FAFAFA] p-5 sm:p-6">
                  <img
                    className="h-6 w-6"
                    src={gear_shift}
                    alt=""
                  />

                  <h4 className="mt-4 font-secondary text-[16px] font-semibold">
                    Doors
                  </h4>

                  <span className="mt-2 block text-[16px] font-normal text-black/60">
                    {car.doors}
                  </span>
                </div>

                {/* Air Conditioner */}
                <div className="rounded-xl bg-[#FAFAFA] p-5 sm:p-6">
                  <img
                    className="h-6 w-6"
                    src={gear_shift}
                    alt=""
                  />

                  <h4 className="mt-4 font-secondary text-[16px] font-semibold">
                    Air Conditioner
                  </h4>

                  <span className="mt-2 block text-[16px] font-normal text-black/60">
                    {car.airConditioner}
                  </span>
                </div>

                {/* Seats */}
                <div className="rounded-xl bg-[#FAFAFA] p-5 sm:p-6">
                  <img
                    className="h-6 w-6"
                    src={gear_shift}
                    alt=""
                  />

                  <h4 className="mt-4 font-secondary text-[16px] font-semibold">
                    Seats
                  </h4>

                  <span className="mt-2 block text-[16px] font-normal text-black/60">
                    {car.seats}
                  </span>
                </div>

                {/* Mileage */}
                <div className="rounded-xl bg-[#FAFAFA] p-5 sm:p-6">
                  <img
                    className="h-6 w-6"
                    src={gear_shift}
                    alt=""
                  />

                  <h4 className="mt-4 font-secondary text-[16px] font-semibold">
                    Mileage
                  </h4>

                  <span className="mt-2 block text-[16px] font-normal text-black/60">
                    {car.distance}
                  </span>
                </div>

              </div>
            </div>

            {/* Rent Button */}
            <div className="mt-8">
              <Link
                to={`/booking/${car.id}`}
                className="flex w-full max-w-[292px] items-center justify-center rounded-xl bg-[#5937E0] px-7 py-3.5 text-[16px] font-semibold text-white"
              >
                Rent a car
              </Link>
            </div>

            {/* Equipment */}
            <div className="mt-10 flex flex-col gap-5">

              <h3 className="font-secondary text-[22px] font-semibold sm:text-[24px]">
                Car Equipment
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <ul className="flex flex-col gap-4 sm:gap-5">
                  {car.equipment?.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="flex shrink-0 items-center justify-center rounded-full bg-[#5937E0] p-1 text-white">
                        <Check size={16} />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-col gap-4 sm:gap-5">
                  {car.equipment?.slice(3, 6).map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="flex shrink-0 items-center justify-center rounded-full bg-[#5937E0] p-1 text-white">
                        <Check size={16} />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </div>

        {/* ================= OTHER CARS ================= */}
        <div className="mt-8 flex flex-col gap-8 px-0 py-10 sm:gap-10 sm:px-4 sm:py-12 lg:py-15">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <h3 className="font-secondary text-[36px] font-bold leading-tight text-black sm:text-[44px] lg:text-[50px]">
              Other cars
            </h3>

            <Link
              to="/vehicles"
              className="flex items-center gap-2 self-start font-secondary text-[18px] font-bold sm:self-auto sm:text-[20px]"
            >
              View All
              <ArrowRight size={24} />
            </Link>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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