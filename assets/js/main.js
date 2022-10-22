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

function createTask() {
  document.getElementById("btn-update").style.display = "none";
  document.getElementById("btn-add").style.display = "block";
  document.getElementById('form').reset();
}

function printTasks() {
  // purge all tasks
  document.querySelector("#toDo").innerHTML = "";
  document.querySelector("#inProgress").innerHTML = "";
  document.querySelector("#done").innerHTML = "";

  let div_task = "", i = 0, counter_todo = 0, counter_in_progress = 0, counter_done = 0;
  allTasks.forEach((task) => {
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
                        <i class="fa-solid ${icon} icon"></i>
                    </div>
                    <div class="col-11">
                        <h5>${task.title}</h5>
                        <small>#${i + 1} created in ${task.date}</small>
                        <div class="text-truncate" title="${task.description}">
                            ${task.description}
                        </div>
                        <span class="badge rounded-pill text-white blue-color">${task.priority}</span>
                        <span class="badge rounded-pill text-bg-secondary">${task.type}</span>
                    </div>
                    </div>
                </button>`;
    i++;
  });
  document.getElementById("count-todo").innerText = counter_todo;
  document.getElementById("count-in-progress").innerText = counter_in_progress;
  document.getElementById("count-done").innerText = counter_done;

}

function addTask() {
  // get all data & create object of task
  if (document.getElementById("form").checkValidity()) {
    let task = {
      title: document.getElementById("title").value,
      type: document.querySelector('input[name="type"]:checked').value,
      priority: document.getElementById('priority').value,
      status: document.getElementById('status').value,
      date: document.getElementById("date").value,
      description: document.getElementById("description").value
    };
    // add task to array of tasks
    allTasks.push(task);
    // truncate form
    $("#myModal").modal('hide');
    // print all tasks
    printTasks();
  } else {
    Swal.fire({
      showConfirmButton: false,
      icon: 'error',
      title: 'Fill all input'
    })
  }
}

function getTask(id) {
  $("#myModal").modal('show');
  if (allTasks[id].type == "Bug") {
    document.getElementById("bug").checked = true
  } else {
    document.getElementById("feature").checked = true
  }
  document.getElementById("title").value = allTasks[id].title;
  document.querySelector('input[name="type"]:checked').value = allTasks[id].type;
  document.getElementById('priority').value = allTasks[id].priority;
  document.getElementById('status').value = allTasks[id].status;
  document.getElementById("date").value = allTasks[id].date;
  document.getElementById("description").value = allTasks[id].description;
  document.getElementById("id").value = id;
  document.getElementById("btn-update").style.display = "block";
  document.getElementById("btn-add").style.display = "none";
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
  allTasks[id] = task;
  printTasks();
}

function deleteTask() {
  let id = document.getElementById("id").value;
  allTasks.splice(id, 1);
  $("#myModal").modal('hide');
  printTasks();
}
printTasks();