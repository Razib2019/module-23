const nayok = {
  name: "Sakib Khan",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friends: ["Apu", "Raaz", "Salman", "Aamir"],
  movies: [
    { name: "no.1", year: 2015 },
    { name: "king Khan", year: 2018 },
  ],
  act: function () {
    console.log("Acting like sakib khan");
  },
  car: {
    brand: "tesla",
    price: 5000000,
    made: 2025,
    manufacturer: {
      name: "tesla",
      ceo: "Elon Mask",
      country: "USA",
    },
  },
};

nayok.act();
// console.log(nayok.act);
