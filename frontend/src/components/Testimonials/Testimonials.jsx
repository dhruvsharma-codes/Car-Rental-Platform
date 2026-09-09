
const Testimonials = ({id,name,image,description,profile,company}) => {
  return (
    <div className="relative">
  <div className="bg-[#F9F9F9] min-h-86 px-5 py-3 rounded-[20px] flex justify-center items-center">
    <img className="absolute top-8 left-13" src={image} alt={id}  />
    <p className="max-w-86 text-[20px] font-medium">{description}</p>
  </div>
  <div className="bg-[#5937E0] py-6 rounded-b-[20px]">
    <img className="absolute bottom-23 left-40" src={profile} alt="testimonialCard1" />
    <div className="mt-8">
    <h3 className="text-[16px] font-normal text-[#FFFFFF] opacity-60">{company}</h3>
    <h4 className="text-[20px] font-semibold font-secondary text-[#FFFFFF]">{name}</h4>
    </div>
  </div>
</div>
  )
}

export default Testimonials
