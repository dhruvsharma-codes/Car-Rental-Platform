import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { cars } from "../../assets/cars";
import Card from "../Card/Card";

const visibleCars = cars.slice(0, 6);

const CardSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="max-w-xl font-secondary text-[36px] font-bold leading-tight text-black sm:text-[44px] lg:text-[50px]">
            Choose the car that suits you
          </h3>

          <Link
            to="/vehicles"
            className="flex items-center gap-2 self-start font-secondary text-[18px] font-bold sm:self-auto sm:text-[20px]"
          >
            View All
            <ArrowRight size={24} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {visibleCars.map((item) => (
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
    </section>
  );
};

export default CardSection;
