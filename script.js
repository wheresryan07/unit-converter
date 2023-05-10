/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.querySelector("#conversion-input");
let inputValue = inputEl.value;
const inputBtn = document.querySelector("#conversion-btn");
// const meterToFeet = inputValue * 3.281;

let lengthEl = "";
document.querySelector("#length-el").textContent = lengthEl;
let volumeEl = "";
document.querySelector("#volume-el").innerHTML = volumeEl;
let massEl = "";
document.querySelector("#mass-el").innerHTML = massEl;

inputBtn.addEventListener("click", function () {
  inputValue = inputEl.value;
  const meterToFeet = (inputValue * 3.281).toFixed(3);
  const feetToMeter = (inputValue / 3.281).toFixed(3);
  const literToGallon = (inputValue * 0.264).toFixed(3);
  const gallonToLiter = (inputValue / 0.264).toFixed(3);
  const kiloToPound = (inputValue * 2.204).toFixed(3);
  const poundToKilo = (inputValue / 2.204).toFixed(3);
  document.querySelector(
    "#length-el"
  ).innerHTML = `${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${feetToMeter} meters`;
  document.querySelector(
    "#volume-el"
  ).innerHTML = `${inputValue} liters = ${literToGallon} gallons | ${inputValue} gallons = ${gallonToLiter} liters`;
  document.querySelector(
    "#mass-el"
  ).innerHTML = `${inputValue} kilos = ${kiloToPound} pounds | ${inputValue} pounds = ${poundToKilo} kilos`;
});
