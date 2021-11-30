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

let calculator = document.querySelector('.calc-container');

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
 // Get the inputs from the DOM (in an object)
function setupIntialValues() {
  const values = { amount: 10000, years: 10, rate: 4.5};
  const amountUI = document.querySelector('#loan-amount');
  amountUI.value = values.amount;
  const yearsUI = document.querySelector('#loan-years');
  yearsUI.value = values.years;
  const rateUI = document.querySelector('#loan-rate');
  rateUI.value = values.rate;
  update();
  }


// Get the current values from the UI
// Update the monthly payment
function update() {
  const data = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(data));
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

// // Given a string representing the monthly payment value,
// // update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.querySelector('#monthly-payment');
  monthlyUI.innerText = "$" + monthly;
}