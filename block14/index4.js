// FizzBuzz

// Create a code
// takes a certain value from 1 to 100
// output each value on a new line
// each multiple of 3, print "Fizz" instead of the number
// each multiple of 5, print "Buzz" instead of the number
// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number

// Value % 3 = "Fizz"
// Value % 5 = "Buzz"
// Value % 3 and % 5 = "FizzBuzz"

// example inputs= 1, 2, 3, 4, 5,
// example outputs= 1, 2, Fizz, 4, Buzz ...
// starting at 1 to 100
// index       0 to 99

const num = 1;
// const newNum = [];

for (i = 1; i <= 100; i++) {
  const index = i;
  if (index % 3 === 0) {
    console.log("Fizz");
  } else if (index % 5 === 0) {
    console.log("Buzz");
  } else if (index % 3 && index % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(`${index}`);
  }
}

// for ( let i = ) {
//     const output =
//     if (num % 3) {
//         console.log("Fizz")
//     } else {
//         console.log(num)
//     }
// }

// Start @ index 0 < 99
// Stop @ index 99(number 100)
// if takes input and divides by 3
// print :Fizz"
// otherwise
// print the number
// if takes input and divides by 5
// print "Buzz"
// otherwise
// print the number
// if divisible by 3 and 5
// print "FizzBuzz"
// otherwise print number
