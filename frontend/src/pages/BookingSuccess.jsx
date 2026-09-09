import { CheckCircle } from "lucide-react";

import { Link, useSearchParams } from "react-router-dom";

const BookingSuccess = () => {
  const [searchParams] = useSearchParams();

  const bookingId = searchParams.get("bookingId");

  return (
    <div className="min-h-screen bg-[#F7F7FB] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 max-w-xl w-full text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
          <CheckCircle size={42} />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Booking Confirmed!
        </h1>

        <p className="text-gray-500 mt-4">
          Your payment was successful and your car booking has been confirmed.
        </p>

        {bookingId && (
          <div className="mt-6 bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Booking ID</p>

            <p className="text-xl font-bold text-[#5937E0] mt-1">
              #{bookingId}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            to="/vehicles"
            className="flex-1 bg-[#5937E0] text-white py-3.5 rounded-xl font-semibold"
          >
            Browse More Cars
          </Link>

          <Link
            to="/"
            className="flex-1 border border-gray-200 py-3.5 rounded-xl font-semibold text-gray-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
