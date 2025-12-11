const item = document.querySelector("#item1");
const boxes = document.querySelectorAll(".box");


item.addEventListener("dragstart", () => {
    setTimeout(()=> 
    item.classList.add("hidden"), 0);
});


item.addEventListener("dragend", () => { 
    item.classList.remove("hidden");
});

boxes.forEach(box => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    box.addEventListener("drop", () => {
        box.appendChild(item);
    });
});
