let array = [];
function addTodo() {
let inputElement = document.querySelector('.js-todo-input');
let todoInput = inputElement.value;

array.push(todoInput);
console.log(array);

inputElement.value = '';
}