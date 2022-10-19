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

function printTasks(AllTasks) {

    // truncate all tasks
    document.querySelector("#toDo").innerHTML = "";
    document.querySelector("#inProgress").innerHTML = "";
    document.querySelector("#done").innerHTML = "";
    let toDo = document.querySelector("#toDo");
    let inProgress = document.querySelector("#inProgress");
    let done = document.querySelector("#done");

    AllTasks.forEach((task) => {
        // console.log(task);
        if (task.status === "To Do") {
            toDo.innerHTML +=

                `<li class="list-group-item second-color">
                    <div class="row">
                    <div class="col-1">
                        <i class="fa-solid fa-hourglass-start fa-beat-fade icon"></i>
                    </div>
                    <div class="col-11">
                        <h5>${task.title}</h5>
                        <small>#1 created in ${task.date}</small>
                        <div class="text-truncate" title="${task.description}">
                            ${task.description}
                        </div>
                        <span class="badge rounded-pill text-white blue-color">${task.priority}</span>
                        <span class="badge rounded-pill text-bg-secondary">${task.type}</span>
                    </div>
                    </div>
                </li>`;
        } else if (task.status === "In Progress") {
            inProgress.innerHTML +=
                `<li class="list-group-item second-color">
                    <div class="row">
                    <div class="col-1">
                        <i class="fa-solid fa-spinner fa-spin-pulse icon"></i>
                    </div>
                    <div class="col-11">
                        <h5>${task.title}</h5>
                        <small>#1 created in ${task.date}</small>
                        <div class="text-truncate" title="${task.description}">
                            ${task.description}
                        </div>
                        <span class="badge rounded-pill text-white blue-color">${task.priority}</span>
                        <span class="badge rounded-pill text-bg-secondary">${task.type}</span>
                    </div>
                    </div>
                </li>`;
        } else if (task.status === "Done") {
            done.innerHTML +=
                `<li class="list-group-item second-color">
                    <div class="row">
                    <div class="col-1">
                        <i class="fa-solid fa-check icon"></i>
                    </div>
                    <div class="col-11">
                        <h5>${task.title}</h5>
                        <small>#1 created in ${task.date}</small>
                        <div class="text-truncate" title="${task.description}">
                            ${task.description}
                        </div>
                        <span class="badge rounded-pill text-white blue-color">${task.priority}</span>
                        <span class="badge rounded-pill text-bg-secondary">${task.type}</span>
                    </div>
                    </div>
                </li>`;
        }
        // let li = document.createElement("li");
        // li.className = "list-group-item second-color";
        // li.setAttribute("data-id", Date.now()); // TO FIX
        // let row = document.createElement("div");
        // row.className = "row";
        // let col_1 = document.createElement("div");
        // col_1.className = "col-1";
        // let i = document.createElement("i");
        // if (task.status === "To do") {
        //     i.className = "fa-solid fa-hourglass-start fa-beat-fade icon";
        // } else if (task.status === "In progress") {
        //     i.className = "fa-solid fa-spinner fa-spin-pulse icon";
        // } else if (task.status === "Done") {
        //     i.className = "fa-solid fa-check icon";
        // }

        // let col = document.createElement("div");
        // col.className = "col";
        // let h5 = document.createElement("h5");
        // h5.appendChild(document.createTextNode(task.title));
        // let small = document.createElement("small");
        // small.appendChild(document.createTextNode(task.date));
        // let description = document.createElement("div");
        // description.className = " text-truncate";
        // description.appendChild(document.createTextNode(task.description));
        // let priority = document.createElement("span");
        // priority.className = "badge rounded-pill text-white blue-color"
        // priority.appendChild(document.createTextNode(task.priority));
        // let type = document.createElement("span");
        // type.className = "badge rounded-pill text-bg-secondary"
        // type.appendChild(document.createTextNode(task.type));

        // col_1.appendChild(i);
        // col.appendChild(h5);
        // col.appendChild(small);
        // col.appendChild(description);
        // col.appendChild(priority);
        // col.appendChild(type);
        // row.appendChild(col_1);
        // row.appendChild(col);
        // li.appendChild(row);
        // if (task.status === "To do") {
        //     toDo.appendChild(li);
        // } else if (task.status === "In progress") {
        //     inProgress.appendChild(li);
        // } else if (task.status === "Done") {
        //     done.appendChild(li);
        // }
    });
}



var form = document.getElementById("form");

form.addEventListener('submit', (maryem) => {

    // to stop reload fo page
    maryem.preventDefault();

    // get all info from form

    var title = document.getElementById("title").value;
    var type = document.querySelector('input[name="type"]:checked').value;
    var priority = document.getElementById('priority').value;
    var option = document.getElementById('status').value;
    var date = document.getElementById("date").value;
    var description = document.getElementById("description").value;

    // truncate form
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";

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
    printTasks(allTasks);
    // storage tasks in local storage
    // addDataToLocalStorageFrom(allTasks)

})
printTasks(allTasks);
