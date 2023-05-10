// Nested Arrays

// evenAndOdds

// function evenAndOdd(arr) {
//   let evens = [];
//   let odds = [];

//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     if (key % 2 === 1) {
//       odds.push(key);
//     } else {
//       evens.push(key);
//     }
//   }
//   return [evens, odds];
// }

// Array Flattener

// function arrayFlattener(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];

//     if (Array.isArray(el)) {
//       for (let j = 0; j < el.length; j++) {
//         let innerEl = el[j];
//         newArr.push(innerEl);
//       }
//     } else {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// }
