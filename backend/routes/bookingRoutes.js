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
