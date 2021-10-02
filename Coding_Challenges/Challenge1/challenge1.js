window.onload = () => {
    let button = document.querySelector("#calculateButton");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

    let height = parseInt(document.querySelector("#heightField").value);
    let weight = parseInt(document.querySelector("#weightField").value);
    let result = document.querySelector("#result");

    if (height === "" || isNaN(height)) {
        result.innerHTML = "Provide a valid Height!"
    }
    else if (weight === "" || isNaN(weight)) {
        result.innerHTML = "Provide a valid Weight!"
    }
    else {
        let bmi = (weight / ((height ** 2) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `Under Weight : <span>${bmi}</span>`;
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : <span>${bmi}</span>`;
        }
        else {
            result.innerHTML = `Over Weight : <span>${bmi}</span>`;
        }
    }
}