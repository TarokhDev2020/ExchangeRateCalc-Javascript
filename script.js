const firstCurrencyEl = document.getElementById("currency-one");
const secondCurrencyEl = document.getElementById("currency-two");
const firstAmount = document.getElementById("amount-one");
const secondAmount = document.getElementById("amount-two");
const swapButton = document.getElementById("swap");
const rateEl = document.getElementById("rate");

function calculate() {
    const firstCurrency = firstCurrencyEl.value;
    const secondCurrency = secondCurrencyEl.value;
    fetch(`https://v6.exchangerate-api.com/v6/[YOUR_API_KEY]/latest/${firstCurrency}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[secondCurrency];
            rateEl.innerText = `1 ${firstCurrency} = ${rate} ${secondCurrency}`
            secondAmount.value = (firstAmount.value * rate).toFixed(2);
        });
}

firstCurrencyEl.addEventListener("change", calculate);
firstAmount.addEventListener("input", calculate);
secondCurrencyEl.addEventListener("change", calculate);
secondAmount.addEventListener("input", calculate);
swapButton.addEventListener("click", e => {
    const temp = firstCurrencyEl.value;
    firstCurrencyEl.value = secondCurrencyEl.value;
    secondCurrencyEl.value = temp;
    calculate();
})

calculate();