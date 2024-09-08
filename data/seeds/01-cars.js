// STRETCH
const cars = [
  {
    vin: "1FTPW145X4KA09727",
    make: "Ford",
    model: "F150",
    mileage: 215000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "1FTYR14U2XPC03940",
    make: "Ford",
    model: "Ranger",
    mileage: 115000,
    title: "salvage",
  },
  {
    vin: "3GNFK16318G269795",
    make: "Chevrolet",
    model: "Suburban",
    mileage: 15000,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
