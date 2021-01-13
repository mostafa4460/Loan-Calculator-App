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

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const loan = document.querySelector('#loan-amount');
  loan.value = 1000;
  const years = document.querySelector('#loan-years');
  years.value = 1
  const rate = document.querySelector('#loan-rate');
  rate.value = 0.2

  update();
}

function update() {
  const values = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = (values.rate / 12);
  const n = (values.years * 12);
  const monthlyPayment = (((p * i)/(1 - (1 + i)**-n) * 100) / 100).toFixed(2);
  return monthlyPayment.toString();
}

function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = monthly;
}