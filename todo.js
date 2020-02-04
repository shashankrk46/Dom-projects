const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task')


loadEventListner();



function loadEventListner(){
    //  dom loadevent
    document.addEventListener('DOMContentLoaded',getTasks)
    
    form.addEventListener('submit',addTask);
    // remove task evnt
    taskList.addEventListener('click',removeTask)

    clearBtn.addEventListener('click',clearTask)

    filter.addEventListener('keyup',filterTask)
}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

   tasks.forEach(function(task){
    const li=document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(task));
    
    const link=document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';
    
    li.appendChild(link);
    
    
    
    taskList.appendChild(li);

   })

}

function addTask(e){
  if(taskInput.value===''){
      alert('Add a task');
  }
const li=document.createElement('li');
li.className='collection-item';
li.appendChild(document.createTextNode(taskInput.value));

const link=document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML='<i class="fa fa-remove"></i>';

li.appendChild(link);



taskList.appendChild(li);
//  local storage

storeTaskInLocalStorage(taskInput.value);


taskInput.value="";


    e.preventDefault();
}

function  storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

tasks.push(task);

localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('are you sure')){
        e.target.parentElement.parentElement.remove();

        //  remove from ls
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}
// remove from ls
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index){
        if(taskItem.textContent===task){
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));

}
//   one way to clear tasks
// function clearTask(){
//     taskList.innerHTML=""
// }
//  faster
function clearTask(){
while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
}

function clearTasksFormLocalStorage(){
    localStorage.clear();
}
clearTasksFormLocalStorage();
}

function filterTask(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    })
}