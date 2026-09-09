"use strict";

require("dotenv").config();

const { sequelize, Car } = require("./models");

const cars = [
  {
    id: 1,
    name: "Mercedes",
    type: "Sedan",
    price: 25,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 2,
    name: "Mercedes",
    type: "Sport",
    price: 50,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 3,
    name: "Mercedes",
    type: "Sedan",
    price: 45,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 4,
    name: "Porsche",
    type: "SUV",
    price: 40,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 5,
    name: "Toyota",
    type: "Sedan",
    price: 35,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 6,
    name: "Porsche",
    type: "SUV",
    price: 50,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 7,
    name: "Mercedes",
    type: "Van",
    price: 50,
    transmission: "Automatic",
    fuel: "Diesel",
    doors: "5 Doors",
    seats: "7 Seats",
  },
  {
    id: 8,
    name: "Toyota",
    type: "Sport",
    price: 60,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 9,
    name: "Maybach",
    type: "Sedan",
    price: 70,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 10,
    name: "Porsche",
    type: "SUV",
    price: 50,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 11,
    name: "Toyota",
    type: "Sport",
    price: 60,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 12,
    name: "Maybach",
    type: "Sedan",
    price: 70,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 13,
    name: "BMW",
    type: "Cabriolet",
    price: 45,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "2 Doors",
    seats: "4 Seats",
  },
  {
    id: 14,
    name: "Mercedes",
    type: "Cabriolet",
    price: 55,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "2 Doors",
    seats: "4 Seats",
  },
  {
    id: 15,
    name: "Ford Ranger",
    type: "Pickup",
    price: 60,
    transmission: "Automatic",
    fuel: "Diesel",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 16,
    name: "Toyota Hilux",
    type: "Pickup",
    price: 65,
    transmission: "Manual",
    fuel: "Diesel",
    doors: "4 Doors",
    seats: "5 Seats",
  },
  {
    id: 17,
    name: "Toyota Sienna",
    type: "Minivan",
    price: 50,
    transmission: "Automatic",
    fuel: "Petrol",
    doors: "5 Doors",
    seats: "7 Seats",
  },
  {
    id: 18,
    name: "Kia Carnival",
    type: "Minivan",
    price: 55,
    transmission: "Automatic",
    fuel: "Diesel",
    doors: "5 Doors",
    seats: "8 Seats",
  },
];

const seedCars = async () => {
  try {
    await sequelize.authenticate();

    console.log("Database connected.");

    await sequelize.sync({ alter: true });

    // await Car.destroy({
    //   where: {},
    //   truncate: true,
    // });

    await Car.bulkCreate(cars);

    console.log(`${cars.length} cars added successfully.`);

    await sequelize.close();
  } catch (error) {
    console.error("Seeding failed:", error);
    await sequelize.close();
    process.exit(1);
  }
};

seedCars();
