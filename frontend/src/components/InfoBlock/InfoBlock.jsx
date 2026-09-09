import { MapPin, Wallet, CarIcon } from "lucide-react";
const InfoBlock = () => {
  const info = [
    {
      id: 1,
      icon: <MapPin width={50} height={50} color="black" />,
      title: "Availability",
      description:
        "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
    },
    {
      id: 2,
      icon: <CarIcon width={60} height={60} color="black" />,
      title: "Comfort",
      description:
        "Gravida auctor fermentum morbi vulputate ac egestas orci etiam convallis",
    },
    {
      id: 3,
      icon: <Wallet width={50} height={50} color="black" />,
      title: "Savings",
      description:
        "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between py-13">
        {info.map((details) => (
          <div key={details.id}>
            <div className="flex flex-col gap-3 justify-center items-center">
              {details.icon}
              <h3 className="text-2xl font-secondary font-semibold text-black">
                {details.title}
              </h3>
            </div>
            <p className="mt-5 max-w-80 text-center text-[16px] font-normal leading-6 text-black">
              {details.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoBlock;
