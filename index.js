// Write your solution in this file!
// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer in global scope
function setBestCustomer() {
    bestCustomer = 'not bob';  // Implicit global variable
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone';

// 6. Function to attempt changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another person';  // This will throw an error
}
