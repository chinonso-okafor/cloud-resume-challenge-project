const counter = document.querySelector(".counter_number");
async function updateCounter() {
  let response = await fetch(
    "https://xohrvm5xsp2xh6dz7hfd5m2sqq0dpuhv.lambda-url.us-east-1.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = ` This page has ${data} Views!!`;
}

updateCounter();
