const transporter = require("../config/mail");

const sendBookingConfirmationEmail = async ({
  customerName,
  customerEmail,
  bookingId,
  car,
  pickupDate,
  pickupLocation,
  returnDate,
  returnLocation,
  rentalDays,
  pricePerDay,
  totalAmount,
}) => {
  const mailOptions = {
    from: `"Car Rental" <${process.env.MAIL_USER}>`,
    to: customerEmail,
    subject: `Booking Confirmed #${bookingId} - Car Rental`,

    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
          }

          .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
          }

          .header {
            background: #5937E0;
            color: white;
            padding: 30px;
            text-align: center;
          }

          .header h1 {
            margin: 0;
            font-size: 28px;
          }

          .content {
            padding: 30px;
          }

          .success {
            color: #16a34a;
            font-size: 20px;
            font-weight: bold;
          }

          .booking-box {
            margin-top: 20px;
            padding: 20px;
            background: #f8f8f8;
            border-radius: 10px;
          }

          .row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e5e5e5;
          }

          .row:last-child {
            border-bottom: none;
          }

          .total {
            margin-top: 20px;
            padding: 15px;
            background: #5937E0;
            color: white;
            border-radius: 10px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
          }

          .footer {
            padding: 20px;
            text-align: center;
            color: #777;
            font-size: 13px;
          }
        </style>
      </head>

      <body>

        <div class="container">

          <div class="header">
            <h1>Car Rental</h1>
            <p>Booking Confirmation</p>
          </div>

          <div class="content">

            <p class="success">
              ✓ Payment Successful
            </p>

            <p>
              Hi ${customerName},
            </p>

            <p>
              Your car booking has been successfully confirmed.
              Thank you for choosing Car Rental.
            </p>

            <div class="booking-box">

              <div class="row">
                <strong>Booking ID</strong>
                <span>#${bookingId}</span>
              </div>

              <div class="row">
                <strong>Car</strong>
                <span>${car.name}</span>
              </div>

              <div class="row">
                <strong>Car Type</strong>
                <span>${car.type}</span>
              </div>

              <div class="row">
                <strong>Pickup</strong>
                <span>${pickupLocation}</span>
              </div>

              <div class="row">
                <strong>Pickup Date</strong>
                <span>${new Date(pickupDate).toLocaleDateString()}</span>
              </div>

              <div class="row">
                <strong>Return</strong>
                <span>${returnLocation}</span>
              </div>

              <div class="row">
                <strong>Return Date</strong>
                <span>${new Date(returnDate).toLocaleDateString()}</span>
              </div>

              <div class="row">
                <strong>Rental Days</strong>
                <span>${rentalDays}</span>
              </div>

              <div class="row">
                <strong>Price / Day</strong>
                <span>$${pricePerDay}</span>
              </div>

            </div>

            <div class="total">
              Total Paid: $${totalAmount}
            </div>

            <p style="margin-top: 25px;">
              Please keep this email for your booking records.
            </p>

            <p>
              Thank you,<br />
              <strong>Car Rental Team</strong>
            </p>

          </div>

          <div class="footer">
            © ${new Date().getFullYear()} Car Rental. All rights reserved.
          </div>

        </div>

      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendBookingConfirmationEmail,
};
