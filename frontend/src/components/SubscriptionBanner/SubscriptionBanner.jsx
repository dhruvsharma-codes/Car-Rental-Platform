import subscriptionCar from "../../assets/subCar.png"
const SubscriptionBanner = () => {
  return (
    <section className="w-full bg-white  py-15">
      <div className="min-h-103 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-[20px] py-14 bg-[#5937E0]">
<div className="flex gap-24">
    <div className="max-w-189 px-12">
<h4 className="text-[50px] mb-10 text-white max-w-152 font-bold font-secondary leading-15">Enjoy every mile with adorable companionship.</h4>
<div className="max-w-137 flex flex-col gap-9">
    <p className="text-white/90">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat</p>
    <div className="max-w-116 justify-center text-[16px] font-semibold items-center flex py-2 bg-white px-4 rounded-[20px]">
    <input className=" outline-none w-full " placeholder="City" type="text" />
    <button className="px-10 bg-[#FF9E0C] rounded-xl text-white py-3">Search</button>
    </div>
</div>
    </div>
    <img className="w-92" src={subscriptionCar} alt="subscriptioncar" />
</div>
      </div>
    </section>
  )
}

export default SubscriptionBanner
