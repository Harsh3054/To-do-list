const storedTodoList=localStorage.getItem('todoList');

const todoList=storedTodoList?JSON.parse(storedTodoList):[];


renderToDoList();
function renderToDoList(){
    let todoListHTML='';

    todoList.forEach( (todoObject,index)=>{
        
        const {name,dueDate}=todoObject;
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div>     
        <button 
            class="delete-todo-button js-delete-todo-button">Delete
        </button>`;
        
        todoListHTML+=html;
    });
    
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            deleteToDo(index);
        })
    });
}


function deleteToDo(index){
    todoList.splice(index,1);
    localStorage.setItem('todoList',JSON.stringify(todoList));
    renderToDoList();

}
document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
    addToDo();
})
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
