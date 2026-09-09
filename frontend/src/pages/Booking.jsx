// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { useParams } from "react-router-dom";
// import { cars } from "../assets/cars";
// import BookingForm from "../components/BookingForm/BookingForm";
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
// const Booking = () => {
//   const { id } = useParams();

//   const car = cars.find((item) => item.id === Number(id));

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     pickupDate: "",
//     pickupLocation: "",
//     returnDate: "",
//     returnLocation: "",
//     // paymentMethod: "",
//   });

//   // const [error, setError] = useState("");

//   if (!car) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-2xl font-bold">Car not found</h1>
//       </div>
//     );
//   }

//   // const handleChange = (e) => {
//   //   setFormData({
//   //     ...formData,
//   //     [e.target.name]: e.target.value,
//   //   });

//   //   setError("");
//   // };

//   const calculateDays = () => {
//     if (!formData.pickupDate || !formData.returnDate) {
//       return 0;
//     }

//     const pickup = new Date(formData.pickupDate);
//     const returnDate = new Date(formData.returnDate);

//     const difference = returnDate - pickup;

//     return Math.ceil(difference / (1000 * 60 * 60 * 24));
//   };

//   const rentalDays = calculateDays();

//   const totalAmount = rentalDays > 0 ? rentalDays * car.price : 0;

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   if (rentalDays <= 0) {
//   //     setError("Return date must be after pickup date.");
//   //     return;
//   //   }

//   //   if (!formData.paymentMethod) {
//   //     setError("Please select a payment method.");
//   //     return;
//   //   }

//   //   const bookingData = {
//   //     carId: car.id,
//   //     carName: car.name,
//   //     pricePerDay: car.price,

//   //     customer: {
//   //       name: formData.name,
//   //       email: formData.email,
//   //       phone: formData.phone,
//   //     },

//   //     pickup: {
//   //       date: formData.pickupDate,
//   //       location: formData.pickupLocation,
//   //     },

//   //     return: {
//   //       date: formData.returnDate,
//   //       location: formData.returnLocation,
//   //     },

//   //     paymentMethod: formData.paymentMethod,

//   //     rentalDays,
//   //     totalAmount,
//   //   };

//   //   console.log("Booking Data:", bookingData);
//   // };

//   return (
//     // <section className="w-full bg-white py-8 sm:py-12">
//     //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     //     {/* Back */}
//     //     <Link
//     //       to={`/details/${car.id}`}
//     //       className="inline-flex items-center gap-2 text-gray-600 hover:text-[#5937E0] transition mb-8 font-medium"
//     //     >
//     //       <ArrowLeft size={20} />
//     //       Back to Car Details
//     //     </Link>

//     //     {/* Heading */}
//     //     <div className="mb-10">
//     //       <p className="text-[#5937E0] font-semibold font-secondary mb-2">
//     //         RESERVATION
//     //       </p>

//     //       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary">
//     //         Book Your Car
//     //       </h1>

//     //       <p className="text-gray-500 mt-3 max-w-2xl">
//     //         Complete your details below and reserve your car for your desired
//     //         dates.
//     //       </p>
//     //     </div>

//     //     <form
//     //       onSubmit={handleSubmit}
//     //       className="grid grid-cols-1 lg:grid-cols-3 gap-8"
//     //     >
//     //       {/* ================= CAR SUMMARY ================= */}

//     //       <div className="lg:col-span-1">
//     //         <div className="bg-[#FAFAFA] rounded-2xl p-5 sm:p-6 lg:sticky lg:top-28">
//     //           <div className="flex items-center gap-2 mb-5">
//     //             <Car size={20} className="text-[#5937E0]" />

//     //             <h2 className="text-xl font-bold font-secondary">
//     //               Selected Car
//     //             </h2>
//     //           </div>

//     //           <div className="bg-white rounded-xl p-4">
//     //             <img
//     //               src={car.image}
//     //               alt={car.name}
//     //               className="w-full h-48 sm:h-56 object-contain"
//     //             />
//     //           </div>

//     //           <div className="mt-5">
//     //             <p className="text-sm text-gray-500">{car.type}</p>

//     //             <h2 className="text-2xl font-bold font-secondary mt-1">
//     //               {car.name}
//     //             </h2>

//     //             <div className="mt-4">
//     //               <span className="text-3xl font-bold text-[#5937E0]">
//     //                 ${car.price}
//     //               </span>

//     //               <span className="text-gray-500">/day</span>
//     //             </div>
//     //           </div>

//     //           <div className="border-t border-gray-200 mt-6 pt-5 space-y-4">
//     //             <div className="flex justify-between">
//     //               <span className="text-gray-500">Transmission</span>

//     //               <span className="font-semibold">{car.transmission}</span>
//     //             </div>

//     //             <div className="flex justify-between">
//     //               <span className="text-gray-500">Fuel</span>

//     //               <span className="font-semibold">{car.fuel}</span>
//     //             </div>

//     //             <div className="flex justify-between">
//     //               <span className="text-gray-500">Seats</span>

//     //               <span className="font-semibold">{car.seats}</span>
//     //             </div>

//     //             <div className="flex justify-between">
//     //               <span className="text-gray-500">Gearbox</span>

//     //               <span className="font-semibold">{car.gearbox}</span>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>

//     //       {/* ================= BOOKING FORM ================= */}

//     //       <div className="lg:col-span-2 space-y-7">
//     //         {/* PERSONAL INFORMATION */}

//     //         <div className="border border-gray-200 rounded-2xl p-5 sm:p-7">
//     //           <div className="mb-6">
//     //             <h2 className="text-2xl font-bold font-secondary">
//     //               Personal Information
//     //             </h2>

//     //             <p className="text-gray-500 text-sm mt-1">
//     //               Enter your contact information for the booking.
//     //             </p>
//     //           </div>

//     //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//     //             <div>
//     //               <label className="block text-sm font-semibold mb-2">
//     //                 Full Name
//     //               </label>

//     //               <input
//     //                 type="text"
//     //                 name="name"
//     //                 value={formData.name}
//     //                 onChange={handleChange}
//     //                 placeholder="Enter your full name"
//     //                 required
//     //                 className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5937E0]"
//     //               />
//     //             </div>

//     //             <div>
//     //               <label className="block text-sm font-semibold mb-2">
//     //                 Email Address
//     //               </label>

//     //               <input
//     //                 type="email"
//     //                 name="email"
//     //                 value={formData.email}
//     //                 onChange={handleChange}
//     //                 placeholder="Enter your email"
//     //                 required
//     //                 className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5937E0]"
//     //               />
//     //             </div>

//     //             <div className="sm:col-span-2">
//     //               <label className="block text-sm font-semibold mb-2">
//     //                 Phone Number
//     //               </label>

//     //               <input
//     //                 type="tel"
//     //                 name="phone"
//     //                 value={formData.phone}
//     //                 onChange={handleChange}
//     //                 placeholder="Enter your phone number"
//     //                 required
//     //                 className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5937E0]"
//     //               />
//     //             </div>
//     //           </div>
//     //         </div>

//     //         {/* PICKUP DETAILS */}

//     //         <div className="border border-gray-200 rounded-2xl p-5 sm:p-7">
//     //           <div className="flex items-start gap-3 mb-6">
//     //             <div className="bg-[#5937E0]/10 p-2.5 rounded-lg">
//     //               <MapPin size={20} className="text-[#5937E0]" />
//     //             </div>

//     //             <div>
//     //               <h2 className="text-2xl font-bold font-secondary">
//     //                 Pickup Details
//     //               </h2>

//     //               <p className="text-gray-500 text-sm mt-1">
//     //                 Tell us where and when you want to collect the car.
//     //               </p>
//     //             </div>
//     //           </div>

//     //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//     //             <div>
//     //               <label className="block text-sm font-semibold mb-2">
//     //                 Pickup Date
//     //               </label>

//     //               <div className="relative">
//     //                 <CalendarDays
//     //                   size={19}
//     //                   className="absolute left-4 top-3.5 text-gray-400"
//     //                 />

//     //                 <input
//     //                   type="date"
//     //                   name="pickupDate"
//     //                   value={formData.pickupDate}
//     //                   onChange={handleChange}
//     //                   min={new Date().toISOString().split("T")[0]}
//     //                   required
//     //                   className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#5937E0]"
//     //                 />
//     //               </div>
//     //             </div>

//     //             <div>
//     //               <label className="block text-sm font-semibold mb-2">
//     //                 Pickup Location
//     //               </label>

//     //               <input
//     //                 type="text"
//     //                 name="pickupLocation"
//     //                 value={formData.pickupLocation}
//     //                 onChange={handleChange}
//     //                 placeholder="Enter pickup location"
//     //                 required
//     //                 className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5937E0]"
//     //               />
//     //             </div>
//     //           </div>
//     //         </div>

//     //         {/* RETURN DETAILS */}

//     //         <div className="border border-gray-200 rounded-2xl p-5 sm:p-7">
//     //           <div className="flex items-start gap-3 mb-6">
//     //             <div className="bg-[#5937E0]/10 p-2.5 rounded-lg">
//     //               <CalendarDays size={20} className="text-[#5937E0]" />
//     //             </div>

//     //             <div>
//     //               <h2 className="text-2xl font-bold font-secondary">
//     //                 Return Details
//     //               </h2>

//     //               <p className="text-gray-500 text-sm mt-1">
//     //                 Tell us when and where you will return the car.
//     //               </p>
//     //             </div>
//     //           </div>

//     //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//     //             <div>
//     //               <label className="block text-sm font-semibold mb-2">
//     //                 Return Date
//     //               </label>

//     //               <div className="relative">
//     //                 <CalendarDays
//     //                   size={19}
//     //                   className="absolute left-4 top-3.5 text-gray-400"
//     //                 />

//     //                 <input
//     //                   type="date"
//     //                   name="returnDate"
//     //                   value={formData.returnDate}
//     //                   onChange={handleChange}
//     //                   min={
//     //                     formData.pickupDate ||
//     //                     new Date().toISOString().split("T")[0]
//     //                   }
//     //                   required
//     //                   className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#5937E0]"
//     //                 />
//     //               </div>
//     //             </div>

//     //             <div>
//     //               <label className="block text-sm font-semibold mb-2">
//     //                 Return Location
//     //               </label>

//     //               <input
//     //                 type="text"
//     //                 name="returnLocation"
//     //                 value={formData.returnLocation}
//     //                 onChange={handleChange}
//     //                 placeholder="Enter return location"
//     //                 required
//     //                 className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5937E0]"
//     //               />
//     //             </div>
//     //           </div>
//     //         </div>

//     //         {/* PAYMENT */}

//     //         <div className="border border-gray-200 rounded-2xl p-5 sm:p-7">
//     //           <div className="flex items-start gap-3 mb-6">
//     //             <div className="bg-[#5937E0]/10 p-2.5 rounded-lg">
//     //               <CreditCard size={20} className="text-[#5937E0]" />
//     //             </div>

//     //             <div>
//     //               <h2 className="text-2xl font-bold font-secondary">
//     //                 Payment Options
//     //               </h2>

//     //               <p className="text-gray-500 text-sm mt-1">
//     //                 Choose your preferred payment method.
//     //               </p>
//     //             </div>
//     //           </div>

//     //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//     //             {/* CARD */}

//     //             <label
//     //               className={`cursor-pointer border rounded-xl p-4 transition ${
//     //                 formData.paymentMethod === "card"
//     //                   ? "border-[#5937E0] bg-[#5937E0]/5"
//     //                   : "border-gray-200"
//     //               }`}
//     //             >
//     //               <input
//     //                 type="radio"
//     //                 name="paymentMethod"
//     //                 value="card"
//     //                 checked={formData.paymentMethod === "Stripe"}
//     //                 onChange={handleChange}
//     //                 className="sr-only"
//     //               />

//     //               <CreditCard size={22} className="text-[#5937E0]" />

//     //               <h3 className="font-semibold mt-3">Stripe</h3>

//     //               <p className="text-xs text-gray-500 mt-1">
//     //                 Stripe
//     //               </p>
//     //             </label>

//     //             {/* UPI */}

//     //             <label
//     //               className={`cursor-pointer border rounded-xl p-4 transition ${
//     //                 formData.paymentMethod === "upi"
//     //                   ? "border-[#5937E0] bg-[#5937E0]/5"
//     //                   : "border-gray-200"
//     //               }`}
//     //             >
//     //               <input
//     //                 type="radio"
//     //                 name="paymentMethod"
//     //                 value="upi"
//     //                 checked={formData.paymentMethod === "upi"}
//     //                 onChange={handleChange}
//     //                 className="sr-only"
//     //               />

//     //               <div className="text-[#5937E0] text-xl font-bold">UPI</div>

//     //               <h3 className="font-semibold mt-2">UPI</h3>

//     //               <p className="text-xs text-gray-500 mt-1">Pay using UPI</p>
//     //             </label>

//     //             {/* CASH */}

//     //             <label
//     //               className={`cursor-pointer border rounded-xl p-4 transition ${
//     //                 formData.paymentMethod === "cash"
//     //                   ? "border-[#5937E0] bg-[#5937E0]/5"
//     //                   : "border-gray-200"
//     //               }`}
//     //             >
//     //               <input
//     //                 type="radio"
//     //                 name="paymentMethod"
//     //                 value="cash"
//     //                 checked={formData.paymentMethod === "cash"}
//     //                 onChange={handleChange}
//     //                 className="sr-only"
//     //               />

//     //               <div className="text-[#5937E0] text-xl">₹</div>

//     //               <h3 className="font-semibold mt-2">Cash</h3>

//     //               <p className="text-xs text-gray-500 mt-1">Pay at pickup</p>
//     //             </label>
//     //           </div>

//     //           {/* PAYMENT INFO */}

//     //           <div className="mt-6 bg-gray-50 rounded-xl p-5">
//     //             <div className="flex gap-3">
//     //               <ShieldCheck size={22} className="text-[#5937E0] shrink-0" />

//     //               <div>
//     //                 <h3 className="font-semibold">About Payment</h3>

//     //                 <p className="text-sm text-gray-500 mt-2 leading-6">
//     //                   Your booking details are securely processed. For online
//     //                   payments, you will be redirected to a secure payment
//     //                   gateway. We never store your complete card or payment
//     //                   credentials.
//     //                 </p>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>

//     //         {/* BOOKING SUMMARY */}

//     //         <div className="border border-gray-200 rounded-2xl p-5 sm:p-7">
//     //           <h2 className="text-2xl font-bold font-secondary mb-6">
//     //             Booking Summary
//     //           </h2>

//     //           <div className="space-y-4">
//     //             <div className="flex justify-between text-gray-600">
//     //               <span>Car</span>

//     //               <span className="font-semibold text-black">{car.name}</span>
//     //             </div>

//     //             <div className="flex justify-between text-gray-600">
//     //               <span>Price per day</span>

//     //               <span className="font-semibold text-black">${car.price}</span>
//     //             </div>

//     //             <div className="flex justify-between text-gray-600">
//     //               <span>Rental days</span>

//     //               <span className="font-semibold text-black">
//     //                 {rentalDays || 0} days
//     //               </span>
//     //             </div>

//     //             <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
//     //               <span className="text-lg font-bold">Total Amount</span>

//     //               <span className="text-2xl font-bold text-[#5937E0]">
//     //                 ${totalAmount}
//     //               </span>
//     //             </div>
//     //           </div>

//     //           {error && <p className="mt-5 text-red-500 text-sm">{error}</p>}

//     //           <button
//     //             type="submit"
//     //             className="mt-7 w-full bg-[#5937E0] hover:bg-[#4828c7] text-white py-4 rounded-xl font-semibold transition cursor-pointer"
//     //           >
//     //             Confirm Booking
//     //           </button>

//     //           <p className="text-center text-xs text-gray-400 mt-4">
//     //             By confirming this booking, you agree to our rental terms and
//     //             conditions.
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </form>
//     //   </div>
//     // </section>
//     <Elements stripe={stripePromise}>
//       <BookingForm
//         car={car}
//         formData={formData}
//         setFormData={setFormData}
//         rentalDays={rentalDays}
//         totalAmount={totalAmount}
//       />
//     </Elements>
//   );
// };

// export default Booking;

// import { useState } from "react";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import { useParams } from "react-router-dom";

// import { cars } from "../assets/cars";

// import BookingForm from "../components/BookingForm/BookingForm";

// const stripePromise = loadStripe(
//   import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
// );

// const Booking = () => {
//   const { id } = useParams();

//   const car = cars.find(
//     (item) => item.id === Number(id)
//   );

//   const [clientSecret, setClientSecret] =
//     useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     pickupDate: "",
//     pickupLocation: "",
//     returnDate: "",
//     returnLocation: "",
//     paymentMethod: "stripe",
//     bookingId: null,
//   });

//   if (!car) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-2xl font-bold">
//           Car not found
//         </h1>
//       </div>
//     );
//   }

//   const calculateDays = () => {
//     if (
//       !formData.pickupDate ||
//       !formData.returnDate
//     ) {
//       return 0;
//     }

//     const pickup = new Date(
//       formData.pickupDate
//     );

//     const returnDate = new Date(
//       formData.returnDate
//     );

//     const difference =
//       returnDate.getTime() -
//       pickup.getTime();

//     return Math.ceil(
//       difference /
//         (1000 * 60 * 60 * 24)
//     );
//   };

//   const rentalDays = calculateDays();

//   const totalAmount =
//     rentalDays > 0
//       ? rentalDays * Number(car.price)
//       : 0;

//   return (
//     <Elements
//       stripe={stripePromise}
//       options={
//         clientSecret
//           ? {
//               clientSecret,
//             }
//           : undefined
//       }
//     >
//       <BookingForm
//         car={car}
//         formData={formData}
//         setFormData={setFormData}
//         rentalDays={rentalDays}
//         totalAmount={totalAmount}
//         clientSecret={clientSecret}
//         setClientSecret={setClientSecret}
//       />
//     </Elements>
//   );
// };

// export default Booking;

import { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";

import { useParams } from "react-router-dom";

import { cars } from "../assets/cars";

import BookingForm from "../components/BookingForm/BookingForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Booking = () => {
  const { id } = useParams();

  const car = cars.find((item) => item.id === Number(id));

  const [clientSecret, setClientSecret] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    pickupDate: "",
    pickupLocation: "",

    returnDate: "",
    returnLocation: "",

    bookingId: null,
  });

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Car not found</h1>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Calculate rental days
  |--------------------------------------------------------------------------
  */

  const calculateDays = () => {
    if (!formData.pickupDate || !formData.returnDate) {
      return 0;
    }

    const pickup = new Date(formData.pickupDate);

    const returnDate = new Date(formData.returnDate);

    const difference = returnDate.getTime() - pickup.getTime();

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  const rentalDays = calculateDays();

  const totalAmount = rentalDays > 0 ? rentalDays * Number(car.price) : 0;

  return (
    <Elements
      key={clientSecret || "stripe-empty"}
      stripe={stripePromise}
      options={
        clientSecret
          ? {
              clientSecret,
            }
          : undefined
      }
    >
      <BookingForm
        car={car}
        formData={formData}
        setFormData={setFormData}
        rentalDays={rentalDays}
        totalAmount={totalAmount}
        clientSecret={clientSecret}
        setClientSecret={setClientSecret}
      />
    </Elements>
  );
};

export default Booking;
