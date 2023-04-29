// Pseudocode:
// DONE Step 1: Create a file named index.js
// DONE Step 2: Declare an object named CUSTOMER with the the information provided in the table
// DONE Step 3: Modify the properties (change information) using bracket notation
// DONE Step 4: Remove following properties from object using delete keyword
// DONE Step 5: Add following properties to object using dot notation
// DONE Step 6: Print the key values into an array

const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = "coffee, strawberry, matcha";

delete customer["zipCode"];
delete customer["favoriteStore"];

customer.toppings = "chocolate sprinkles, wafer straws, gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

const survey = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "favoriteFlavors",
  "cupSize",
  "firstVisit",
  "toppings",
  "futureFlavors",
  "todaysPurchaseCost",
];

console.table(customer);
