window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

// let calculator = document.querySelector('.calc-container');

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


// 
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // Get the inputs from the DOM (in an object)
  getCurrentUIValues()
  }


// Get the current values from the UI
// Update the monthly payment
function update() {
  const data = getCurrentUIValues();
  // console.log('data', data);
  const monthlyRepayments = calculateMonthlyPayment(data);
  // console.log('monthlyRepayments', monthlyRepayments);
  return data;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let n = Math.floor(values.years * 12);
  let p = values.amount
  let i = (values.rate / 100) / 12;
  return (
   (p * i) / (1 - (1 + i) ** -n)
   ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log(calculateMonthlyPayment());
}









function myForEach(arr, callback) {
  for (i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

let colors = ['teal', 'purple'];

// myForEach(colors, function(color){
//   console.log(color.toUpperCase());
// });

function subtract(x,y) {
  return x -y;
}

function doMath(a,b,mathFunc) {
  return mathFunc(a,b);
}

// -accept correct parameters - arr as first argument and then a callback
// -make a new empty arr
// -loop over arr passed in
// - call the callback once per item in arr
// -take the return value, push it onto the arr
// -return new arr at end

function myMap(arr, callback) {
  let mappedArray = [];
  for (i = 0; i < arr.length; i++) {
    const val = callback(arr[i], i, arr);
    mappedArray.push(val);
  }
  return mappedArray;
}

const colorsCaps = myMap(colors, function(color){
  return color.toUpperCase();
})

const repeatedStrings = myMap(['a', 'b', 'c', 'd'], function(str, idx){
  return str.repeat(idx);
})
