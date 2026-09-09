"use strict";

module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "Car",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      transmission: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fuel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doors: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seats: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Cars",
    },
  );
  return Car;
};
