
const Blogs = ({ id, image, title, category, date }) => {
  return (
    <div
      className="flex w-full flex-col gap-4 text-start sm:gap-5"
      key={id}
    >
      <img
        src={image}
        alt={id}
        className="h-auto w-full rounded-xl object-cover"
      />

      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="text-[18px] font-semibold leading-6 sm:text-[20px]">
          {title}
        </h3>

        <span className="text-[14px] font-normal text-black/60 sm:text-[16px]">
          {category}/{date}
        </span>
      </div>
    </div>
  );
};

export default Blogs;