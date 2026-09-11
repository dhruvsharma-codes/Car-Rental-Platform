// const stripe = require("../config/stripe");

// const { Booking, Car } = require("../models");

// // CREATE PAYMENT INTENT
// const createPaymentIntent = async (req, res) => {
//   try {
//     const {
//       carId,
//       customerName,
//       customerEmail,
//       customerPhone,
//       pickupDate,
//       pickupLocation,
//       returnDate,
//       returnLocation,
//     } = req.body;

//     // validate required fields
//     if (
//       !carId ||
//       !customerName ||
//       !customerEmail ||
//       !customerPhone ||
//       !pickupDate ||
//       !pickupLocation ||
//       !returnDate ||
//       !returnLocation
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "All booking details are required",
//       });
//     }

//     // find car from database
//     const car = await Car.findByPk(carId);

//     if (!car) {
//       return res.status(404).json({
//         success: false,
//         message: "Car not found",
//       });
//     }

//     // calculate rental days
//     const pickup = new Date(pickupDate);
//     const returnDateValue = new Date(returnDate);

//     const difference = returnDateValue.getTime() - pickup.getTime();

//     const rentalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));

//     if (rentalDays <= 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Return date must be after pickup date",
//       });
//     }

//     // get price from database
//     const pricePerDay = Number(car.price);

//     // calculate total
//     const totalAmount = rentalDays * pricePerDay;

//     // convert to stripe amount
//     const stripeAmount = Math.round(totalAmount * 100);

//     // create booking
//     const booking = await Booking.create({
//       carId,

//       customerName,
//       customerEmail,
//       customerPhone,

//       pickupDate,
//       pickupLocation,

//       returnDate,
//       returnLocation,

//       rentalDays,

//       pricePerDay,
//       totalAmount,

//       paymentMethod: "stripe",

//       paymentStatus: "pending",

//       bookingStatus: "pending",
//     });

//     // create stripe payment intent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: stripeAmount,

//       currency: "usd",

//       automatic_payment_methods: {
//         enabled: true,
//       },

//       receipt_email: customerEmail,

//       metadata: {
//         bookingId: String(booking.id),

//         carId: String(car.id),
//       },
//     });

//     // save stripe payment intent id
//     await booking.update({
//       stripePaymentIntentId: paymentIntent.id,
//     });

//     // send client secret
//     return res.status(201).json({
//       success: true,

//       message: "Booking and payment intent created",

//       bookingId: booking.id,

//       clientSecret: paymentIntent.client_secret,

//       amount: totalAmount,
//     });
//   } catch (error) {
//     console.error("Create Payment Intent Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Unable to create payment",
//     });
//   }
// };

// // CONFIRM BOOKING PAYMENT
// const confirmBookingPayment = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // find booking
//     const booking = await Booking.findByPk(id);

//     if (!booking) {
//       return res.status(404).json({
//         success: false,
//         message: "Booking not found",
//       });
//     }

//     //   check payment intent id
//     if (!booking.stripePaymentIntentId) {
//       return res.status(400).json({
//         success: false,
//         message: "Stripe payment intent not found",
//       });
//     }

//     // retrieve paymentintent
//     const paymentIntent = await stripe.paymentIntents.retrieve(
//       booking.stripePaymentIntentId,
//     );

//     // verify payment
//     if (paymentIntent.status !== "succeeded") {
//       return res.status(400).json({
//         success: false,

//         message: "Payment has not been completed",

//         paymentStatus: paymentIntent.status,
//       });
//     }

//     // update booking
//     await booking.update({
//       paymentStatus: "paid",

//       bookingStatus: "confirmed",
//     });

//     // Response
//     return res.status(200).json({
//       success: true,

//       message: "Payment verified and booking confirmed",

//       bookingId: booking.id,

//       paymentStatus: "paid",

//       bookingStatus: "confirmed",
//     });
//   } catch (error) {
//     console.error("Confirm Payment Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Unable to verify payment",
//     });
//   }
// };

// module.exports = {
//   createPaymentIntent,
//   confirmBookingPayment,
// };

const { Booking, Car } = require("../models");

const stripe = require("../config/stripe");
const { sendBookingConfirmationEmail } = require("../services/emailService.js");

/*
|--------------------------------------------------------------------------
| CREATE PAYMENT INTENT
|--------------------------------------------------------------------------
*/

