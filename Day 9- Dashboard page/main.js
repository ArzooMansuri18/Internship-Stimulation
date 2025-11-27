const users = document.querySelector("#users");
const tasks = document.querySelector("#tasks");
const revenue = document.querySelector("#revenue");
const activityList = document.querySelector("#activityList");
const refreshBtn = document.querySelector("#refreshBtn");
const sidebarLinks = document.querySelectorAll(".sidebar ul li");
const btn = document.querySelector("button");

const activities = [
    "🧑‍💻Completed Project UI Design",
    "📦Added 3 new task to To-Do list",
    "📝Replied to client feedback",
    "📈Updated Analytics Page",
    "✅Deployed latest version to server"
];

function randomNumber(max){
    return Math.floor(Math.random() * max) + 1;
}

function loadDashboard(){
    users,textContext = randomNumber(500);
    tasks.textContent = randomNumber(100);
    revenue.textContent = "$"+(randomNumber(9000)+1000);

    activityList.innerHTML = "";
    const randomActivities = activities.sort(() => 0.5 - Math.random()).slice(0, 3);
    randomActivities.forEach(act => {
        const li = document.createElement("li");
        li.textContent = act;
        activityList.appendChild(li);
    });
}

sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebarLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");
    });
});

refreshBtn.addEventListener("click", loadDashboard);
window.onload = loadDashboard;

btn.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hide");

    const spans = document.querySelectorAll("span");
    spans.forEach(span => span.classList.toggle("close"));
});