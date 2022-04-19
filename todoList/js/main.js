
// ! stocker tous les éléments HTML dont on a besoin dans des variables
let addToDo = document.getElementById('addToDo');
let submitToDoInput = document.getElementById('submitButton');
let itemContent = document.getElementById('todolistOl');
let boutondedelete = document.querySelectorAll('clearItem');
let filterOption = document.querySelector('.filter-todo');
let todoList = document.querySelector('.filter-todo');

////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', getTodos()) // get the todos after the page has been loaded
submitToDoInput.addEventListener('mouseup', addAToDo); // on click, add a todo
itemContent.addEventListener('click', deleteCheck); // on click, delete from browser and from localStorage



function addAToDo(event) {
    // prevent form from submitting
    event.preventDefault();
    let toDoItem = document.createElement('div');
    toDoItem.className = 'todoItem';
    let ToDoTextLi = document.createElement('li');
    ToDoTextLi.className = ('toDoTextLi');
    ToDoTextLi.innerText = addToDo.value;
    toDoItem.appendChild(ToDoTextLi);
    let doneButton = document.createElement('button');
    doneButton.className = 'doneItem';
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    toDoItem.appendChild(doneButton);
    let clearItemButton = document.createElement('button');
    clearItemButton.className = 'clearItem';
    clearItemButton.innerHTML = '<i class="fas fa-trash"></i>';
    toDoItem.appendChild(clearItemButton);
    itemContent.appendChild(toDoItem);
    saveLocalTodos(addToDo.value);
    console.log(toDoItem);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////

// ! put each input values into an array 'todos', then save this array in the local storage.
function saveLocalTodos(todo) {
    let todos;
    (localStorage.getItem('todos') === null) ? todos = [] : todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    addToDo.value = '';
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// ! if the array containing the input values doesn't exist into the local storage, create it
// ! If it exists, get it from the local storage, then display each one of its values with their HTML 
// ! parents and siblings into the todos content, so that the user can see the last todos added. 
function getTodos() {
    let todoses;
    (localStorage.getItem('todos') === null) ? todoses = [] : todoses = JSON.parse(localStorage.getItem('todos'));
    todoses.forEach(todoLocalItem => {
        let toDoItem = document.createElement('div');
        toDoItem.className = 'todoItem';
        let ToDoTextLi = document.createElement('li');
        ToDoTextLi.className = ('toDoTextLi');
        ToDoTextLi.innerText = todoLocalItem;// récupères la valeur text qui est sauvegardée dans le localStorage
        toDoItem.appendChild(ToDoTextLi);
        let doneButton = document.createElement('button');
        doneButton.className = 'doneItem';
        doneButton.innerHTML = '<i class="fas fa-check"></i>';
        toDoItem.appendChild(doneButton);
        let clearItemButton = document.createElement('button');
        clearItemButton.className = 'clearItem';
        clearItemButton.innerHTML = '<i class="fas fa-trash"></i>';
        toDoItem.appendChild(clearItemButton);
        itemContent.appendChild(toDoItem);
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// ! Si l'on clique sur clear Item, on efface complètement l'item sélectionné
function deleteCheck(e) {
    // ! delete the browser version of 
    let todoses;
    let trash = document.querySelectorAll('.toDoTextLi');
    let item = e.target;
    const itemParentDelete = item.parentElement;

    (localStorage.getItem('todos') === null) ? todoses = [] : todoses = JSON.parse(localStorage.getItem('todos'));

    if (item.className === 'clearItem') {
        itemParentDelete.classList.add('fall');
        itemParentDelete.addEventListener('transitionend', () => {
            itemParentDelete.remove();
            for (let i = 0; i < todoses.length; i++) {
                (todoses[i] === trash[i].innerText) ? todoses.splice(todoses[i], 1) : console.log('ok');
                localStorage.setItem('todos', JSON.stringify(todoses));
            }
        });
    };

    // console.log(todoses);

    // ! do something on the after a click on the done button
    if (item.className === "doneItem") {
        const itemParentDone = item.parentElement;
        itemParentDone.classList.toggle("completed");
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

