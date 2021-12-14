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
  const dataRemove = clickedElement.dataset.remove
  const isUndefined = String(dataRemove) === 'undefined';

  if(!isUndefined){
    const toDo = document.querySelector(`[data-to-do ="${dataRemove}"]`)
    toDo.remove();
  }
}

const searchToDos = event => {
  const toDos = Array.from(toDosContainer.children);
  const valueOfInput = event.target.value;
  const hiddenToDos = toDos.filter(
    (toDo) =>
      !toDo.textContent.toLowerCase().includes(valueOfInput.toLowerCase())
  );
  const visibleToDos = toDos.filter((toDo) =>
    toDo.textContent.toLowerCase().includes(valueOfInput.toLowerCase())
  );
  hiddenToDos.forEach((toDo) => {
    toDo.classList.remove("d-flex");
    toDo.classList.add("hidden");
  });
  visibleToDos.forEach((toDo) => {
    toDo.classList.remove("hidden");
    toDo.classList.add("d-flex");
  });
}

formSearch.addEventListener("input", searchToDos);
formAddTodo.addEventListener("submit", addToDo);
toDosContainer.addEventListener("click", removeToDo);

