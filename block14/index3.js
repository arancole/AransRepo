// // Reverse Array

// // using a for loop
// // input an array with numbers
// // output the same numbers in reverse order
//             0  1  2
const array = [1, 2, 3];

const newArray = [];

// console.log(array[0], array[1], array[2]);

for (let i = array.length - 1; i >= 0; i--) {
  //   console.log("idx", i);
  const valueAtIndex = array[i];
  newArray.push(valueAtIndex);
}

console.log(newArray);

// const array = [1, 2, 3, 4];

// const reversedArray = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   const valueAtIndex = array[i];

//   reversedArray.push(valueAtIndex);
// }

// console.log(reversedArray);
// // [4, 3, 2, 1]

// another way
// var myArray = [1, 2, 3];
// var revMyArr = [].concat(myArray).reverse();
// console.log(revMyArr);
