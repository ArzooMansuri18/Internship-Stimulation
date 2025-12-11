const mainImg = document.querySelector("#mainImg");
const thumbs = document.querySelectorAll(".thumb");
const cartBtn = document.querySelector("#cartBtn");
const qty = document.querySelector("#qty");

thumbs.forEach(img => {
    img.addEventListener("click", () => {
        mainImg.src = img.src;
    });
});

cartBtn.addEventListener("click", () => {
    alert("Item added to cart. Quantity: " + qty.value);
});