let mainContainer = document.querySelector(".main-container");
let thanksContainer = document.querySelector(".thank-you");
let submitButton = document.getElementById("submit");
let rateAgain = document.getElementById("rate-again");
let rating = document.getElementById("rate");
let rates = document.querySelectorAll(".btn");
submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
})
rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden");
    mainContainer.classList.remove("hidden");
})
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})