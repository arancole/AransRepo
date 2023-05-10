// Unit test specifications should take the form of:

//     Expect [action] to be [some result]
//     Example: For the prompt "A function called "addition" that returns the sum of two input integers", your tests might include:
//         Expect addition(2, 3) to be a number
//         Expect addition(2, 3) to be equal to 5
//         Expect addition("a", 3) to be an error

// UNIT TESTS:

// 1. A function called "multiplication" that returns the product of the two input numbers.

// Expect multiplication(2, 4) to be a number
// Expect multiplication(2, 4) to be 8
// Expect multiplication(2, "a") to be an error
// Expect multiplication(3, 25) to be 75
// Expect multiplication(-3, 4) to be -12

// 2. A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

// Expect concatOdds([4, 8, 5],[3, 6, 4, 7, 2, 1,]) to result in [1 ,3 ,5 ,7]
// Expect concatOdds(["e", 7, 7], ["t", 1, 4, 3, 9, 0]) to result in [1, 3, 7, 9]
// Expect concatOdds([0, -3, -1, 5], ["i", "r", 4, 3, 1, 3]) to result in [-3, -1, 1, 3, 5]
// Expect concatOdds([-1, -1, -1], ["i", "u", "e", "t"]) to result in [-1]
// Expect concatOdds([9, 7, 5, 3, 1], [0]) to result in [1, 3, 5, 7, 9]

// Functional test specifications can be worded slightly more naturally:

//     When a user [does something with some parameters], [some thing should happen]

// FUNCTIONAL TESTS:

// 1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

// CHECKOUT AS GUEST:
// - when a user clicks proceed to checkout, they should be taken to another screen where two options are available
// - on that screen, the user should see two options, one to sign into their existing account and another to proceed checkout as a guest.
// - when a user clicks, "checkout as a guest", they should be taken to another screen
// - on that screen, the user should be prompted to fill out their address, contact info, and payment information
// - once completed inputing their info., the user should hit the submit button at the bottom of the screen
// - After submitting, the user should be taken to a confirmation screen.

// CHECKOUT WITH ACCOUNT:
// - when a user clicks proceed to chekcout, they should be taken to another screen where two options are available
// - if user has an existing account they want to use, they can immediately input account information and sign in.
// - once user is signed in, they will be shown the items in their cart with their account name in the corner
// - once they proceed to checkout, they will see their address, contact info, and payment info has been saved from previous purchases
// - the user can click the submit button and will be taken to a confirmation screen for their order.

// NO ITEMS IN CART:
// - if the user is in their shopping cart without any items, their will be no options shown to purchase
// - the screen will prompt the user with "no items in cart"
// - the user will not have the option to continue as a guest until their are items in their cart
// - the user will have the option to sign into their existing account in the top right corner before having items in their cart
