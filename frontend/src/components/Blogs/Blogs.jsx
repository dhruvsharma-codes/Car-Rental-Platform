const Blogs = ({ id, image, title, category, date }) => {
  return (
    <div className="flex flex-col gap-5 text-start" key={id}>
      <img src={image} alt={id} />
      <div className="flex flex-col gap-3">
        <h3 className="text-[20px] font-semibold">{title}</h3>
        <span className="font-normal text-[16px] text-black/60">
          {category}/{date}
        </span>
      </div>
    </div>
  );
};

export default Blogs;
