import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/googleplay.png";
import mobile from "../../assets/mobile.png";

const DownloadSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-157">
        <div className="px-14 py-12 flex gap-27 items-center">
          {/* left */}
          <div className="flex flex-col gap-10 max-w-134">
            <div className="text-[50px] font-bold font-secondary max-w-78 leading-16">
              Download mobile app
            </div>
            <p className="max-w-130 font-normal text-[16px] font-secondary">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor
              cursus turpis nibh placerat massa. Fermentum urna ut at et in.
              Turpis aliquet cras hendrerit enim condimentum. Condimentum
              interdum risus bibendum urna
            </p>
            <div className="max-w-96 flex gap-10">
              <img className="w-43 h-12" src={appStore} alt={appStore} />
              <img className="w-43 h-12" src={googlePlay} alt={googlePlay} />
            </div>
          </div>
          {/* right */}
          <div className="w-100 h-150">
            <img src={mobile} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
