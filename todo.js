
let taskList = document.getElementById("taskList");

function addTask(){

    let input = document.getElementById("taskInput");

    let text = input.value.trim();

    if(text === "") return;

    let time = new Date().toLocaleString();

    let div = document.createElement("div");

    div.className = "task";

    div.innerHTML = `
    
        <div class="left">

            <input 
                type="checkbox"
                onchange="toggleComplete(this)"
            >

            <div>

                <div class="text">${text}</div>

                <div class="time">${time}</div>

            </div>

        </div>

        <div class="icons">

            <i 
                class="fa-solid fa-pen"
                onclick="editTask(this)"
            ></i>

            <i 
                class="fa-solid fa-trash"
                onclick="deleteTask(this)"
            ></i>

        </div>
    `;

    taskList.appendChild(div);

    input.value = "";
}

function deleteTask(el){

    el.closest(".task").remove();
}

function toggleComplete(el){

    let task = el.closest(".task");

    task.classList.toggle("completed");
}

function editTask(el){

    let task = el.closest(".task");

    let left = task.querySelector(".left");

    let icons = task.querySelector(".icons");

    let textEl = task.querySelector(".text");

    let oldText = textEl.innerText;

    left.innerHTML = `
    
        <div class="edit-box">

            <input
                type="text"
                value="${oldText}"
                class="edit-input"
                autofocus
            >

            <div class="edit-buttons">

                <button 
                    class="save-btn"
                    onclick="saveTask(this)"
                >
                    Save
                </button>

                <button 
                    class="cancel-btn"
                    onclick="cancelEdit(this, '${oldText}')"
                >
                    Cancel
                </button>

            </div>

        </div>
    `;

    icons.style.display = "none";
}

function saveTask(btn){

    let task = btn.closest(".task");

    let input = task.querySelector(".edit-input");

    let newText = input.value.trim();

    if(newText === ""){
        newText = "Empty Task";
    }

    let time = new Date().toLocaleString();

    task.querySelector(".left").innerHTML = `
    
        <input 
            type="checkbox"
            onchange="toggleComplete(this)"
        >

        <div>

            <div class="text">${newText}</div>

            <div class="time">${time}</div>

        </div>
    `;

    task.querySelector(".icons").style.display = "block";
}

function cancelEdit(btn, oldText){

    let task = btn.closest(".task");

    let time = new Date().toLocaleString();

    task.querySelector(".left").innerHTML = `
    
        <input 
            type="checkbox"
            onchange="toggleComplete(this)"
        >

        <div>

            <div class="text">${oldText}</div>

            <div class="time">${time}</div>

        </div>
    `;

    task.querySelector(".icons").style.display = "block";
}

function filterTasks(){

    let filter = document.getElementById("filter").value;

    let tasks = document.querySelectorAll(".task");

    tasks.forEach(task => {

        if(filter === "all"){

            task.style.display = "flex";
        }

        else if(filter === "completed"){

            task.style.display =
                task.classList.contains("completed")
                ? "flex"
                : "none";
        }

        else{

            task.style.display =
                !task.classList.contains("completed")
                ? "flex"
                : "none";
        }

    });
}
