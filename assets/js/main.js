const toTop=document.querySelector("#to-top") ;
toTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})
window.addEventListener('load',()=>{
    var form= document.querySelector("#form");
    
    var toDo = document.querySelector("#toDo");
    var inProgress = document.querySelector("#inProgress");
    var done = document.querySelector("#done");

    var allTasks = []

    form.addEventListener('submit',(e) =>{
        // to stop reload fo page
        e.preventDefault();

        // get all info from form
        var selectStatus = document.getElementById('status');
        var selectPriority = document.getElementById('priority');

        var title=document.getElementById("title").value;
        var type=document.querySelector('input[name="type"]:checked').value;
        var priority = selectPriority.value;
        var option = selectStatus.value;
        var date=document.getElementById("date").value;
        var description=document.getElementById("description").value;
        
        // truncate form
        document.getElementById("title").value="";
        // document.getElementById("type").value="";
        // document.getElementById("priority").value="";
        // document.getElementById("status").value="";
        document.getElementById("date").value="";
        document.getElementById("description").value="";

        // create object of task
        const task = {
            title:title,
            type:type,
            priority:priority,
            status:option,
            date:date,
            description:description
        };

        if(!task){
            alert("please fill out all inputs");
        }else{
            document.querySelector("#toDo").innerHTML="";
            document.querySelector("#inProgress").innerHTML="";
            document.querySelector("#done").innerHTML="";
            allTasks.push(task);

            allTasks.forEach((task) => {
                let li =document.createElement("li");
                li.className="list-group-item second-color";
                li.setAttribute("data-id",Date.now());
                let row =document.createElement("div");
                row.className="row";
                let col_1 =document.createElement("div");
                col_1.className="col-1";
                let i =document.createElement("i");
                if(task.status==="To do"){
                    i.className="fa-solid fa-hourglass-start icon";
                }else if (task.status==="In progress"){
                    i.className="fa-solid fa-spinner icon";
                }else if (task.status==="Done"){
                    i.className="fa-solid fa-check icon";
                }
                let col =document.createElement("div");
                col.className="col";
                let h5 =document.createElement("h5");
                h5.appendChild(document.createTextNode(task.title));
                let small =document.createElement("small");
                small.appendChild(document.createTextNode(task.title));
                let description =document.createElement("div");
                description.appendChild(document.createTextNode(task.description));
                let priority=document.createElement("span");
                priority.className="badge rounded-pill text-white blue-color"
                priority.appendChild(document.createTextNode(task.priority));
                let type=document.createElement("span");
                type.className="badge rounded-pill text-bg-secondary"
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
                if(task.status==="To do"){
                    toDo.appendChild(li);
                }else if(task.status==="In progress"){
                    inProgress.appendChild(li);
                }else if(task.status==="Done"){
                    done.appendChild(li);
                }
                
            });
        }
    })
})