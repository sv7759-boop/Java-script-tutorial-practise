let todoList = [ ];

renderTodoList();

function renderTodoList(){
  let todoListHtml = '';
  for(let i = 0; i < todoList.length; i++){
  const todo = todoList[i];
  todoListHtml += `<p>${todo}</p>`;
  }
  document.querySelector('.js-todo-container').innerHTML = todoListHtml;
}


function addTodo(){
  let innerElement = document.querySelector('.js-todo-input');
  let todoInput = innerElement.value;
  todoList.push(todoInput);
  console.log(todoList);
  document.querySelector('.js-todo-input').value = '';

  renderTodoList();
} 