🚗 Car Rental Platform
A modern full-stack car rental website built with React, Tailwind CSS, Node.js, Express, Sequelize, MySQL, and Stripe.
The platform allows users to browse rental cars, view detailed vehicle information, make bookings, and securely complete payments through Stripe.

✨ Features
🚘 Browse available rental cars
🔎 Filter cars by vehicle type
📄 Dynamic car details
📅 Pickup and return date selection
📍 Pickup and return location
🧮 Automatic rental-day calculation
💰 Automatic total price calculation
💳 Stripe PaymentIntent integration
🔐 Secure payment using Stripe PaymentElement
🧾 Booking summary
✅ Booking confirmation
📱 Responsive design for desktop, tablet, and mobile
🔗 Dynamic routing with React Router
🗄️ MySQL database with Sequelize

🛠️ Tech Stack
Frontend
React
Vite
Tailwind CSS
React Router DOM
Lucide React
Stripe.js
React Stripe.js

Backend
Node.js
Express.js
Sequelize
MySQL
Stripe
Helmet
CORS
dotenv

📁 Project Structure
car-rental-platform/
│
├── frontend/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ └── ...
│ ├── .env
│ └── package.json
│
├── backend/
│ ├── config/
│ │ ├── config.json
│ │ └── stripe.js
│ ├── controllers/
│ │ └── bookingController.js
│ ├── models/
│ │ ├── index.js
│ │ ├── Car.js
│ │ └── Booking.js
│ ├── routes/
│ │ └── bookingRoutes.js
│ ├── .env
│ ├── app.js
│ └── seedCars.js
│
└── README.md

💳 Payment Flow
The application uses Stripe PaymentIntents for processing payments.

Car Details
↓
Booking Page
↓
Create Booking
↓
Create Stripe PaymentIntent
↓
Payment Page
↓
Enter Card Details
↓
Stripe PaymentElement
↓
Confirm Payment
↓
Backend Verifies PaymentIntent
↓
Booking Confirmed
↓
Booking Success

🔗 Frontend Routes

| Route                | Description          |
| -------------------- | -------------------- |
| `/`                  | Home page            |
| `/vehicles`          | All vehicles         |
| `/vehicles?type=SUV` | Filter vehicles      |
| `/details/:id`       | Car details          |
| `/booking/:id`       | Booking page         |
| `/payment/:id`       | Stripe payment page  |
| `/booking-success`   | Booking confirmation |

🔮 Future Improvements
User authentication
Protected routes
User booking history
Admin dashboard
Car availability management
Booking cancellation
Stripe webhooks
Email booking confirmation
Cloudinary image uploads
Advanced search and filtering
Production deployment
