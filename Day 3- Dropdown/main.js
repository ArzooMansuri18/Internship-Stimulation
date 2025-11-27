const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

// Close dropdown when clicking outside
window.addEventListener("click", (event) => {
  if (!event.target.matches('.dropdown-btn')) {
    dropdownContent.classList.remove("show");
  }
});
