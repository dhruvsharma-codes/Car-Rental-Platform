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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div id="vehicles" className="flex flex-col items-center gap-10">
          {/* text */}
          <h2 className="text-center max-w-136.25 font-bold text-[50px] font-secondary">
            Select a vehicle group
          </h2>
          <div className="flex max-w-252 gap-6 items-center justify-center">
            {/* All Vehicles */}
            <button
              onClick={() => handleVehicleChange("All vehicles")}
              className={`px-4 py-2 rounded-[50px] text-[16px] font-medium cursor-pointer ${
                vehicles === "All vehicles"
                  ? "text-white bg-[#5937E0]"
                  : "bg-[#F9F9F9]"
              }`}
            >
              All vehicles
            </button>

            {/* Sedan */}
            <button
              onClick={() => handleVehicleChange("Sedan")}
              className={`flex gap-2 px-4 py-2 text-[16px] font-medium items-center rounded-[50px] cursor-pointer ${
                vehicles === "Sedan"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img className="w-7 h-7" src={sedan} alt="sedan" />
              <span>Sedan</span>
            </button>

            {/* Cabriolet */}
            <button
              onClick={() => handleVehicleChange("Cabriolet")}
              className={`flex gap-2 px-4 py-2 text-[16px] font-medium items-center rounded-[50px] cursor-pointer ${
                vehicles === "Cabriolet"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img src={cabriolet} alt="cabriolet" />
              <span>Cabriolet</span>
            </button>

            {/* Pickup */}
            <button
              onClick={() => handleVehicleChange("Pickup")}
              className={`flex gap-2 px-4 py-2 text-[16px] font-medium items-center rounded-[50px] cursor-pointer ${
                vehicles === "Pickup"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img src={pickup} alt="pickup" />
              <span>Pickup</span>
            </button>

            {/* SUV */}
            <button
              onClick={() => handleVehicleChange("SUV")}
              className={`flex gap-2 px-4 py-2 text-[16px] font-medium items-center rounded-[50px] cursor-pointer ${
                vehicles === "SUV" ? "bg-[#5937E0] text-white" : "bg-[#F9F9F9]"
              }`}
            >
              <img src={suv} alt="suv" />
              <span>SUV</span>
            </button>

            {/* Sport */}
            <button
              onClick={() => handleVehicleChange("Sport")}
              className={`flex gap-2 px-4 py-2 text-[16px] font-medium items-center rounded-[50px] cursor-pointer ${
                vehicles === "Sport"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img src={sedan} alt="suv" />
              <span>Sport</span>
            </button>

            {/* Minivan */}
            <button
              onClick={() => handleVehicleChange("Minivan")}
              className={`flex gap-2 px-4 py-2 text-[16px] font-medium items-center rounded-[50px] cursor-pointer ${
                vehicles === "Minivan"
                  ? "bg-[#5937E0] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <img src={minivan} alt="minivan" />
              <span>Minivan</span>
            </button>
          </div>
          <div className="grid grid-cols-3 w-full gap-6">
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
          {visibleCount < filteredCars.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="bg-[#5937E0] text-white px-8 py-3 rounded-md font-semibold cursor-pointer"
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
