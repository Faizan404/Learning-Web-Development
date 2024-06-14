// DOM (Document Object Model) Manipulation

// CRUD Create,Read,Update,Delete
const listGroup = document.getElementById("list-group");

let myTodosList = [];
let index = 1;

function createTodo() {
  const createForm = document.querySelector(".form-create");

  createForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoContent = this[0].value; //e.target[0].value

    if (!todoContent) return;

    const listItem = ` 
    <li
        data-edit=${index}
        class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todoContent}</span>
            <i data-del=${index} class="del-icon far fa-trash-alt delete"></i>
    </li>`;
    listGroup.insertAdjacentHTML("afterbegin", listItem);
    // const listItem = document.createElement("li");
    // listItem.textContent = todoContent;
    // listGroup.appendChild(listItem);

    myTodosList.push({ id: index++, content: todoContent });
    this[0].value = "";
    localStorage.setItem("todoList", JSON.stringify(myTodosList));
    console.log(myTodosList);
  });
}

function readTodo() {
  listGroup.innerHTML = "";
  let listItem = "";

  myTodosList.forEach((todo) => {
    listItem += ` 
    <li
        data-edit=${todo.id}
        class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo.content}</span>
            <i data-del=${todo.id} class="del-icon far fa-trash-alt delete"></i>
    </li>`;
  });

  listGroup.insertAdjacentHTML("afterbegin", listItem);
}

function updateTodo() {
  const editInput = document.querySelector(".input-edit");
  const formEdit = document.querySelector(".form-edit");

  let filteredTodo = [];
  listGroup.addEventListener("click", function (e) {
    let listItem = e.target.closest(".list-group-item");
    if (!listItem) return;
    const todoId = listItem.dataset.edit;
    console.log(myTodosList);
    filteredTodo = myTodosList.filter((todo) => todo.id === +todoId);

    editInput.value = filteredTodo[0].content;
  });

  formEdit.addEventListener("submit", function (e) {
    e.preventDefault();
    const editedValue = this[0].value;
    filteredTodo[0].content = editedValue;

    const checkTodoIndex = myTodosList.findIndex(
      (todo) => todo.id === filteredTodo[0].id
    );
    myTodosList[checkTodoIndex] = filteredTodo[0];
    this[0].value = "";
    readTodo();
  });
}
function deleteTodo() {
  listGroup.addEventListener("click", function (e) {
    const todo = e.target.closest(".del-icon");
    if (!todo) return;
    const todoId = todo.dataset.del;
    console.log(todo, todoId)
    const delTodoIndex = myTodosList.findIndex((todo) => todo.id === +todoId);
    myTodosList.splice(delTodoIndex, 1);
    localStorage.setItem("todoList", JSON.stringify(myTodosList));
    readTodo();
    console.log(myTodosList);
  });
}

function setAppData() {
  let todoAppData = localStorage.getItem("todoList");
  if (!todoAppData) return;
  myTodosList = JSON.parse(todoAppData);
  readTodo();
  console.log(myTodosList);
}

(function init() {
  setAppData();
  createTodo();
  updateTodo();
  deleteTodo();
})();
