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

let toDo = document.querySelector("#toDo"),
  inProgress = document.querySelector("#inProgress"),
  done = document.querySelector("#done");

// *************************************************************************************

function createTask() {

  document.getElementById('form').reset();
  let modal = document.querySelector("#myModal")
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

      `<button onclick="getTask(${i})" class="list-group-item second-color" data-bs-toggle="modal"
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

  });
  document.getElementById("count-todo").innerText = counter_todo;
  document.getElementById("count-in-progress").innerText = counter_in_progress;
  document.getElementById("count-done").innerText = counter_done;

}

function addTask() {



  // to stop reload fo page
  // e.preventDefault();

  // get all info from form
  let title = document.getElementById("title").value;
  let type = document.querySelector('input[name="type"]:checked').value;
  let priority = document.getElementById('priority').value;
  let option = document.getElementById('status').value;
  let date = document.getElementById("date").value;
  let description = document.getElementById("description").value;

  // truncate form
  $("#myModal").modal('hide');
  // create object of task
  let task = {
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


}

function getTask(id) {
  $("#myModal").modal('show');
  if (allTasks[id - 1].type == "Bug") {
    document.getElementById("bug").checked = true
  } else {
    document.getElementById("feature").checked = true
  }
  document.getElementById("title").value = allTasks[id - 1].title;
  document.querySelector('input[name="type"]:checked').value = allTasks[id - 1].type;
  document.getElementById('priority').value = allTasks[id - 1].priority;
  document.getElementById('status').value = allTasks[id - 1].status;
  document.getElementById("date").value = allTasks[id - 1].date;
  document.getElementById("description").value = allTasks[id - 1].description;
  document.getElementById("id").value = id;
  document.getElementById("btn-update").style.display = "block";
  document.getElementById("btn-add").style.display = "none";
  // document.querySelector("deleteBtn").setAttribute("onclick", "deleteTask(" + id + ")")
  // document.querySelector("deleteBtn").onclick = deleteTask(id - 1);
}

function updateTask() {
  // truncate form
  $("#myModal").modal('hide');
  let id = document.getElementById("id").value;
  // create object of task
  let task = {
    title: document.getElementById("title").value,
    type: document.querySelector('input[name="type"]:checked').value,
    priority: document.getElementById('priority').value,
    status: document.getElementById('status').value,
    date: document.getElementById("date").value,
    description: document.getElementById("description").value
  };

  // add task to array of tasks
  allTasks[id - 1] = task;
  printTasks();
}
function deleteTask() {
  let id = document.getElementById("id").value;
  allTasks.splice(id - 1, 1);
  $("#myModal").modal('hide');
  printTasks();
}
printTasks();