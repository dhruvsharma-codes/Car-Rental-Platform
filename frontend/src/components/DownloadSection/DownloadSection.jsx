import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/googleplay.png";
import mobile from "../../assets/mobile.png";

const DownloadSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-14">
          {/* Left */}
          <div className="flex w-full max-w-134 flex-col gap-8 text-center lg:text-left">
            <h2 className="max-w-78 mx-auto font-secondary text-[36px] font-bold leading-tight text-black sm:text-[44px] lg:mx-0 lg:text-[50px]">
              Download mobile app
            </h2>

            <p className="max-w-130 font-secondary text-[15px] font-normal leading-6 text-black sm:text-[16px]">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor
              cursus turpis nibh placerat massa. Fermentum urna ut at et in.
              Turpis aliquet cras hendrerit enim condimentum. Condimentum
              interdum risus bibendum urna
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:justify-start">
              <img
                className="h-12 w-auto"
                src={appStore}
                alt="Download on the App Store"
              />

              <img
                className="h-12 w-auto"
                src={googlePlay}
                alt="Get it on Google Play"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex w-full justify-center lg:w-auto">
            <img
              src={mobile}
              alt="Mobile app"
              className="h-auto w-60 sm:w-70 lg:w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
