const form = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const submitBtn = document.querySelector("#submitBtn");
const show = document.querySelector("#show");

function validateName() {
    const name = nameInput.value.trim();
    const error = nameInput.nextElementSibling;
    
    if(name.length < 3){
        error.textContent = "Name must be at least 3 characters";
        error.style.visibility = "visible";

        nameInput.parentElement.classList.add("invalid");
        nameInput.parentElement.classList.remove("valid");

        return false;

    } else {
        error.style.visibility = "hidden";

        nameInput.parentElement.classList.add("valid");
        nameInput.parentElement.classList.remove("invalid");

        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const error = emailInput.nextElementSibling;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){
        error.textContent = "Enter a valid email";
        error.style.visibility = "visible";

        emailInput.parentElement.classList.add("invalid");

        return false;

    } else {
        error.style.visibility = "hidden";

        emailInput.parentElement.classList.add("valid");

        return true;
    }
}

function validatePassword() {
    const password = passwordInput.value;
    const error = passwordInput.nextElementSibling;

    if(password.length < 6){
        error.textContent = "Password must be at least 6 characters";
        error.style.visibility = "visible";

        passwordInput.parentElement.classList.add("invalid");

        return false;

    } else {
        error.style.visibility = "hidden";

        passwordInput.parentElement.classList.add("valid");

        return true;
    }
}

function validateConfirmPassword() {
    const confirm = confirmPasswordInput.value;
    const error = confirmPasswordInput.nextElementSibling;

    if(confirm !== passwordInput.value){
        error.textContent = "Password should be match";
        error.style.visibility = "visible";

        confirmPasswordInput.parentElement.classList.add("invalid");

        return false;

    } else {
        error.style.visibility = "hidden";

        confirmPasswordInput.parentElement.classList.add("valid");

        return true;
    }
}

function checkAllValid(){
    submitBtn.disabled = !(validateName() && validateEmail() && validatePassword() && validateConfirmPassword());
}

show.addEventListener("click", ()=> {
    passwordInput.type = "text";
});

show.addEventListener("dblclick", ()=> {
    passwordInput.type = "password";
});

form.addEventListener("input", checkAllValid);

form.addEventListener("submit", () => {
    alert("Form submitted successfully🎉");
    form.reset();
});
