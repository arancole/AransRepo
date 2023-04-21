// Is Truthy

// pseudocode:

// if the input value is truthy, 
    // console.log true
// else if the value is false, 
    // console.log "The boolean value false is falsy";
// else if the value is null,
    //  console.log "The null value is falsy"
// else if the value is undefined,
    //  console.log "undefined is falsy"
// else if the value is 0,
    //  console.log "The number 0 is falsy (the only falsy number)"
// else if the value is "",
    //  console.log "The empty string is falsy (the only falsy string)"
    
// if ("I am a string") {
//     console.log(true);
// } else {
//     console.log("The boolean value false is falsy");
// }

// if (false) {
//     console.log("I am a string");
// } else {
//     console.log("The boolean value false is falsy");
// }

// if (null) {
//     console.log("I am a string");
// } else {
//     console.log("The null value is falsy");
// }

// if (undefined) {
//     console.log("I am a string");
// } else {
//     console.log("undefined is falsy");
// }

// if (0) {
//     console.log("I am a string");
// } else {
//     console.log("The number 0 is falsy (the only falsy number)");
// }

// if ("") {
//     console.log("I am a string");
// } else {
//     console.log("The empty string is falsy (the only falsy string)");
// }


// Other Way:

// const input = null;

// if (input) {
//     console.log(true);
// } else 
//     if (input === false); {
//         console.log("The boolean value false is falsy");
// } else {
//     if (input === null); {
//         console.log("The null value is falsy");
// }
    
//     } else if (input === undefined);{
//         console.log("undefined is falsy");
//     } else if (input === 0);{
//         console.log("The number 0 is falsy (the only falsy number)");
//     } else if (input === "");{
//         console.log("The empty string is falsy (the only falsy string)")
//     }
// }

let input = false; 

if (input) {
  console.log(true);
} else if (input === false) {
  console.log("The boolean value false is falsy");
} else if (input === null) {
  console.log("The null value is falsy");
} else if (input === undefined) {
  console.log("undefined is falsy");
} else if (input === 0) {
  console.log("The number 0 is falsy (the only falsy number)");
} else if (input === "") {
  console.log("The empty string is falsy (the only falsy string)")
}
