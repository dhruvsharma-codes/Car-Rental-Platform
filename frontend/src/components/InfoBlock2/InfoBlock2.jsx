import info_img from "../../assets/info.png";
const InfoBlock2 = () => {
  const steps = [
    {
      id: 1,
      title: "Erat at semper",
      description:
        "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum",
    },
    {
      id: 2,
      title: "Urna nec vivamus risus duis arcu",
      description:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
    },
    {
      id: 3,
      title: "Lobortis euismod imperdiet tempus",
      description:
        "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
    },
    {
      id: 4,
      title: "Cras nulla aliquet nam eleifend amet et",
      description:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero",
    },
  ];
  return (
    <section className=" w-full">
      <div className=" max-w-7xl mx-auto  px-4 sm:px-6 lg:px-6 flex   items-center gap-27.5 min-h-157 ">
        {/* left image */}
        <img src={info_img} alt="info-image" className=" h-130 ml-20" />

        {/* right list */}
        <div className="flex flex-col gap-7">
          {steps.map((step) => (
            <div key={step.id} className="max-w-120">
              <div className="flex gap-2.5 items-center">
                <span className="bg-[#5937E0] leading-8 h-8 w-8 text-center text-[16px] font-semibold text-white rounded-full">
                  {step.id}
                </span>
                <h3 className="text-black text-[20px] font-secondary font-semibold">
                  {step.title}
                </h3>
              </div>
              <p className="text-[16px] font-normal mt-3 w-132">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBlock2;
