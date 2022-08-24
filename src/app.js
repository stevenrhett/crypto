const formEl = document.getElementById("cryptoCal");
var typeAmount = document.getElementById("typeAmount");
const btnBlue = document.getElementById("btnBlue");

// results
var coinNumber = document.querySelector("coinNumber");
var coinNumber1 = document.querySelector("coinNumber1");

const convert = (coinNumber, coinnumber1) => {
  if (coinNumber === coinNumber1 ||
    coinNumber === coinNumber1)
    return sameCurrency();

  if (fromCurrencys === "ETH" && toCurrencys === "USD") return convertToETH();
  if (fromCurrencys === "USD" && toCurrencys === "ETH") return convertFromETH();

  if (fromCurrencys === "BTC" && toCurrencys === "USD") return convertToBTC();
  if (fromCurrencys === "USD" && toCurrencys === "BTC") return convertFromBTC();
};

document.getElementById("currencyAmount")
  * document.getElementById("currencyName")

document.getElementById("convertAmount")
document.getElementById("convertCurrency")


formEl.addEventListener("change", function () {
  let result = convert(coinNumber.value, coinNumber.value);
  let display_currency = "";
  if (coinnumber1.value === "BTC" || coinNumber.value === "BTC")
    display_currency = "Bitcoin (BTC)";
  if (fromCurrency.value === "USD" || toCurrency.value === "USD")
    display_currency = "United States Dollar\"$\" (USD)";
  if (fromCurrency.value === "ETH" || toCurrency.value === "ETH")
    display_currency = "Ethereum (ETH)";
  if (fromCurrency.value === toCurrency.value)
    display_currency = fromCurrency.value || toCurrency.value;




  document.getElementById("currencyAmount").innerHTML = `${Number(buyerQuantity.value).toFixed(2)}`;
  document.getElementById("currencyName").innerHTML = fromCurrency.value;
  document.getElementById("currencyName").innerHTML = display_currency;

  document.getElementById("convertAmount").innerHTML = toCurrency.value;
  document.getElementById("convertAmount").innerHTML = display_currency;
  document.getElementById("convertCurrency").innerHTML = `${result}`;

});

