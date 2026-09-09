import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cars } from "../../assets/cars";
import Card from "../Card/Card";

let visibleCars = cars.slice(0,6);

const CardSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* heading */}
        <div className="flex justify-between w-full mb-12">
          <h3 className="w-120 text-[50px] font-bold leading-13 font-secondary text-black">
            Choose the car that suits you
          </h3>
          <Link
            to={"/vehicles"}
            className="flex gap-2 mt-18 text-[20px] font-bold font-secondary"
          >
            View All <ArrowRight width={24} height={24} />
          </Link>
        </div>
        {/* card-grid */}
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-7">
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
