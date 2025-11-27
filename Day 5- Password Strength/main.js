const password = document.querySelector("#password");
const weak = document.querySelector("#weak");
const medium = document.querySelector("#medium");
const strong = document.querySelector("#strong");
const feedback = document.querySelector("#feedback");
const desc = document.querySelector("#desc");
const show = document.querySelector("#show");

password.addEventListener("input", () => {
    checkStrength(password.value);
});

show.addEventListener("click", () => {
    password.type = "text";
});


show.addEventListener("dblclick", ()=> {
    password.type = "password";
});

function checkStrength(password){
    let strengthValue = 0;

    if(password.length >= 8) strengthValue++;
    if(/[A-Z]/.test(password)) strengthValue++;
    if(/[a-z]/.test(password)) strengthValue++;
    if(/[0-9]/.test(password)) strengthValue++;
    if(/[!@#$%^&*?]/.test(password)) strengthValue++;

    if(strengthValue === 0){
        feedback.textContent = "";
    } 
    else if(strengthValue <= 2){
        weak.style.background = "#ff4b5c";
        feedback.textContent = "Weak password😞";
        feedback.style.color = "#ff4b5c"
        desc.style.display = "inline";
    } 
    else if(strengthValue <= 4){
        weak.style.background = "#ffb84d";
        medium.style.background = "#ffb84d";
        feedback.textContent = "Medium password😑";
        feedback.style.color = "#ffb84d";
    } 
    else {
        weak.style.background = "#27ae60";
        medium.style.background = "#27ae60";
        strong.style.background = "#27ae60";
        feedback.textContent = "Strong password😊";
        feedback.style.color = "#27ae60";
    }
}