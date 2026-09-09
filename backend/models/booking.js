"use strict";

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerPhone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pickupDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      pickupLocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      returnDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      returnLocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rentalDays: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pricePerDay: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.ENUM("stripe"),
        allowNull: false,
        defaultValue: "stripe",
      },
      paymentStatus: {
        type: DataTypes.ENUM("pending", "paid", "failed", "refunded"),
        allowNull: false,
        defaultValue: "pending",
      },

      bookingStatus: {
        type: DataTypes.ENUM("pending", "confirmed", "cancelled", "completed"),
        allowNull: false,
        defaultValue: "pending",
      },
      stripePaymentIntentId: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
    },
    {
      tableName: "Bookings",
    },
  );
  return Booking;
};
