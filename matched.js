const numbers = [45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

for (const number of numbers) {
  //   console.log(number);
}

const products = [
  { id: 1, name: "Xiami phone one night", price: 19000 },
  { id: 2, name: "iphone", price: 80000 },
  { id: 3, name: "mac book air", price: 190000 },
  { id: 4, name: "lenovo yoga laptop 2025", price: 39000 },
  { id: 5, name: "Dell inspiron laptop", price: 25000 },
  { id: 6, name: "Samsung phone note 7", price: 45000 },
  { id: 7, name: "Nokia old age phone gone", price: 19000 },
  { id: 8, name: "One Plus phone", price: 65000 },
  { id: 9, name: "M1 chip not cheap LAPtop", price: 210000 },
];

// for (const product of products) {
//   console.log(product);
// }

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, "Laptop");
console.log(result);
