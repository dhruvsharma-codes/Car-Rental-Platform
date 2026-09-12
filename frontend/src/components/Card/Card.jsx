
import gear_shift from "../../assets/gear-shift.png";
import g17 from "../../assets/g17.png";
import g1593 from "../../assets/g1593.png";

import { Link } from "react-router-dom";

const Card = ({
  id,
  image,
  name,
  price,
  type,
  transmission,
  seats,
  feature,
}) => {
  return (
    <Link
      to={`/details/${id}`}
      className="block rounded-[20px] bg-[#FAFAFA] p-4 shadow-md transition-transform duration-500 hover:scale-[1.02] sm:p-5 lg:p-6"
    >
      <div>

        {/* Car Image */}
        <img
          className="h-auto max-h-50 w-full object-contain sm:h-50"
          src={image}
          alt={name}
        />

        <div className="mt-4 flex flex-col gap-5">

          {/* Name + Price */}
          <div className="flex items-start justify-between gap-4">

            <div className="min-w-0">
              <h3 className="font-secondary text-[20px] font-semibold leading-tight text-black sm:text-[22px] lg:text-[24px]">
                {name}
              </h3>

              <span className="mt-1 block text-[14px] font-normal sm:text-[16px]">
                {type}
              </span>
            </div>

            <div className="shrink-0 text-right">
              <h4 className="font-secondary text-[20px] font-semibold text-[#5937E0] sm:text-[22px] lg:text-[24px]">
                ${price}
              </h4>

              <span className="text-[12px] font-normal sm:text-[14px]">
                per day
              </span>
            </div>

          </div>

          {/* Car Features */}
          <div className="grid grid-cols-3 gap-2">

            {/* Transmission */}
            <div className="flex min-w-0 items-center gap-1">
              <img
                className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                src={gear_shift}
                alt="gear-shift"
              />

              <span className="truncate text-[13px] font-normal sm:text-[14px] lg:text-[16px]">
                {transmission}
              </span>
            </div>

            {/* Seats */}
            <div className="flex min-w-0 items-center gap-1">
              <img
                className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                src={g17}
                alt="seats"
              />

              <span className="truncate text-[13px] font-normal sm:text-[14px] lg:text-[16px]">
                {seats}
              </span>
            </div>

            {/* Feature */}
            <div className="flex min-w-0 items-center gap-1">
              <img
                className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                src={g1593}
                alt="feature"
              />

              <span className="truncate text-[13px] font-normal sm:text-[14px] lg:text-[16px]">
                {feature}
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* View Details */}
      <button
        type="button"
        className="mt-6 w-full cursor-pointer rounded-xl bg-[#5937E0] px-5 py-3 text-[15px] font-semibold text-white sm:px-7 sm:py-3.5 sm:text-[16px]"
      >
        View Details
      </button>
    </Link>
  );
};

export default Card;