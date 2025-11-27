const btn = document.querySelector("#calculate");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);

    if(!height || !weight || height <= 0 || weight <= 0){
        result.textContent = "⚠️ Please enter valid height and weight!";
        result.style.color = "red";
        return;
    }

    const bmi = (weight/((height/100)**2)).toFixed(2);
    let category = "";

    if(bmi < 18.5){
        category = "Underweight 😔";
        result.style.color = "#3498db";
    } else if(bmi < 24.9){
        category = "Normal weight 😊";
        result.style.color = "#2ecc71";
    } else if(bmi < 29.9){
        category = "Overweight 😑";
        result.style.color = "#f39c12";
    } else {
        category = "Obeses 😓";
        result.style.color = "#e74c3c";
    }

    result.innerHTML = `Your BMI is <b>${bmi}</b><br>You are <b>${category}</b>`;
});