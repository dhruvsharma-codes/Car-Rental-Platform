
import { CheckCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const BookingSuccess = () => {
  const [searchParams] = useSearchParams();

  const bookingId = searchParams.get("bookingId");

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F7F7FB] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="w-full max-w-xl rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm sm:p-8 lg:p-12">

        {/* Success Icon */}
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 sm:mb-6 sm:h-20 sm:w-20">
          <CheckCircle
            size={34}
            className="sm:h-[42px] sm:w-[42px]"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
          Booking Confirmed!
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          Your payment was successful and your car booking has been confirmed.
        </p>

        {/* Booking ID */}
        {bookingId && (
          <div className="mt-5 rounded-xl bg-gray-50 p-4 sm:mt-6 sm:p-5">
            <p className="text-xs text-gray-500 sm:text-sm">
              Booking ID
            </p>

            <p className="mt-1 break-all text-lg font-bold text-[#5937E0] sm:text-xl">
              #{bookingId}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <Link
            to="/vehicles"
            className="flex flex-1 items-center justify-center rounded-xl bg-[#5937E0] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4828c7] sm:text-base"
          >
            Browse More Cars
          </Link>

          <Link
            to="/"
            className="flex flex-1 items-center justify-center rounded-xl border border-gray-200 px-5 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:text-base"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;