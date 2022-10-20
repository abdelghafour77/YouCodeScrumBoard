//  button to top
const toTop = document.querySelector("#to-top");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}

toTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
// *************************************************************************************

var toDo = document.querySelector("#toDo");
var inProgress = document.querySelector("#inProgress");
var done = document.querySelector("#done");
var allTasksDiv = document.querySelector('#all-tasks');

// check if there is data in local storage and effected to the array
// if (localStorage.getItem("tasks")) {
//     allTasks = JSON.parse(localStorage.getItem("tasks"));
// }

// call function
// getDataFromLocalStorage();

// print all tasks from local storage
// function getDataFromLocalStorage() {
//     let data = window.localStorage.getItem("tasks");
//     if (data) {
//         let tasks = JSON.parse(data);
//         printTasks(tasks);
//     }
// }

// add array of tasks to local storage
// function addDataToLocalStorageFrom(tasks) {
//     window.localStorage.setItem("tasks", JSON.stringify(tasks));
// }
function createTask() {
    $("#myModal").modal('show');
    document.getElementById('myModal').reset();
}
function printTasks() {

    // truncate all tasks
    document.querySelector("#toDo").innerHTML = "";
    document.querySelector("#inProgress").innerHTML = "";
    document.querySelector("#done").innerHTML = "";
    let div_task = "",
        i = 0,
        counter_todo = 0,
        counter_in_progress = 0,
        counter_done = 0;
    allTasks.forEach((task) => {
        i++;
        if (task.status === "To Do") {
            div_task = document.querySelector("#toDo");
            counter_todo++
            icon = "fa-hourglass-start";

        } else if (task.status === "In Progress") {
            div_task = document.querySelector("#inProgress");
            counter_in_progress++
            icon = "fa-spinner fa-spin-pulse"

        } else if (task.status === "Done") {
            div_task = document.querySelector("#done");
            counter_done++
            icon = "fa-check"

        }

        div_task.innerHTML +=

            `<button onclick="updateTask(${i})" class="list-group-item second-color" data-bs-toggle="modal"
                data-bs-target="#myModal">
                    <div class="row">
                    <div class="col-1">
                        <i class="fa-solid ${icon} fa-beat-fade icon"></i>
                    </div>
                    <div class="col-11">
                        <h5>${task.title}</h5>
                        <small>#${i} created in ${task.date}</small>
                        <div class="text-truncate" title="${task.description}">
                            ${task.description}
                        </div>
                        <span class="badge rounded-pill text-white blue-color">${task.priority}</span>
                        <span class="badge rounded-pill text-bg-secondary">${task.type}</span>
                    </div>
                    </div>
                </button>`;
        document.getElementById("count-todo").innerText = counter_todo;
        document.getElementById("count-in-progress").innerText = counter_in_progress;
        document.getElementById("count-done").innerText = counter_done;
    });
}

function addTask() {


    var form = document.getElementById("form");

    form.addEventListener('submit', (e) => {

        // to stop reload fo page
        e.preventDefault();

        // get all info from form

        var title = document.getElementById("title").value;
        var type = document.querySelector('input[name="type"]:checked').value;
        var priority = document.getElementById('priority').value;
        var option = document.getElementById('status').value;
        var date = document.getElementById("date").value;
        var description = document.getElementById("description").value;

        // truncate form
        document.getElementById('myModal').reset();

        // create object of task
        var task = {
            title: title,
            type: type,
            priority: priority,
            status: option,
            date: date,
            description: description
        };

        // add task to array of tasks
        allTasks.push(task);
        // print all tasks
        printTasks();
        // storage tasks in local storage
        // addDataToLocalStorageFrom(allTasks)

    })


}
// const yo = document.getElementByClassName("list-group-item")
// yo.addEventListener("click", function () {
//     console.log("e");
// });
function updateTask(id) {

    var modal = document.getElementById("myModal")
    console.log(id);
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <form id="form">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <!-- start form -->
                    <input type="hidden" name="id" value="${id}">
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <div class="input-group">
                        <input type="text" class="form-control" id="title" aria-describedby="basic-addon3" value="${allTasks[id - 1].title}" required />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Type</label>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="type" id="feature" value="Feature" checked />
                        <label class="form-check-label" for="feature"> Feature </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="type" id="bug" value="Bug" />
                        <label class="form-check-label" for="bug"> Bug </label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="priority" class="form-label">Priority</label>
                        <div class="input-group">
                        <select name="type" class="form-select" id="priority" aria-describedby="basic-addon3" required>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="status" class="form-label">Status</label>
                        <div class="input-group">
                        <select name="type" class="form-select" id="status" aria-describedby="basic-addon3" required>
                            <option value="To Do">To do</option>
                            <option value="In Progress">In progress</option>
                            <option value="Done">Done</option>
                        </select>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="date" class="form-label">Date</label>
                        <div class="input-group">
                        <input type="date" name="date" class="form-control" id="date" aria-describedby="basic-addon3" value="${allTasks[id - 1].date}"
                            required />
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" id="description" rows="5" required>${allTasks[id - 1].description}</textarea>
                    </div>

                    <!-- end form -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button id="update" type="submit" class="btn btn-warning">Update</button>
                        <button id="delete" type="submit" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </form>
        </div>`;

}

addTask();
printTasks();