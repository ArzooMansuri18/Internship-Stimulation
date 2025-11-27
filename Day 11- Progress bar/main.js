const progressBar = document.querySelector("#progress-bar");
const percentage = document.querySelector("#percentage");
const startBtn = document.querySelector("#start-btn");
const againBtn = document.querySelector("#again");

startBtn.addEventListener("click", () => {
    let progress = 0;
    const loading = setInterval(() => {
        if(progress >= 100){
            clearInterval(loading);
            startBtn.innerText = "Completed!";
            startBtn.disabled = true;
        } else {
            progress++;
            progressBar.style.width = progress + "%";
            percentage.innerText = progress + "%";
        }
    }, 50);
});

