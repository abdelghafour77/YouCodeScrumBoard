//  button to top
const toTop = document.querySelector("#to-top");
toTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

// declare array of tasks
var allTasks = [];

// check if there is data in local storage and effected to the array
if (localStorage.getItem("tasks")) {
    allTasks = JSON.parse(localStorage.getItem("tasks"));
}

// call function
getDataFromLocalStorage();

// print all tasks from local storage
function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        printTasks(tasks);
    }
}

// add array of tasks to local storage
function addDataToLocalStorageFrom(tasks) {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

function printTasks(tasks) {

    // truncate all tasks
    document.querySelector("#toDo").innerHTML = "";
    document.querySelector("#inProgress").innerHTML = "";
    document.querySelector("#done").innerHTML = "";

    tasks.forEach((task) => {

        let li = document.createElement("li");
        li.className = "list-group-item second-color";
        li.setAttribute("data-id", Date.now());
        let row = document.createElement("div");
        row.className = "row";
        let col_1 = document.createElement("div");
        col_1.className = "col-1";
        let i = document.createElement("i");
        if (task.status === "To do") {
            i.className = "fa-solid fa-hourglass-start fa-beat-fade icon";
        } else if (task.status === "In progress") {
            i.className = "fa-solid fa-spinner fa-spin-pulse icon";
        } else if (task.status === "Done") {
            i.className = "fa-solid fa-check icon";
        }
        let col = document.createElement("div");
        col.className = "col";
        let h5 = document.createElement("h5");
        h5.appendChild(document.createTextNode(task.title));
        let small = document.createElement("small");
        small.appendChild(document.createTextNode(task.date));
        let description = document.createElement("div");
        description.appendChild(document.createTextNode(task.description));
        let priority = document.createElement("span");
        priority.className = "badge rounded-pill text-white blue-color"
        priority.appendChild(document.createTextNode(task.priority));
        let type = document.createElement("span");
        type.className = "badge rounded-pill text-bg-secondary"
        type.appendChild(document.createTextNode(task.type));

        col_1.appendChild(i);
        col.appendChild(h5);
        col.appendChild(small);
        col.appendChild(description);
        col.appendChild(priority);
        col.appendChild(type);
        row.appendChild(col_1);
        row.appendChild(col);
        li.appendChild(row);
        if (task.status === "To do") {
            toDo.appendChild(li);
        } else if (task.status === "In progress") {
            inProgress.appendChild(li);
        } else if (task.status === "Done") {
            done.appendChild(li);
        }
    });
}

window.addEventListener('load', () => {

    var form = document.querySelector("#form");


    form.addEventListener('submit', (e) => {

        // to stop reload fo page
        e.preventDefault();

        // get all info from form
        var selectStatus = document.getElementById('status');
        var selectPriority = document.getElementById('priority');

        var title = document.getElementById("title").value;
        var type = document.querySelector('input[name="type"]:checked').value;
        var priority = selectPriority.value;
        var option = selectStatus.value;
        var date = document.getElementById("date").value;
        var description = document.getElementById("description").value;

        // truncate form
        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
        document.getElementById("description").value = "";

        // create object of task
        const task = {
            title: title,
            type: type,
            priority: priority,
            status: option,
            date: date,
            description: description
        };

        if (!task) {
            alert("please fill out all inputs");
        } else {
            // add task to array of tasks
            allTasks.push(task);
            // print all tasks
            printTasks(allTasks);
            // storage tasks in local storage
            addDataToLocalStorageFrom(allTasks)
        }
    })
})