const billInput = document.querySelector("#billAmount");
const tipInput = document.querySelector("#tipPercent");
const peopleInput = document.querySelector("#numPeople");
const calcBtn = document.querySelector("#calculateBtn");
const tipResult = document.querySelector("#tipPerPerson");
const totalResult = document.querySelector("#totalPerPerson");

calcBtn.addEventListener("click", () => {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);
    const people = parseInt(peopleInput.value);

    if(bill > 0 && tipPercent >= 0 && people > 0){
        const totalTip = bill*(tipPercent/100);
        const tipPerPerson = totalTip/people;
        const totalPerPerson = (bill+totalTip)/people;

        tipResult.textContent = tipPerPerson.toFixed(2);
        totalResult.textContent = totalPerPerson.toFixed(2);
    } else{
        alert("Please fill all fields correctly!");
    }
});