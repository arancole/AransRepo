const coffeeMenu = require("./coffee_data");

// 1. Clean the coffee_data.js file. DONE
// 2. Print an array of all the drinks on the menu. DONE
// 3. Print an array of drinks that cost 5 and under. DONE
// 4. Print an array of drinks that are priced at an even number. DONE
// 5. Print the total if you were to order one of every drink.
// 6. Print an array with all the drinks that are seasonal. DONE
// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans". DONE

// DRINKS ARRAY
// 2. Print an array of all the drinks on the menu. DONE

// const newArr = [];
// coffeeMenu.forEach((element) => {
//   newArr.push(element.name);
// });
// console.log(newArr);

// //coffeeMenu.map(drinksArr); (ALTERNATE WAY)
// console.log(coffeeMenu.map((elem) => elem.name));

// PRICE UNDER 5 ARRRAY
// 3. Print an array of drinks that cost 5 and under. DONE

// const newArr2 = [];
// coffeeMenu.forEach((element) => {
//   if (element.price <= 5) {
//     newArr2.push(element.name);
//   }
// });
// console.log(newArr2);

// EVEN NUMBER ARRAY
// 4. Print an array of drinks that are priced at an even number. DONE

// const newArr3 = [];
// coffeeMenu.forEach((element) => {
//   if (element.price % 2 === 0) {
//     newArr3.push(element.name);
//   }
// });
// console.log(newArr3);

// (MY FIRST TRY)
// const evensArr = coffeeMenu.map((element) => {
//   return element.price % 2 === 0;
// });

// console.log(evensArr);

// ONE OF EVERY DRINK TOTAL
// 5. Print the total if you were to order one of every drink.

// const sum = coffeeMenu.reduce((accumulator, object) => {
//   return accumulator + object.price;
// }, 0);

// console.log(sum);

// SEASONAL DRINKS ARRAY
// 6. Print an array with all the drinks that are seasonal. DONE

// const newArr5 = [];
// coffeeMenu.forEach((element) => {
//   if (element.seasonal === true) {
//     newArr5.push(element.name);
//   }
// });
// console.log(newArr5);

// PRINT SEASONAL DRINKS
// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

// const newArr6 = [];
coffeeMenu.forEach((element) => {
  if (element.seasonal === true) {
    console.log(element.name + " with imported beans");
  }
});
// console.log(newArr6);
