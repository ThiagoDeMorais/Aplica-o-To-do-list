const toDosContainer = document.querySelector(".todos-container");
const formAddTodo = document.querySelector(".form-add-todo");
const formSearch = document.querySelector(".form-search");

const addToDo = event => {
  event.preventDefault();
  const valueOfTheNewToDo = event.target.add.value.trim();
  if (valueOfTheNewToDo !== "") {
    toDosContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" data-to-do = ${valueOfTheNewToDo}>
        <span>${valueOfTheNewToDo}</span>
        <i class="far fa-trash-alt delete" data-remove = ${valueOfTheNewToDo}></i>
      </li>`;
    event.target.reset();
  }
}

const removeToDo =  event => {
  const clickedElement = event.target;
  const clickedElementWasTrash = clickedElement.dataset.remove

  if(clickedElementWasTrash){
    const toDo = document.querySelector(`[data-to-do ="${clickedElementWasTrash}"]`)
    toDo.remove();
  }
}

const filterToDos = toDos => {
  toDos.forEach(({ todo, shouldBeVisible }) => {
    todo.classList.add(shouldBeVisible ? "d-flex" : "hidden")
    todo.classList.remove(shouldBeVisible ? "hidden" : "d-flex")
  })
}

const searchToDos = event => {
  const toDos = Array.from(toDosContainer.children).map(todo => ({
    todo,
    shouldBeVisible: todo
      .textContent.toLowerCase().includes(event.target.value.toLowerCase())
  }))

  filterToDos(toDos)
}

formSearch.addEventListener("input", searchToDos);
formAddTodo.addEventListener("submit", addToDo);
toDosContainer.addEventListener("click", removeToDo);

