// Vowel versus Consonant

// create a code
// accepts a string of lowercase letters as a variable
// output the word and the number of vowels and consonants it has
// "a", "e", "i", "o", and "u" are considered vowels
// Hint: Define two variables that keep track of the number of consonants and vowels.

// const word = "hello";

// const vowels = [a, e, i, o, u];
// const consonants = [];

// for (let i = 0; i < vowels.length; i++) {
//     if (vowels[i] === 0) {
//         consonants.push(vowels[i]);
//     }
// }

// console.log(word + has + consonants and vowels)

// Video Version:

// 0 1 2 3 4
// h e l l o

// consonants = 3
// vowels = 2

// Create a variable that stores input (STEP 1)
// Create two variables that are going to accumulate the total of vowels and consanants for each character (STEP 2)
// "aeiou".inludes("h") --> false (STEP 3/creating an array storing vowels)
// loop over the input string to get every character

// START @ index 0

// STOP index < string length (total characters)

// STEP increment by one

// grab every character
// if vowelsArr has the current character
// increment vowel counter
// otherwise the character is not a vowel
// we want to increment our consanant counter

const str = "ukelele";

let vowelCount = 0;
let consonantCount = 0;

const vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < str.length; i++) {
  const character = str[i];
  if (vowels.includes(character)) {
    vowelCount++;
  } else {
    consonantCount++;
  }
}

console.log(`${str} has ${consonantCount} consonants and ${vowelCount} vowels`);
