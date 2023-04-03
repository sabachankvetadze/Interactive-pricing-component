const views = document.querySelector(".pageviews");
const switchOn = document.querySelector(".slider");
const payment = document.querySelector(".pay");
const turnOn = document.querySelector(".switch");
let checkbox = document.querySelector(".check");
const monthly = document.querySelector(".month");


switchOn.addEventListener("input", function () {
  if (switchOn.value == 1 && !checkbox.checked) {
    payment.textContent = "$8.00";
    views.textContent = "10K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 2 && !checkbox.checked) {
    payment.textContent = "$12.00";
    views.textContent = "50K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 3 && !checkbox.checked) {
    payment.textContent = "$16.00";
    views.textContent = "100K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 4 && !checkbox.checked) {
    payment.textContent = "$24.00";
    views.textContent = "500K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 5 && !checkbox.checked) {
    payment.textContent = "$36.00";
    views.textContent = "1M PAGEVIEWS";
    monthly.textContent = "/ month";
  }

  if (switchOn.value == 1 && checkbox.checked) {
    payment.textContent = "$72.00";
    views.textContent = "10K PAGEVIEWS";
    monthly.textContent = "/ year";
  }
  if (switchOn.value == 2 && checkbox.checked) {
    payment.textContent = "$108.00";
    views.textContent = "50K PAGEVIEWS";
    monthly.textContent = "/ year";
  }
  if (switchOn.value == 3 && checkbox.checked) {
    payment.textContent = "$144.00";
    views.textContent = "100K PAGEVIEWS";
    monthly.textContent = "/ year";
  }
  if (switchOn.value == 4 && checkbox.checked) {
    payment.textContent = "$160.00";
    views.textContent = "500K PAGEVIEWS";
    monthly.textContent = "/ year";
  }
  if (switchOn.value == 5 && checkbox.checked) {
    payment.textContent = "$192.00";
    views.textContent = "1M PAGEVIEWS";
    monthly.textContent = "/ year";
  }
});

checkbox.addEventListener("input", function () {
  checkbox.style.left = "21px";
  if (switchOn.value == 1 && checkbox.checked) {
    payment.textContent = "$72.00";
    views.textContent = "10K PAGEVIEWS";
    monthly.textContent = "/ year";
  }
  if (switchOn.value == 2 && checkbox.checked) {
    payment.textContent = "$108.00";
    views.textContent = "50K PAGEVIEWS";
    monthly.textContent = "/ year";
  }
  if (switchOn.value == 3 && checkbox.checked) {
    payment.textContent = "$144.00";
    views.textContent = "100K PAGEVIEWS";
    monthly.textContent = "/ year";
  }
  if (switchOn.value == 4 && checkbox.checked) {
    payment.textContent = "$160.00";
    views.textContent = "500K PAGEVIEWS";
    monthly.textContent = "/ year";
  }
  if (switchOn.value == 5 && checkbox.checked) {
    payment.textContent = "$192.00";
    views.textContent = "1M PAGEVIEWS";
    monthly.textContent = "/ year";
  }
  if (switchOn.value == 1 && !checkbox.checked) {
    payment.textContent = "$8.00";
    views.textContent = "10K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 2 && !checkbox.checked) {
    payment.textContent = "$12.00";
    views.textContent = "50K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 3 && !checkbox.checked) {
    payment.textContent = "$16.00";
    views.textContent = "100K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 4 && !checkbox.checked) {
    payment.textContent = "$24.00";
    views.textContent = "500K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 5 && !checkbox.checked) {
    payment.textContent = "$36.00";
    views.textContent = "1M PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 1 && !checkbox.checked) {
    payment.textContent = "$8.00";
    views.textContent = "10K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 2 && !checkbox.checked) {
    payment.textContent = "$12.00";
    views.textContent = "50K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 3 && !checkbox.checked) {
    payment.textContent = "$16.00";
    views.textContent = "100K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 4 && !checkbox.checked) {
    payment.textContent = "$24.00";
    views.textContent = "500K PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if (switchOn.value == 5 && !checkbox.checked) {
    payment.textContent = "$36.00";
    views.textContent = "1M PAGEVIEWS";
    monthly.textContent = "/ month";
  }
  if ((switchOn.value == 1, 2, 3, 4, 5 && !checkbox.checked)) {
    checkbox.style.left = "0px";
  }
});
