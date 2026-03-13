const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const services = document.querySelector("#services");
const contact = document.querySelector("#contact");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

home.addEventListener("click", ()=>{
  console.log("Hello I am home");
})

about.addEventListener("click", ()=>{
  console.log("Hello I am about");
})

services.addEventListener("click", ()=>{
  console.log("Hello I am services");
})

contact.addEventListener("click", ()=>{
  console.log("Hello I am contact");
})

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
  if(!e.target.matches('.dropdown-btn')) {
    dropdownContent.classList.remove("show");
  } 
});
