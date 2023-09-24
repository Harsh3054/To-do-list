const storedTodoList=localStorage.getItem('todoList');

const todoList=storedTodoList?JSON.parse(storedTodoList):[];


renderToDoList();
function renderToDoList(){
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++){
        const todoObject=todoList[i];
        //const name=todoObject.name;
        //const dueDate=todoObject.dueDate;
        const {name,dueDate}=todoObject;
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div>     
        <button onclick="
            deleteToDo(${i})"
            class="delete-todo-button">Delete
        </button>`;
        
        todoListHTML+=html;
    }
    
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}


function deleteToDo(index){
    todoList.splice(index,1);
    localStorage.setItem('todoList',JSON.stringify(todoList));
    renderToDoList();

}
function addToDo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;

    const dateInputElement=document.querySelector('.js-due-date-input');

    const dueDate=dateInputElement.value;

    todoList.push({
        //name:name,
        //dueDate:dueDate,
        name,
        dueDate
    });
    localStorage.setItem('todoList',JSON.stringify(todoList));
    
    inputElement.value='';
    renderToDoList();
}
