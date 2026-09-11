
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
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">

        {/* ================= PAGE HEADER ================= */}
        <div className="flex min-h-52 w-full items-center justify-center sm:min-h-60">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h6 className="font-secondary text-[36px] font-bold sm:text-[44px] lg:text-[50px]">
              About Us
            </h6>

            <p className="text-[16px] font-normal sm:text-[18px] lg:text-[20px]">
              <Link to="/">Home</Link> /{" "}
              <span className="font-medium">About Us</span>
            </p>
          </div>
        </div>

        {/* ================= ABOUT INTRO ================= */}
        <div className="py-10 sm:py-12 lg:py-15">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16 xl:gap-20">

            <div className="text-start text-[36px] font-bold leading-tight sm:text-[44px] lg:w-1/2 lg:text-[50px] lg:leading-[1.2]">
              Where every drive feels extraordinary
            </div>

            <div className="flex w-full max-w-3xl flex-col gap-8 lg:w-1/2 lg:gap-6">

              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-8 text-start sm:grid-cols-2 sm:gap-6">

                <div className="flex flex-col gap-4 sm:gap-5">
                  <h4 className="font-secondary text-[23px] font-semibold sm:text-[26px] lg:text-[28px]">
                    Variety Brands
                  </h4>

                  <p className="w-full text-[15px] font-normal leading-6 sm:text-[16px]">
                    Platea non auctor fermentum sollicitudin. Eget adipiscing
                    augue sit quam natoque ornare cursus viverra odio
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:gap-5">
                  <h4 className="font-secondary text-[23px] font-semibold sm:text-[26px] lg:text-[28px]">
                    Awesome Suport
                  </h4>

                  <p className="w-full text-[15px] font-normal leading-6 sm:text-[16px]">
                    Eget adipiscing augue sit quam natoque ornare cursus viverra
                    odio. Diam quam gravida ultricies velit
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-8 text-start sm:grid-cols-2 sm:gap-6">

                <div className="flex flex-col gap-4 sm:gap-5">
                  <h4 className="font-secondary text-[23px] font-semibold sm:text-[26px] lg:text-[28px]">
                    Maximum Freedom
                  </h4>

                  <p className="w-full text-[15px] font-normal leading-6 sm:text-[16px]">
                    Diam quam gravida ultricies velit duis consequat integer.
                    Est aliquam posuere vel rhoncus massa volutpat in
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:gap-5">
                  <h4 className="font-secondary text-[23px] font-semibold sm:text-[26px] lg:text-[28px]">
                    Flexibility On The Go
                  </h4>

                  <p className="w-full text-[15px] font-normal leading-6 sm:text-[16px]">
                    Vitae pretium nulla sed quam id nisl semper. Vel non in
                    proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean
                    pellentesque nisl
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================= ABOUT IMAGE ================= */}
        <div className="w-full py-8 sm:py-10 lg:py-15">
          <img
            src={aboutImg}
            alt="aboutImg"
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>

        {/* ================= COUNTERS ================= */}
        <div className="grid grid-cols-1 gap-8 px-4 py-10 text-center sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-12 lg:px-12 lg:py-15">

          <div>
            <h4 className="font-secondary text-[52px] font-bold text-[#5937E0] sm:text-[65px] lg:text-[80px]">
              20K+
            </h4>

            <p className="font-secondary text-[17px] font-bold sm:text-[18px] lg:text-[20px]">
              Happy Customers
            </p>
          </div>

          <div>
            <h4 className="font-secondary text-[52px] font-bold text-[#5937E0] sm:text-[65px] lg:text-[80px]">
              540+
            </h4>

            <p className="font-secondary text-[17px] font-bold sm:text-[18px] lg:text-[20px]">
              Count of cars
            </p>
          </div>

          <div>
            <h4 className="font-secondary text-[52px] font-bold text-[#5937E0] sm:text-[65px] lg:text-[80px]">
              25+
            </h4>

            <p className="font-secondary text-[17px] font-bold sm:text-[18px] lg:text-[20px]">
              Years of experience
            </p>
          </div>

        </div>

        {/* ================= INFO BLOCK ================= */}
        <div className="flex flex-col gap-10 py-10 sm:py-12 lg:flex-row lg:items-center lg:gap-14 lg:py-15 xl:gap-20">

          <div className="flex w-full flex-col gap-7 lg:w-1/2 lg:gap-8">

            <h3 className="max-w-2xl text-start text-[36px] font-bold leading-tight sm:text-[44px] lg:text-[50px] lg:leading-[1.2]">
              Unlock unforgettable memories on the road
            </h3>

            <p className="text-start text-[15px] leading-6 sm:text-[16px]">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </p>

            <div className="flex flex-col gap-7 sm:gap-8 lg:gap-10">

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:gap-10">

                <div className="flex gap-2 text-start">
                  <span className="flex h-8 shrink-0 items-center rounded-full bg-[#5937E0] p-1 text-white">
                    <Check size={18} />
                  </span>

                  <p className="text-[15px] leading-6 sm:text-[16px]">
                    Velit semper morbi. Purus non eu cursus porttitor tristique
                    et gravida.
                  </p>
                </div>

                <div className="flex gap-2 text-start">
                  <span className="flex h-8 shrink-0 items-center rounded-full bg-[#5937E0] p-1 text-white">
                    <Check size={18} />
                  </span>

                  <p className="text-[15px] leading-6 sm:text-[16px]">
                    Purus non eu cursus porttitor tristique et gravida. Quis
                    nunc interdum.
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:gap-10">

                <div className="flex gap-2 text-start">
                  <span className="flex h-8 shrink-0 items-center rounded-full bg-[#5937E0] p-1 text-white">
                    <Check size={18} />
                  </span>

                  <p className="text-[15px] leading-6 sm:text-[16px]">
                    Aliquam adipiscing velit semper morbi. Purus non eu cursus
                    porttitor.
                  </p>
                </div>

                <div className="flex gap-2 text-start">
                  <span className="flex h-8 shrink-0 items-center rounded-full bg-[#5937E0] p-1 text-white">
                    <Check size={18} />
                  </span>

                  <p className="text-[15px] leading-6 sm:text-[16px]">
                    Quis nunc interdum gravida ullamcorper
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div className="flex w-full justify-center lg:w-1/2">
            <img
              src={info_about}
              alt="info_about"
              className="h-auto w-full max-w-xl object-contain"
            />
          </div>
        </div>

        {/* ================= MOBILE APP DOWNLOAD ================= */}
        <div className="py-10 sm:py-12 lg:py-15">

          <div className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[24px] bg-[#5937E0] px-6 py-10 sm:min-h-[560px] sm:rounded-[32px] sm:px-10 sm:py-12 lg:min-h-[440px] lg:flex-row lg:items-center lg:px-12 xl:px-20">

            <img
              className="absolute bottom-0 left-1/2 w-[260px] -translate-x-1/2 object-contain sm:w-[320px] lg:left-8 lg:w-[330px] lg:translate-x-0 xl:left-12"
              src={about_phone}
              alt="about-phone"
            />

            <div className="relative z-10 flex w-full flex-col gap-6 text-start sm:gap-8 lg:ml-auto lg:w-1/2">

              <div className="flex flex-col gap-1">
                <span className="font-secondary text-[14px] font-normal text-white sm:text-[16px]">
                  DOWNLOAD OUR APP
                </span>

                <h4 className="font-secondary text-[36px] font-bold leading-tight text-white sm:text-[44px] lg:text-[50px]">
                  Download our app
                </h4>
              </div>

              <p className="text-[15px] font-normal leading-6 text-white sm:text-[16px]">
                Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
                semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in
                vulputate. Nulla nam eget urna fusce vulputate at risus
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-5 lg:gap-6">
                <img
                  src={appstore}
                  alt="appstore"
                  className="h-auto w-[135px] sm:w-[150px]"
                />

                <img
                  src={googleplay}
                  alt="googleplay"
                  className="h-auto w-[135px] sm:w-[150px]"
                />
              </div>

            </div>
          </div>
        </div>

        {/* ================= TESTIMONIALS ================= */}
        <div className="flex flex-col gap-8 py-10 sm:gap-10 sm:py-12 lg:min-h-[700px] lg:py-15">

          <h1 className="font-secondary text-[36px] font-bold leading-tight sm:text-[44px] lg:text-[50px]">
            Reviews from our customers
          </h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* ================= FAQ ================= */}
        <div
          id="faq"
          className="flex flex-col gap-8 py-10 sm:gap-10 sm:py-12 lg:py-15"
        >

          <h1 className="font-secondary text-[36px] font-bold leading-tight sm:text-[44px] lg:text-[50px]">
            Top Car Rental Questions
          </h1>

          <div className="flex w-full flex-col gap-4 px-0 sm:gap-5 sm:px-2 lg:gap-6 lg:px-4">

            {faqData.map((item) => (
              <div
                onClick={() =>
                  setOpen(open === item.id ? null : item.id)
                }
                key={item.id}
                className="flex cursor-pointer flex-col gap-4 rounded-2xl border-2 border-gray-500 p-4 text-start sm:rounded-[20px] sm:p-5"
              >

                <div className="flex items-start justify-between gap-4">

                  <h4 className="font-secondary text-[18px] font-semibold leading-6 sm:text-[21px] lg:text-[24px]">
                    {item.question}
                  </h4>

                  <ChevronDown
                    size={22}
                    className={`mt-1 shrink-0 cursor-pointer transition-transform duration-300 ${
                      open === item.id ? "rotate-180" : ""
                    }`}
                    onClick={() =>
                      setOpen(open === item.id ? null : item.id)
                    }
                  />

                </div>

                {open === item.id && (
                  <p className="text-start text-[15px] font-normal leading-6 sm:text-[17px] lg:text-[20px]">
                    {item.answers}
                  </p>
                )}

              </div>
            ))}

          </div>
        </div>

        {/* ================= BANNER ================= */}
        <div className="py-10 sm:py-12 lg:py-15">

          <div className="relative flex min-h-[500px] flex-col overflow-hidden rounded-[20px] bg-[#5937E0] px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[430px] lg:flex-row lg:px-12 lg:py-14 xl:px-20">

            <div className="relative z-10 flex w-full flex-col items-start gap-8 sm:gap-10 lg:w-3/5">

              <div className="flex max-w-2xl flex-col gap-4 text-start sm:gap-5 lg:gap-6">

                <h4 className="font-bold text-[36px] leading-tight text-white sm:text-[44px] lg:text-[50px]">
                  Looking for a car
                </h4>

                <span className="text-[28px] font-semibold leading-tight text-white sm:text-[34px] lg:text-[40px]">
                  +537 547-6401
                </span>

                <p className="w-full max-w-xl text-[15px] font-normal leading-6 text-white sm:text-[16px]">
                  Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh
                  sapien bibendum ullamcorper in.
                </p>

              </div>

              <Link to="/vehicles">
                <button className="cursor-pointer rounded-xl bg-[#FF9E0C] px-6 py-3.5 text-[15px] font-semibold text-white sm:px-7 sm:text-[16px]">
                  Book now
                </button>
              </Link>

            </div>

            <img
              className="absolute bottom-[-20px] right-[-50px] z-0 w-[420px] scale-105 object-contain opacity-80 blur-[13px] sm:right-[-80px] sm:w-[520px] lg:right-[-40px] lg:top-20 lg:w-[560px]"
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