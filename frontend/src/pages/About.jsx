import { Check, ChevronDown } from "lucide-react";
import aboutImg from "../assets/aboutImg.png";
import info_about from "../assets/info-about.png";
import about_phone from "../assets/about-phone.png";
import appstore from "../assets/appstote-white.png";
import googleplay from "../assets/googleplay-white.png";
import comma from "../assets/comma.png";
import testimonialCard1 from "../assets/testimonialCard1.png";
import Testimonials from "../components/Testimonials/Testimonials";
import { useEffect, useState } from "react";
import car from "../assets/herocar.png";
import { Link } from "react-router-dom";
const About = () => {
  const testimonialData = [
    {
      id: 1,
      description:
        "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
      image: comma,
      profile: testimonialCard1,
      company: "Kuphal LLC",
      name: "Emanuel Boyle",
    },
    {
      id: 2,
      description:
        "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula",
      image: comma,
      profile: testimonialCard1,
      company: "Glover - Orn",
      name: "River Graves",
    },
    {
      id: 3,
      description:
        "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et",
      image: comma,
      profile: testimonialCard1,
      company: "Haag LLC",
      name: "Ryder Malone",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "How does it works?",
      answers:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla",
    },
    {
      id: 2,
      question: "Can I rent a car without a credit card?",
      answers:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla",
    },
    {
      id: 3,
      question: "What are the requirements for renting a car?",
      answers:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla",
    },
    {
      id: 4,
      question:
        "Does car Rental allow e to tow with or attach a hitch to the rental vehicles?",
      answers:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla",
    },
    {
      id: 5,
      question:
        "Does Car Rental offer coverage products for purchase with my rental?",
      answers:
        "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla",
    },
  ];
  useEffect(() => {
    if (window.location.hash === "#faq") {
      document.getElementById("faq")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  const [open, setOpen] = useState(null);
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center w-full items-center min-h-60 ">
          {/* about text */}
          <div className="flex flex-col gap-4">
            <h6 className="text-[50px] font-bold font-secondary">About Us</h6>
            <p className="text-[20px] font-normal">
              <Link to={"/"}>Home</Link> /{" "}
              <span className="font-medium">About Us</span>
            </p>
          </div>
        </div>
        {/* div about */}
        <div className="py-15">
          <div className="flex gap-20 ">
            <div className="text-[50px] font-bold text-start leading-16">
              Where every drive feels extraordinary
            </div>
            <div className="flex flex-col gap-6 max-w-214">
              <div className="flex gap-6 text-start">
                <div className="flex flex-col gap-5">
                  <h4 className="text-[28px] font-semibold font-secondary">
                    Variety Brands
                  </h4>
                  <p className="text-[16px] font-normal w-95">
                    Platea non auctor fermentum sollicitudin. Eget adipiscing
                    augue sit quam natoque ornare cursus viverra odio
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <h4 className="text-[28px] font-semibold font-secondary">
                    Awesome Suport
                  </h4>
                  <p className="text-[16px] font-normal w-95">
                    Eget adipiscing augue sit quam natoque ornare cursus viverra
                    odio. Diam quam gravida ultricies velit
                  </p>
                </div>
              </div>
              <div className="flex gap-6 text-start">
                <div className="flex flex-col gap-5">
                  <h4 className="text-[28px] font-semibold font-secondary">
                    Maximum Freedom
                  </h4>
                  <p className="text-[16px] font-normal w-95">
                    Diam quam gravida ultricies velit duis consequat integer.
                    Est aliquam posuere vel rhoncus massa volutpat in
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <h4 className="text-[28px] font-semibold font-secondary">
                    Flexibility On The Go
                  </h4>
                  <p className="text-[16px] font-normal w-95">
                    Vitae pretium nulla sed quam id nisl semper. Vel non in
                    proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean
                    pellentesque nisl
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* image about */}
        <div className="min-h-165 pt-15">
          <img src={aboutImg} alt="aboutImg" />
        </div>
        {/* counter */}
        <div className="flex flex-wrap px-22 py-15 justify-between">
          <div className="text-start">
            <h4 className="text-[#5937E0] text-[80px] font-bold font-secondary">
              20K+
            </h4>
            <p className="text-[20px] font-bold font-secondary">
              Happy Customers
            </p>
          </div>
          <div className="text-start">
            <h4 className="text-[#5937E0] text-[80px] font-bold font-secondary">
              540+
            </h4>
            <p className="text-[20px] font-bold font-secondary">
              Count of cars
            </p>
          </div>
          <div className="text-start">
            <h4 className="text-[#5937E0] text-[80px] font-bold font-secondary">
              25+
            </h4>
            <p className="text-[20px] font-bold font-secondary">
              Years of experience
            </p>
          </div>
        </div>
        {/* info-block */}
        <div className="py-15 min-h-167 flex items-center gap-21 justify-center">
          <div className="flex flex-col gap-8">
            <h3 className="max-w-160 text-start text-[50px] leading-15 font-bold font-secondary">
              Unlock unforgettable memories on the road
            </h3>
            <p className="text-start">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </p>
            <div className="flex flex-col gap-10">
              <div className="flex gap-10">
                <div className="flex gap-2 text-start w-75">
                  <span className="bg-[#5937E0] h-8 text-white rounded-full p-1 leading-1">
                    <Check />
                  </span>
                  <p>
                    Velit semper morbi. Purus non eu cursus porttitor tristique
                    et gravida.
                  </p>
                </div>
                <div className="flex gap-2 text-start w-75">
                  <span className="bg-[#5937E0] h-8 text-white rounded-full p-1 leading-1">
                    <Check />
                  </span>
                  <p>
                    Purus non eu cursus porttitor tristique et gravida. Quis
                    nunc interdum.
                  </p>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex gap-2 text-start w-75">
                  <span className="bg-[#5937E0] h-8 text-white rounded-full p-1 leading-1">
                    <Check />
                  </span>
                  <p>
                    Aliquam adipiscing velit semper morbi. Purus non eu cursus
                    porttitor.
                  </p>
                </div>
                <div className="flex gap-2 text-start w-75">
                  <span className="bg-[#5937E0] h-8 text-white rounded-full p-1 leading-1">
                    <Check />
                  </span>
                  <p>Quis nunc interdum gravida ullamcorper</p>
                </div>
              </div>
            </div>
          </div>
          <img src={info_about} alt="info_about" />
        </div>

        {/* mobile-downlaod */}
        <div className="min-h-176 pt-50 pb-15">
          <div className=" relative min-h-111 px-32 py-15 bg-[#5937E0] rounded-[40px] flex">
            <img
              className="absolute bottom-20 "
              src={about_phone}
              alt="about-phone"
            />
            <div className="flex gap-8 flex-col max-w-150 ml-90 text-start">
              <div className="flex flex-col gap-1">
                <span className="text-[16px] font-normal font-secondary text-white">
                  DOWNLOAD OUR APP
                </span>
                <h4 className="text-[50px] font-bold font-secondary text-white">
                  Download our app
                </h4>
              </div>
              <p className="text-[16px] font-normal leading-6 text-white">
                Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
                semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in
                vulputate. Nulla nam eget urna fusce vulputate at risus
              </p>
              <div className="flex gap-6 justify-start">
                <img src={appstore} alt="appstore" />
                <img src={googleplay} alt="googleplay" />
              </div>
            </div>
          </div>
        </div>

        {/* testimonials */}
        <div className="py-15 min-h-175 flex flex-col gap-10">
          <h1 className="text-[50px] font-bold font-secondary">
            Reviews from our customers
          </h1>
          <div className="grid grid-cols-3 gap-6">
            {testimonialData.map((item) => (
              <Testimonials
                key={item.id}
                name={item.name}
                image={item.image}
                company={item.company}
                profile={item.profile}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* faq */}
        <div id="faq" className=" py-15 flex flex-col gap-10">
          <h1 className="text-[50px] font-bold font-secondary">
            Top Car Rental Questions
          </h1>
          <div className="flex flex-col w-full gap-6 px-4">
            {faqData.map((item) => (
              <div
                onClick={() => setOpen(open === item.id ? null : item.id)}
                key={item.id}
                className="cursor-pointer rounded-[20px] border-2 p-5 flex flex-col gap-4 border-gray-500"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-[24px] font-semibold font-secondary">
                    {item.question}
                  </h4>
                  <ChevronDown
                    className={`cursor-pointer transition-transform duration-300 ${
                      open === item.id ? "rotate-180" : ""
                    }`}
                    onClick={() => setOpen(open === item.id ? null : item.id)}
                  />
                </div>
                {open === item.id && (
                  <p className="text-start font-normal text-[20px]">
                    {item.answers}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* banner */}
        <div className="py-15">
          <div className="relative min-h-107 py-14 px-21 bg-[#5937E0] rounded-[20px] flex gap-25">
            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col gap-6 text-start max-w-146">
                <h4 className="font-bold text-[50px] text-white">
                  Looking for a car
                </h4>
                <span className="text-[40px] font-semibold leading-6 text-white">
                  +537 547-6401
                </span>
                <p className="text-[16px] font-normal leading-6 text-white w-130">
                  Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh
                  sapien bibendum ullamcorper in.
                </p>
              </div>
              <Link to={"/vehicles"}>
                <button className="bg-[#FF9E0C] cursor-pointer max-w-33 text-[16px] font-semibold text-white px-7 py-3.5 rounded-xl">
                  Book now
                </button>
              </Link>
            </div>
            <img
              className="absolute right-0 top-25 z-0 blur-[13px] opacity-80 scale-105 "
              src={car}
              alt="car"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
