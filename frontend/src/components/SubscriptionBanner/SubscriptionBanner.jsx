import subscriptionCar from "../../assets/subCar.png";

const SubscriptionBanner = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-15 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl rounded-[20px] bg-[#5937E0] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left Content */}
          <div className="w-full max-w-175 text-center lg:text-left">
            <h4 className="mx-auto mb-8 max-w-155 font-secondary text-[34px] font-bold leading-tight text-white sm:text-[42px] lg:mx-0 lg:text-[50px]">
              Enjoy every mile with adorable companionship.
            </h4>

            <div className="mx-auto flex w-full max-w-138 flex-col gap-7 lg:mx-0">
              <p className="text-[15px] leading-6 text-white/90 sm:text-[16px]">
                Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
                bibendum ullamcorper in. Diam tincidunt tincidunt erat
              </p>

              {/* Search */}
              <div className="flex w-full items-center gap-2 rounded-[20px] bg-white p-2">
                <input
                  className="min-w-0 flex-1 bg-transparent px-3 text-[16px] outline-none"
                  placeholder="City"
                  type="text"
                />

                <button className="shrink-0 rounded-xl bg-[#FF9E0C] px-6 py-3 text-[15px] font-semibold text-white sm:px-8 sm:text-[16px]">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Car Image */}
          <div className="flex w-full justify-center lg:w-auto">
            <img
              className="h-auto w-60 sm:w-75 lg:w-92"
              src={subscriptionCar}
              alt="Subscription car"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
