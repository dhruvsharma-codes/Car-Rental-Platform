import toyoto from "../../assets/toyota.png";
import ford from "../../assets/ford.png";
import texas from "../../assets/texas.png";
import jeep from "../../assets/jeep.png";
import bmw from "../../assets/bmw.png";
import audi from "../../assets/audi.png";
const Logos = () => {
  return (
    <section className="w-full min-h-73.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
        <div className=" bg-[#FAFAFA] px-10 flex justify-between py-15 rounded-[40px]">
          <img src={toyoto} alt="toyoto" />
          <img src={ford} alt="ford" />
          <img src={texas} alt="texas" />
          <img src={jeep} alt="jeep" />
          <img src={bmw} alt="bmw" />
          <img src={audi} alt="audi" />
        </div>
      </div>
    </section>
  );
};

export default Logos;
