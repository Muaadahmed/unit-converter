/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const result = document.getElementById("result")
const length = document.getElementById("length-p")
const volume = document.getElementById("volume-p")
const mass = document.getElementById("mass-p")
// const metric = {name : "Length"}

function conversion(name) {
    let convertMetricSentence = ""
    if (name === "length") {
        let valueToFeet = (result.value * 3.281).toFixed(3)
        let valueToMeters = (result.value / 3.281).toFixed(3)
        convertMetricSentence = `${result.value} meters = ${valueToFeet} feet | ${result.value} feet = ${valueToMeters} meters`
    } else if(name === "volume") {
        let valueToGallons = (result.value * 0.264).toFixed(3)
        let valueToLitres = (result.value / 0.264).toFixed(3)
        convertMetricSentence = `${result.value} litres = ${valueToGallons} gallons | ${result.value} gallons = ${valueToLitres} litres`
    } else {
        let valueToKilos = (result.value * 2.204).toFixed(3)
        let valueToPounds = (result.value / 2.204).toFixed(3)
        convertMetricSentence = `${result.value} kilos = ${valueToKilos} pounds | ${result.value} pounds = ${valueToPounds} kilos`
    }

    return convertMetricSentence
}

convertBtn.addEventListener("click", function () {
    length.textContent = conversion("length")
    volume.textContent = conversion("volume")
    mass.textContent = conversion("mass")
})