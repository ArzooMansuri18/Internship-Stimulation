const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

window.onload = loadTasks;

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter" || e.key === "addBtn")addTask();
});

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        return alert("Please enter a task!");
    } else {
        const li = document.createElement("li");
    li.innerHTML = 
    `<span>${taskText}</span>
    <div class= "actions">
        <button class= "complete">✅</button> 
        <button class= "edit">✏️</button>
        <button class= "delete">🗑️</button>
    </div>`;

    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
    } 
}

taskList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if(!li) return;

    if(e.target.classList.contains("complete")){
        li.classList.toggle("completed");
    } else if(e.target.classList.contains("edit")){
        const newText = prompt("Edit your Task:", li.querySelector("span").textContent);
        if(newText !== null && newText.trim() !== ""){
            li.querySelector("span").textContent = newText.trim();
        }
    } else if(e.target.classList.contains("delete")){
        li.remove(taskInput);
    }
    saveTasks();
});

function saveTasks(){
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks(){
    const saved = localStorage.getItem("tasks");
    if(saved) taskList.innerHTML = saved;
}