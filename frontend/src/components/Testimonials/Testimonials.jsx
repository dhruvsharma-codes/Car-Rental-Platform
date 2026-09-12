const Testimonials = ({ id, name, image, description, profile, company }) => {
  return (
    <div className="relative w-full">
      {/* Review */}
      <div className="relative flex min-h-75 items-center rounded-t-[20px] bg-[#F9F9F9] px-5 py-10 sm:min-h-80 sm:px-6">
        <img
          className="absolute left-6 top-6 h-auto w-10 sm:left-8 sm:top-8 sm:w-12"
          src={image}
          alt={id}
        />

        <p className="w-full max-w-85 text-[17px] font-medium leading-7 sm:text-[18px] lg:text-[20px]">
          {description}
        </p>
      </div>

      {/* Profile */}
      <div className="relative rounded-b-[20px] bg-[#5937E0] px-5 pb-6 pt-14 sm:px-6">
        <img
          className="absolute left-6 -top-7.5 h-16 w-16 rounded-full object-cover sm:left-8"
          src={profile}
          alt="testimonial profile"
        />

        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] font-normal text-white/60 sm:text-[16px]">
            {company}
          </h3>

          <h4 className="font-secondary text-[18px] font-semibold text-white sm:text-[20px]">
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
