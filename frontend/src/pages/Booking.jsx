
import { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useParams } from "react-router-dom";

import { cars } from "../assets/cars";

import BookingForm from "../components/BookingForm/BookingForm";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

const Booking = () => {
  const { id } = useParams();

  const car = cars.find(
    (item) => item.id === Number(id)
  );

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
      <div className="flex min-h-screen items-center justify-center px-4">
        <h1 className="text-center text-2xl font-bold">
          Car not found
        </h1>
      </div>
    );
  }

  // =========================
  // Calculate rental days
  // =========================

  const calculateDays = () => {
    if (!formData.pickupDate || !formData.returnDate) {
      return 0;
    }

    const pickup = new Date(formData.pickupDate);
    const returnDate = new Date(formData.returnDate);

    const difference =
      returnDate.getTime() - pickup.getTime();

    return Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );
  };

  const rentalDays = calculateDays();

  const totalAmount =
    rentalDays > 0
      ? rentalDays * Number(car.price)
      : 0;

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