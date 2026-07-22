let todoList = [];

//renderTodoList();

function renderTodoList(){
  let todoListHtml = '';
  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const duedate = todoObject.duedate;
    todoListHtml += `
      <div class="todo-name">${name}</div>
      <div class="todo-date">${duedate}</div>
      <button onclick = "
          todoList.splice(${i} , 1);
          renderTodoList();
        " class = "delete-button">Delete</button>
        `
  }
  document.querySelector('.js-todo-container').innerHTML = todoListHtml;
}


function addTodo(){
  let innerElement = document.querySelector('.js-todo-input');
  let todoInput = innerElement.value;
  let innerElementDate = document.querySelector('.js-todo-date');
  let todoInputDate = innerElementDate.value;

  if(todoInput.trim() === '' || todoInputDate === ''){
    alert('Please add valid todo or date');
    return;
  }

  todoList.push({
    name : todoInput,
    duedate : todoInputDate
  })

  console.log(todoList);
  document.querySelector('.js-todo-input').value = '';
  document.querySelector('.js-todo-date').value = '';

  renderTodoList();
} 