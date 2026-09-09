// const express = require("express");

// const router = express.Router();

// const {
//   createPaymentIntent,
//   confirmBookingPayment,
// } = require("../controllers/bookingController.js");

// // Create booking + Stripe PaymentIntent
// router.post("/create-payment-intent", createPaymentIntent);

// // Verify payment + confirm booking
// router.post("/:id/confirm", confirmBookingPayment);

// module.exports = router;

const express = require("express");

const router = express.Router();

const {
  createPaymentIntent,
  confirmBookingPayment,
} = require("../controllers/bookingController");

/*
|--------------------------------------------------------------------------
| Create PaymentIntent
|--------------------------------------------------------------------------
*/

router.post("/create-payment-intent", createPaymentIntent);

/*
|--------------------------------------------------------------------------
| Confirm Payment
|--------------------------------------------------------------------------
*/

router.post("/:id/confirm", confirmBookingPayment);

module.exports = router;
