
// console.log(document.getElementById('task-title'))

// const taskTitle=document.getElementById('task-title');
// document.getElementById('task-title').style.background='#444';
// document.getElementById('task-title').style.color='#fff';
// document.getElementById('task-title').style.padding='5px';


// document.getElementById('task-title').textContent='Task list';
// document.getElementById('task-title').innerText='my list';
// taskTitle.innerHTML='<span style="color:red">task list</span>';

// const items=document.querySelectorAll('li');

// items.forEach((item,odd) => {
//  return item.style.background = "#ccc";
// });

// const itemodd=document.querySelectorAll('li:nth-child(odd)');
// const itemeven=document.querySelectorAll('li:nth-child(even)');
// itemodd.forEach((li) => {
//    li.style.background = "#ccc";
//    li.style.color="black";
//  });
//  itemeven.forEach((li) => {
//   li.style.background = "#333";
//   li.style.color="white";
// });

// const li=document.createElement('li');

// li.className='collection-item'
// li.id='new-item'

// li.setAttribute('title','new item')

// li.appendChild(document.createTextNode('hello world'))


// const link=document.createElement('a');
// link.className="delete-item secondary-content";
// link.innerHTML='<i class="fa fa-remove"></i>';

// li.appendChild(link);
// document.querySelector('ul').appendChild(li);

// console.log(li);

// const newHeading=document.createElement('h2')

// newHeading.id='task-title';

// newHeading.appendChild(document.createTextNode('Task list'));

// const oldHeading=document.getElementById('task-title');

// const cardAction=document.querySelector('.card-action');

// cardAction.replaceChild(newHeading,oldHeading);


// console.log(newHeading);

// const lize=document.querySelector('li')
// const lis=document.querySelectorAll('li');
// const list=document.querySelector('ul');
// lize.innerText='hello'

// // lis[0].remove();

// list.removeChild(lis[0])


// const firstLi=document.querySelector('li');
// const link=firstLi.children[0];

// let val;

// val=link.classList;
// val=link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val=link;


// val=link.getAttribute('href')
// val=link.setAttribute('href','https://google.com')
// link.setAttribute('title','google')
// val=link.hasAttribute('title');

// link.removeAttribute('title')
// val=link;
// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click',clicks);

// function clicks(e){
//      e.preventDefault();

//      let val;

//      val=e.target;
//      val=e.type;

//     //  val=e.timeStamp;

//      val=e.offsetY;

//      val=e.offsetX;


// const clearBtn=document.querySelector('.clear-tasks')
// const card=document.querySelector('.card');
// const heading=document.querySelector('h5');


// // clearBtn.addEventListener('click',runEvent);
// // card.addEventListener('mouseover',runEvent);
// card.addEventListener('mousemove',runEvent);

// function runEvent(e){
//     e.preventDefault();
//     console.log(`event type:${e.type}`);

//     heading.innerHTML=`mouseX:${e.offsetX} mouseY:${e.offsetY}`;
//     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`
// }
    
    // const form =document.querySelector('form');
    // const taskInput=document.getElementById('task');
    // const heading=document.querySelector('h5');


    // taskInput.value='';

    // // form.addEventListener('submit',runEvent);

    // // taskInput.addEventListener('keyup',runEvent);

    // // taskInput.addEventListener('keypress',runEvent);
    // taskInput.addEventListener('input',runEvent);
    // // taskInput.addEventListener('keypress',runEvent);

    // function runEvent(e){
    //     // e.preventDefault();
    //     // console.log(taskInput.value)
    //     console.log(`event type:${e.type}`);
    //     // console.log(e.target.value);
    //     // heading.innerText=e.target.value;

    // }
    
//     const delItem=document.querySelector('.delete-item');

//     delItem.addEventListener('click',deleteItem);


//  document.body.addEventListener('click',deleteItem)  ; 
    
// function deleteItem(e){
   
//     // console.log(e.target)
//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }

// }

// localStorage.setItem('name','john');
// localStorage.setItem('age','30');
// sessionStorage.setItem('name','beth');

// const name=localStorage.getItem('name');
// const age=localStorage.getItem('age');
// localStorage.clear();
// console.log(name,age);


document.querySelector('form').addEventListener('submit',function(e){
    const task=document.getElementById('task').value;
     

    let tasks;

    if(localStorage.getItem('tasks') === null){
      tasks=[];
    } else {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);



    localStorage.setItem('tasks',JSON.stringify(tasks));

    alert('Task saved')
   

    e.preventDefault();
});

const tasks=JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});
    