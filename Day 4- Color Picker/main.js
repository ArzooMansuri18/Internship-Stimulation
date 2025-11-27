const colorInput = document.querySelector("#colorInput");
const randomBtn = document.querySelector("#randomBtn");
const colorDisplay = document.querySelector("#colorDisplay");
const hexCode = document.querySelector("#hexCode");
const copyBtn = document.querySelector("#copyBtn");

colorInput.addEventListener("input", () => {
    updateColor(colorInput.value);
});

randomBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    updateColor(randomColor);
    colorInput.value = randomColor;
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(hexCode.textContent);
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
       copyBtn.innerText = "Copy Code" 
    }, 1500);
})

function updateColor(color){
    colorDisplay.style.background = color;
    hexCode.textContent = color;
}