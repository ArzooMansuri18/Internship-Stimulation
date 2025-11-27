const hireBtn = document.querySelector("#hireBtn");

hireBtn.addEventListener("click", ()=> {
    alert("Thanks for showing interest in Arzoo!");
});

const form = document.querySelector("form");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    alert("Thanks for your message! I will get back to you soon.");
    form.reset();
})