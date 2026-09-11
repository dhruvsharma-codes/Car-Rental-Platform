
import toyoto from "../../assets/toyota.png";
import ford from "../../assets/ford.png";
import texas from "../../assets/texas.png";
import jeep from "../../assets/jeep.png";
import bmw from "../../assets/bmw.png";
import audi from "../../assets/audi.png";

const Logos = () => {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-15">

        <div className="grid grid-cols-2 items-center justify-items-center gap-8 rounded-[30px] bg-[#FAFAFA] px-5 py-10 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:gap-6 lg:rounded-[40px] lg:px-10 lg:py-15">

          <img
            className="max-h-10 w-auto object-contain sm:max-h-12"
            src={toyoto}
            alt="Toyota"
          />

          <img
            className="max-h-10 w-auto object-contain sm:max-h-12"
            src={ford}
            alt="Ford"
          />

          <img
            className="max-h-10 w-auto object-contain sm:max-h-12"
            src={texas}
            alt="Texas"
          />

          <img
            className="max-h-10 w-auto object-contain sm:max-h-12"
            src={jeep}
            alt="Jeep"
          />

          <img
            className="max-h-10 w-auto object-contain sm:max-h-12"
            src={bmw}
            alt="BMW"
          />

          <img
            className="max-h-10 w-auto object-contain sm:max-h-12"
            src={audi}
            alt="Audi"
          />

        </div>
      </div>
    </section>
  );
};

export default Logos;