const createPaymentIntent = async (req, res) => {
  try {
    const {
      carId,
      customerName,
      customerEmail,
      customerPhone,
      pickupDate,
      pickupLocation,
      returnDate,
      returnLocation,
    } = req.body;
    // console.log("CAR ID FROM FRONTEND:", carId);

    /*
    |--------------------------------------------------------------------------
    | Validate fields
    |--------------------------------------------------------------------------
    */

    if (
      !carId ||
      !customerName ||
      !customerEmail ||
      !customerPhone ||
      !pickupDate ||
      !pickupLocation ||
      !returnDate ||
      !returnLocation
    ) {
      return res.status(400).json({
        success: false,
        message: "All booking details are required",
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Find car
    |--------------------------------------------------------------------------
    */

    const car = await Car.findByPk(carId);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Calculate rental days
    |--------------------------------------------------------------------------
    */

    const pickup = new Date(pickupDate);

    const returnDateValue = new Date(returnDate);

    const difference = returnDateValue.getTime() - pickup.getTime();

    const rentalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (rentalDays <= 0) {
      return res.status(400).json({
        success: false,
        message: "Return date must be after pickup date",
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Calculate amount from database
    |--------------------------------------------------------------------------
    */

    const pricePerDay = Number(car.price);

    const totalAmount = rentalDays * pricePerDay;

    /*
    |--------------------------------------------------------------------------
    | Stripe uses smallest currency unit
    |
    | $25 = 2500 cents
    |--------------------------------------------------------------------------
    */

    const stripeAmount = Math.round(totalAmount * 100);

    /*
    |--------------------------------------------------------------------------
    | Create booking
    |--------------------------------------------------------------------------
    */

    const booking = await Booking.create({
      carId,

      customerName,
      customerEmail,
      customerPhone,

      pickupDate,
      pickupLocation,

      returnDate,
      returnLocation,

      rentalDays,

      pricePerDay,
      totalAmount,

      paymentMethod: "stripe",

      paymentStatus: "pending",

      bookingStatus: "pending",
    });

    /*
    |--------------------------------------------------------------------------
    | Create Stripe PaymentIntent
    |--------------------------------------------------------------------------
    */

    const paymentIntent = await stripe.paymentIntents.create({
      amount: stripeAmount,

      currency: "usd",

      automatic_payment_methods: {
        enabled: true,
      },

      receipt_email: customerEmail,

      metadata: {
        bookingId: String(booking.id),

        carId: String(carId),
      },
    });

    /*
    |--------------------------------------------------------------------------
    | Save PaymentIntent ID
    |--------------------------------------------------------------------------
    */

    await booking.update({
      stripePaymentIntentId: paymentIntent.id,
    });

    /*
    |--------------------------------------------------------------------------
    | Response
    |--------------------------------------------------------------------------
    */

    return res.status(201).json({
      success: true,

      message: "Payment intent created successfully",

      bookingId: booking.id,

      clientSecret: paymentIntent.client_secret,

      amount: totalAmount,
    });
  } catch (error) {
    console.error("Create Payment Intent Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to create payment",
    });
  }
};

/*
|--------------------------------------------------------------------------
| CONFIRM BOOKING PAYMENT
|--------------------------------------------------------------------------
*/

// const confirmBookingPayment = async (req, res) => {
//   try {
//     const { id } = req.params;
//     /*
//     |--------------------------------------------------------------------------
//     | Find booking
//     |--------------------------------------------------------------------------
//     */

//     const booking = await Booking.findByPk(id);

//     if (!booking) {
//       return res.status(404).json({
//         success: false,
//         message: "Booking not found",
//       });
//     }

//     /*
//     |--------------------------------------------------------------------------
//     | Check PaymentIntent ID
//     |--------------------------------------------------------------------------
//     */

//     if (!booking.stripePaymentIntentId) {
//       return res.status(400).json({
//         success: false,
//         message: "PaymentIntent not found",
//       });
//     }

//     /*
//     |--------------------------------------------------------------------------
//     | Retrieve PaymentIntent from Stripe
//     |--------------------------------------------------------------------------
//     */

//     const paymentIntent = await stripe.paymentIntents.retrieve(
//       booking.stripePaymentIntentId,
//     );

//     /*
//     |--------------------------------------------------------------------------
//     | Verify payment
//     |--------------------------------------------------------------------------
//     */

//     if (paymentIntent.status !== "succeeded") {
//       return res.status(400).json({
//         success: false,

//         message: "Payment has not been completed",

//         paymentStatus: paymentIntent.status,
//       });
//     }

//     /*
//     |--------------------------------------------------------------------------
//     | Update booking
//     |--------------------------------------------------------------------------
//     */

//     await booking.update({
//       paymentStatus: "paid",

//       bookingStatus: "confirmed",
//     });

//     /*
//     |--------------------------------------------------------------------------
//     | Response
//     |--------------------------------------------------------------------------
//     */

//     return res.status(200).json({
//       success: true,

//       message: "Payment successful and booking confirmed",

//       bookingId: booking.id,

//       paymentStatus: "paid",

//       bookingStatus: "confirmed",
//     });
//   } catch (error) {
//     console.error("Confirm Payment Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Unable to confirm payment",
//     });
//   }
// };

const confirmBookingPayment = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: Car,
        },
      ],
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (!booking.stripePaymentIntentId) {
      return res.status(400).json({
        success: false,
        message: "Payment Intent not found",
      });
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(
      booking.stripePaymentIntentId
    );

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({
        success: false,
        message: "Payment has not been completed",
      });
    }

    // Already confirmed?
    if (
      booking.paymentStatus === "paid" &&
      booking.bookingStatus === "confirmed"
    ) {
      return res.status(200).json({
        success: true,
        message: "Booking already confirmed",
        booking,
      });
    }

    // Update booking
    booking.paymentStatus = "paid";
    booking.bookingStatus = "confirmed";

    await booking.save();

    // Send confirmation email
    try {
      await sendBookingConfirmationEmail({
        customerName: booking.customerName,
        customerEmail: booking.customerEmail,
        bookingId: booking.id,

        car: booking.Car,

        pickupDate: booking.pickupDate,
        pickupLocation: booking.pickupLocation,

        returnDate: booking.returnDate,
        returnLocation: booking.returnLocation,

        rentalDays: booking.rentalDays,
        pricePerDay: booking.pricePerDay,
        totalAmount: booking.totalAmount,
      });
    } catch (emailError) {
      console.error(
        "Booking confirmed, but email failed:",
        emailError
      );
    }

    return res.status(200).json({
      success: true,
      message: "Payment successful and booking confirmed",
      booking,
    });

  } catch (error) {
    console.error("Confirm booking error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to confirm booking",
    });
  }
};

module.exports = {
  createPaymentIntent,
  confirmBookingPayment,
};
