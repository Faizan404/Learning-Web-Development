// DOM (Document Object Model) Manipulation

// CRUD Create,Read,Update,Delete
const myTodosList = [];
const listGroup = document.getElementById("list-group");

function createTodo() {
  const createForm = document.querySelector(".form-create");

  let index = 1;

  createForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoContent = this[0].value; //e.target[0].value

    if (!todoContent) return;

    const listItem = ` 
    <li
        data-edit=${index}
        class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todoContent}</span>
            <i class="far fa-trash-alt delete"></i>
    </li>`;
    listGroup.insertAdjacentHTML("afterbegin", listItem);
    // const listItem = document.createElement("li");
    // listItem.textContent = todoContent;
    // listGroup.appendChild(listItem);

    myTodosList.push({ id: index++, content: todoContent });
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
            <i class="far fa-trash-alt delete"></i>
    </li>`;
  });
  
  listGroup.insertAdjacentHTML("afterend", listItem);
}

function updateTodo() {
  const editInput = document.querySelector(".input-edit");
  const formEdit = document.querySelector(".form-edit");

  let filteredTodo = [];
  listGroup.addEventListener("click", function (e) {
    let listItem = e.target.closest(".list-group-item");
    if (!listItem) return;
    const todoId = listItem.dataset.edit;
    console.log(myTodosList)
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

    readTodo();
  });
}
function deleteTodo() {}

(function init() {
  createTodo();
  updateTodo();
})();