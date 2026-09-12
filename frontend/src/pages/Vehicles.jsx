
import sedan from "../assets/011-sedan.png";
import cabriolet from "../assets/039-cabriolet.png";
import pickup from "../assets/002-pickup.png";
import suv from "../assets/012-suv.png";
import minivan from "../assets/034-minivan.png";

import Card from "../components/Card/Card";
import { cars } from "../assets/cars";
import Logos from "../components/Logos/Logos";

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Vehicles = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const typeFromUrl = searchParams.get("type");
  // const [vehicles, setVehicles] = useState(typeFromUrl || "All vehicles");

  const vehicles = searchParams.get("type") || "All vehicles";

  useEffect(() => {
    if (searchParams.get("type")) {
      document.getElementById("vehicles")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [searchParams]);

  const handleVehicleChange = (type) => {
    if (type === "All vehicles") {
      setSearchParams({});
    } else {
      setSearchParams({ type });
    }
  };

  const getFilterCars = () => {
    switch (vehicles) {
      case "Sedan":
        return cars.filter((car) => car.type === "Sedan");

      case "Cabriolet":
        return cars.filter((car) => car.type === "Cabriolet");

      case "Pickup":
        return cars.filter((car) => car.type === "Pickup");

      case "SUV":
        return cars.filter((car) => car.type === "SUV");

      case "Minivan":
        return cars.filter((car) => car.type === "Minivan");

      case "Sport":
        return cars.filter((car) => car.type === "Sport");

      case "All vehicles":
      default:
        return cars;
    }
  };

  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCars = getFilterCars();

  const visibleCars = filteredCars.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

        <div
          id="vehicles"
          className="flex flex-col items-center gap-8 sm:gap-10"
        >

          {/* Heading */}
          <h2 className="max-w-136.25 text-center font-secondary text-[36px] font-bold leading-tight sm:text-[44px] lg:text-[50px]">
            Select a vehicle group
          </h2>

          {/* Vehicle Filters */}
          <div className="flex w-full max-w-250 flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">

            {/* All Vehicles */}
            <button
              onClick={() => handleVehicleChange("All vehicles")}
              className={`cursor-pointer rounded-[50px] px-4 py-2 text-[14px] font-medium sm:text-[16px] ${
                vehicles === "All vehicles"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              All vehicles
            </button>

            {/* Sedan */}
            <button
              onClick={() => handleVehicleChange("Sedan")}
              className={`flex cursor-pointer items-center gap-2 rounded-[50px] px-4 py-2 text-[14px] font-medium sm:text-[16px] ${
                vehicles === "Sedan"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img
                className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                src={sedan}
                alt="sedan"
              />

              <span>Sedan</span>
            </button>

            {/* Cabriolet */}
            <button
              onClick={() => handleVehicleChange("Cabriolet")}
              className={`flex cursor-pointer items-center gap-2 rounded-[50px] px-4 py-2 text-[14px] font-medium sm:text-[16px] ${
                vehicles === "Cabriolet"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img
                className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                src={cabriolet}
                alt="cabriolet"
              />

              <span>Cabriolet</span>
            </button>

            {/* Pickup */}
            <button
              onClick={() => handleVehicleChange("Pickup")}
              className={`flex cursor-pointer items-center gap-2 rounded-[50px] px-4 py-2 text-[14px] font-medium sm:text-[16px] ${
                vehicles === "Pickup"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img
                className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                src={pickup}
                alt="pickup"
              />

              <span>Pickup</span>
            </button>

            {/* SUV */}
            <button
              onClick={() => handleVehicleChange("SUV")}
              className={`flex cursor-pointer items-center gap-2 rounded-[50px] px-4 py-2 text-[14px] font-medium sm:text-[16px] ${
                vehicles === "SUV"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img
                className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                src={suv}
                alt="suv"
              />

              <span>SUV</span>
            </button>

            {/* Sport */}
            <button
              onClick={() => handleVehicleChange("Sport")}
              className={`flex cursor-pointer items-center gap-2 rounded-[50px] px-4 py-2 text-[14px] font-medium sm:text-[16px] ${
                vehicles === "Sport"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img
                className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                src={sedan}
                alt="sport"
              />

              <span>Sport</span>
            </button>

            {/* Minivan */}
            <button
              onClick={() => handleVehicleChange("Minivan")}
              className={`flex cursor-pointer items-center gap-2 rounded-[50px] px-4 py-2 text-[14px] font-medium sm:text-[16px] ${
                vehicles === "Minivan"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img
                className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                src={minivan}
                alt="minivan"
              />

              <span>Minivan</span>
            </button>
          </div>

          {/* Cars */}
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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

          {/* Load More */}
          {visibleCount < filteredCars.length && (
            <div className="mt-4 flex justify-center sm:mt-6">
              <button
                onClick={handleLoadMore}
                className="cursor-pointer rounded-md bg-[#5937E0] px-7 py-3 text-[15px] font-semibold text-white sm:px-8 sm:text-[16px]"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        <Logos />
      </div>
    </section>
  );
};

export default Vehicles;