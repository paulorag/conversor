<!--Conversor de moeda -->
function Dolar() {
  var valorReal = parseFloat(document.getElementById("valor").value);
  var valorDolar = valorReal / 5;
  var valorMoeda = document.getElementById("valorMoeda");
  valorMoeda.innerHTML = "O valor em Dolar é $" + valorDolar;
}

function Euro() {
  var valorReal = parseFloat(document.getElementById("valor").value);
  var valorEuro = valorReal / 6;
  var valorMoeda = document.getElementById("valorMoeda");
  valorMoeda.innerHTML = "O valor em Euro é $" + valorEuro;
}

function Bitcoin() {
  var valorReal = parseFloat(document.getElementById("valor").value);
  var valorBitcoin = valorReal / 245000;
  var valorMoeda = document.getElementById("valorMoeda");
  valorMoeda.innerHTML = "O valor em Bitcoin é $" + valorBitcoin;
}

<!--Conversor de Km para anos luz -->
function Converter() {
  var valorKm = parseFloat(document.getElementById("valorDistancia").value);
  var valorAnosLuz = valorKm / 9460536068.016;
  var valorConvertido = document.getElementById("valorConvertido");
  valorConvertido.innerHTML = "O valor em anos luz é " + valorAnosLuz;
}

<!--Conversor de temperatura -->
function Fahrenheit() {
  var valorCel = parseFloat(document.getElementById("valorTemperatura").value);
  var valorFahr = valorCel * 1.8 + 32;
  var valorConvTemp = document.getElementById("valorConvTemp");
  valorConvTemp.innerHTML = "A temperatura em Fahrenheit é " + valorFahr + "°";
}

function Kelvin() {
  var valorCel = parseFloat(document.getElementById("valorTemperatura").value);
  var valorKel = valorCel + 273.15;
  var valorConvTemp = document.getElementById("valorConvTemp");
  valorConvTemp.innerHTML = "A temperatura em Kelvin é " + valorKel + "°";
}