// Pseudocode:

// Two different types of discounts for customers
// customers with Subscription discount and customers with coupons

// Declare logic for checkout system
// return the total cost of all refills

// if the customer has a subscription
// 25% discounted after total price of refill
// if the customer has a coupon
// 10$ off after subscription discount has been calculated

// 1. input the customers order and find the total cost
// 2. find out if the customer has a subscription
// if they do subtract 25% off the total cost
// otherwise, move on to coupons
// if they have a coupon subtract 10$ from their total
// otherwise return their grand total

// return and log the string "Your grand total is ${finalAmount}."

// objects (each customers order)

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

const array = [timmy, sarah, rocky];

const customer = array[1];

// console.log(array[0]);

function totalCost(obj) {
  return obj.pricePerRefill * obj.refills;
}

const totalCostWoDisc = totalCost(customer);

function totalCostSub(obj) {
  return totalCostWoDisc * 0.25;
}

const subDisc = totalCostSub(customer);

// const subscription = [true];
// const coupon = [true];

if (customer.subscription === true) {
  console.log(totalCostWoDisc - subDisc);
} else if (customer.coupon === true) {
  console.log(totalCostWoDisc - 10);
} else {
  console.log(totalCostWoDisc);
}

// function totalCostWithDiscounts(obj) {
//   return obj.pricePerRefill * obj.refills;
// }

// const totalCost = totalCostWithDiscounts(rocky);

// function totalCostWithDiscounts(rocky.pricePerRefill, rocky.refills) {
//     return rocky.pricePerRefill + rocky.refills;
// }

// console.log(Object.values(timmy));

// console.log(timmy["pricePerRefill"]);
// console.log(timmy["refills"]);

// function totalCost(pricePerRefill, refills) {
//   return pricePerRefill + refills;
// }
