const toDosContainer = document.querySelector('.todos-container');
const formAddTodo = document.querySelector('.form-add-todo');
const formSearch = document.querySelector('.form-search');

formAddTodo.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = event.target.add.value.trim();
    if(inputValue !== ''){
        toDosContainer.innerHTML += 
        `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`
      event.target.reset();
    }
})

toDosContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  const classesOfclickedElement = Array.from(clickedElement.classList);
  const haveDeleteClass = classesOfclickedElement.includes("delete");

  if (haveDeleteClass) {
    clickedElement.parentElement.remove();
  }
});

formSearch.addEventListener("input", (event) => {
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
});