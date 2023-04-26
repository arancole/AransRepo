// only odds

// assign input value
// Create a code that inputs a value of numbers
// and returns the odd numbers only, from the original input of numbers
// if only one odd number in the original input, return that single value

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 1) {
    odd.push(array[i]);
  }
}

console.log(odd);
