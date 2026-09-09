import { useState } from "react";

import {
  ArrowLeft,
  CalendarDays,
  Car,
  CreditCard,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const BookingForm = ({
  car,
  formData,
  setFormData,
  rentalDays,
  totalAmount,
  clientSecret,
  setClientSecret,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // =========================
  // CREATE PAYMENT INTENT
  // =========================

  const createPaymentIntent = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/bookings/create-payment-intent`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          carId: car.id,

          customerName: formData.name,

          customerEmail: formData.email,

          customerPhone: formData.phone,

          pickupDate: formData.pickupDate,

          pickupLocation: formData.pickupLocation,

          returnDate: formData.returnDate,

          returnLocation: formData.returnLocation,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to create payment.");
    }

    return data;
  };

  // =========================
  // CREATE PAYMENT
  // =========================

  const handleContinueToPayment = async () => {
    setError("");

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill all personal information.");
      return;
    }

    if (!formData.pickupDate || !formData.pickupLocation) {
      setError("Please fill pickup details.");
      return;
    }

    if (!formData.returnDate || !formData.returnLocation) {
      setError("Please fill return details.");
      return;
    }

    if (rentalDays <= 0) {
      setError("Return date must be after pickup date.");
      return;
    }

    try {
      setLoading(true);

      const data = await createPaymentIntent();

      console.log("Payment Intent:", data);

      setClientSecret(data.clientSecret);

      setFormData((prev) => ({
        ...prev,
        bookingId: data.bookingId,
      }));
    } catch (error) {
      console.error("Create Payment Intent Error:", error);

      setError(error.message || "Unable to initialize payment.");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // CONFIRM BOOKING
  // =========================

  const confirmBooking = async (bookingId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/bookings/${bookingId}/confirm`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Booking confirmation failed.");
    }

    return data;
  };

  // =========================
  // STRIPE PAYMENT
  // =========================

  const handleStripePayment = async () => {
    setError("");

    if (!stripe || !elements) {
      setError("Payment system is not ready. Please try again.");

      return;
    }

    if (!clientSecret) {
      setError("Please continue to payment first.");

      return;
    }

    try {
      setLoading(true);

      const result = await stripe.confirmPayment({
        elements,

        confirmParams: {
          return_url: `${window.location.origin}/booking-success?bookingId=${formData.bookingId}`,
        },

        redirect: "if_required",
      });

      if (result.error) {
        setError(result.error.message || "Payment failed.");

        return;
      }

      // Payment successful
      await confirmBooking(formData.bookingId);

      navigate(`/booking-success?bookingId=${formData.bookingId}`);
    } catch (error) {
      console.error("Stripe Payment Error:", error);

      setError(error.message || "Payment failed.");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // FORM SUBMIT
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!clientSecret) {
      await handleContinueToPayment();
    } else {
      await handleStripePayment();
    }
  };

  return (
    <section className="w-full bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= BACK ================= */}

        <Link
          to={`/details/${car.id}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#5937E0] transition mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Car Details
        </Link>

        {/* ================= HEADING ================= */}

        <div className="mb-10">
          <p className="text-[#5937E0] font-semibold font-secondary mb-2">
            RESERVATION
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary">
            Book Your Car
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl">
            Complete your details below and reserve your car for your desired
            dates.
          </p>
        </div>

        {/* ================= FORM ================= */}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* ================================================= */}
          {/* CAR SUMMARY */}
          {/* ================================================= */}

          <div className="lg:col-span-1">
            <div className="bg-[#FAFAFA] rounded-2xl p-5 sm:p-6 lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-5">
                <Car size={20} className="text-[#5937E0]" />

                <h2 className="text-xl font-bold font-secondary">
                  Selected Car
                </h2>
              </div>

              <div className="bg-white rounded-xl p-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 sm:h-56 object-contain"
                />
              </div>

              <div className="mt-5">
                <p className="text-sm text-gray-500">{car.type}</p>

                <h2 className="text-2xl font-bold font-secondary mt-1">
                  {car.name}
                </h2>

                <div className="mt-4">
                  <span className="text-3xl font-bold text-[#5937E0]">
                    ${car.price}
                  </span>

                  <span className="text-gray-500">/day</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-5 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Transmission</span>

                  <span className="font-semibold">{car.transmission}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Fuel</span>

                  <span className="font-semibold">{car.fuel}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Seats</span>

                  <span className="font-semibold">{car.seats}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Gearbox</span>

                  <span className="font-semibold">{car.gearbox}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* BOOKING DETAILS */}
          {/* ================================================= */}

          <div className="lg:col-span-2 space-y-7">
            {/* ================= PERSONAL ================= */}

            <div className="border border-gray-200 rounded-2xl p-5 sm:p-7">
              <div className="mb-6">
                <h2 className="text-2xl font-bold font-secondary">
                  Personal Information
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Enter your contact information for the booking.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5937E0]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5937E0]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5937E0]"
                  />
                </div>
              </div>
            </div>

            {/* ================= PICKUP ================= */}

            <div className="border border-gray-200 rounded-2xl p-5 sm:p-7">
              <div className="flex items-start gap-3 mb-6">
                <div className="bg-[#5937E0]/10 p-2.5 rounded-lg">
                  <MapPin size={20} className="text-[#5937E0]" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold font-secondary">
                    Pickup Details
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    Tell us where and when you want to collect the car.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Pickup Date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={19}
                      className="absolute left-4 top-3.5 text-gray-400"
                    />

                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      required
                      className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#5937E0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Pickup Location
                  </label>

                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="Enter pickup location"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5937E0]"
                  />
                </div>
              </div>
            </div>

            {/* ================= RETURN ================= */}

            <div className="border border-gray-200 rounded-2xl p-5 sm:p-7">
              <div className="flex items-start gap-3 mb-6">
                <div className="bg-[#5937E0]/10 p-2.5 rounded-lg">
                  <CalendarDays size={20} className="text-[#5937E0]" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold font-secondary">
                    Return Details
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    Tell us when and where you will return the car.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Return Date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={19}
                      className="absolute left-4 top-3.5 text-gray-400"
                    />

                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      min={
                        formData.pickupDate ||
                        new Date().toISOString().split("T")[0]
                      }
                      required
                      className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#5937E0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Return Location
                  </label>

                  <input
                    type="text"
                    name="returnLocation"
                    value={formData.returnLocation}
                    onChange={handleChange}
                    placeholder="Enter return location"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5937E0]"
                  />
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* STRIPE PAYMENT */}
            {/* ================================================= */}

            <div className="border border-gray-200 rounded-2xl p-5 sm:p-7">
              <div className="flex items-start gap-3 mb-6">
                <div className="bg-[#5937E0]/10 p-2.5 rounded-lg">
                  <CreditCard size={20} className="text-[#5937E0]" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold font-secondary">Payment</h2>

                  <p className="text-gray-500 text-sm mt-1">
                    Pay securely using Stripe.
                  </p>
                </div>
              </div>

              {!clientSecret ? (
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-gray-500 text-sm">
                    Click "Continue to Payment" to enter your card details.
                  </p>
                </div>
              ) : (
                <div className="border border-gray-200 rounded-xl p-5">
                  <PaymentElement />
                </div>
              )}

              <div className="mt-6 bg-gray-50 rounded-xl p-5">
                <div className="flex gap-3">
                  <ShieldCheck size={22} className="text-[#5937E0] shrink-0" />

                  <div>
                    <h3 className="font-semibold">Secure Payment</h3>

                    <p className="text-sm text-gray-500 mt-2 leading-6">
                      Your payment is securely processed by Stripe. We never
                      store your complete card details.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* BOOKING SUMMARY */}
            {/* ================================================= */}

            <div className="border border-gray-200 rounded-2xl p-5 sm:p-7">
              <h2 className="text-2xl font-bold font-secondary mb-6">
                Booking Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Car</span>

                  <span className="font-semibold text-black">{car.name}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Price per day</span>

                  <span className="font-semibold text-black">${car.price}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Rental days</span>

                  <span className="font-semibold text-black">
                    {rentalDays || 0} days
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">Total Amount</span>

                  <span className="text-2xl font-bold text-[#5937E0]">
                    ${totalAmount}
                  </span>
                </div>
              </div>

              {error && <p className="mt-5 text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-7 w-full bg-[#5937E0] hover:bg-[#4828c7] disabled:opacity-50 text-white py-4 rounded-xl font-semibold transition cursor-pointer"
              >
                {loading
                  ? "Processing..."
                  : clientSecret
                    ? "Pay Now"
                    : "Continue to Payment"}
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                By confirming this booking, you agree to our rental terms and
                conditions.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
