const coffeeMenu = require("./coffee_data");

// console.log(coffeeMenu);

// 2. Print an array of all the drinks on the menu.
// 3. Print an array of drinks that cost 5 and under.
// 4. Print an array of drinks that are priced at an even number.
// 5. Print the total if you were to order one of every drink.
// 6. Print an array with all the drinks that are seasonal.
// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

// drinks array

// const newArr = [];
// coffeeMenu.forEach((element) => {
//   newArr.push(element.name);
// });
// console.log(newArr);

// //coffeeMenu.map(drinksArr); (ALTERNATE WAY)
// console.log(coffeeMenu.map((elem) => elem.name));

// // price under 5 array

// const newArr2 = [];
// coffeeMenu.forEach((element) => {
//   if (element.name <= 5);
//   console.log(element.name);
// });
// console.log(newArr2);

// // even number array
// function priceEven(drink) {
//   return drink.price % 2 === 0;
// }

const evensArr = coffeeMenu.map((element) => {
  return element.price % 2 === 0;
});

console.log(element.name);

// // One of every drink total array

// // Seasonal drinks array
// function seasonalDrinks(drinks) {
//     const seas {

//     } if(drink.seasonal === true) {

//     } else {

//     }
//     return drink.seasonal;
// }

// // Print seasonal drinks
// function printSeasonal(drinks) {
//     const
// }