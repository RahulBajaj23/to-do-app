const inputTask=document.getElementById('task-input');
const formTask=document.getElementById('todo-form');
const listTask=document.getElementById('list-of-task');

formTask.addEventListener('submit',(e)=>{
    e.preventDefault();
    const taskTopic=inputTask.value;
    // console.log(taskTopic);
    if(taskTopic==""){
        alert
    }
    else{

    const listItem=document.createElement('li');
    listItem.innerHTML=taskTopic;
    listTask.append(listItem);
    let span=document.createElement('span');
    span.innerHTML=`&times;`
    listItem.appendChild(span);
    inputTask.value="";
    saveData();
}

});

listTask.addEventListener('click', (e)=>{
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    if(e.target.tagName=='SPAN'){
        let li=e.target.parentElement;
        li.remove();
        saveData()
    }
})

function showSaveData(){
    listTask.innerHTML=localStorage.getItem('listItem');
}

function saveData(){
    localStorage.setItem('listItem',listTask.innerHTML)
}

showSaveData();