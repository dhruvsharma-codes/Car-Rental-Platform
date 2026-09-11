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
      className="p-6 shadow-md hover:scale-105 transition-transform duration-500 bg-[#FAFAFA] rounded-[20px]"
    >
      <div>
        <img className="h-50 object-cover w-full" src={image} alt={id} />
        <div className="mt-4 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[24px] font-semibold font-secondary text-black mb-0">
                {name}
              </h3>
              <span className="text-[16px] font-normal mt-2">{type}</span>
            </div>
            <div>
              <h4 className="text-end text-[24px] text-[#5937E0] font-semibold">
                ${price}
              </h4>
              <span className="text-[14px] font-normal">per day</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img
                className="inline"
                src={gear_shift}
                alt="gear-shift"
                width={24}
              />
              <span className="text-[16px] font-normal ml-1">
                {transmission}
              </span>
            </div>
            <div>
              <img className="inline" src={g17} alt="g17" width={24} />
              <span className="text-[16px] font-normal ml-1">{seats}</span>
            </div>
            <div>
              <img className="inline" src={g1593} alt="g1593" width={24} />
              <span className="text-[16px] font-normal ml-1">{feature}</span>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#5937E0] cursor-pointer mt-6 w-full px-7 py-3.5 rounded-xl text-white font-semibold text-[16px]">
        View Details
      </button>
    </Link>
  );
};

export default Card;
