const todo = document.getElementById('root');
todo.classList.add('todo')

const todoHeader = document.createElement('div')
todoHeader.classList.add("todo__todo-header")
todo.append(todoHeader)

const btnDeleteAll = document.createElement('button')
btnDeleteAll.innerText = 'Delete All'
btnDeleteAll.classList.add('button', 'todo-header__btn', 'btn--delete-all')
todoHeader.append(btnDeleteAll)

const btnDeleteLast = document.createElement('button')
btnDeleteLast.innerText = 'Delete Last'
btnDeleteLast.classList.add('button', 'todo-header__btn', 'btn--delete-last')
todoHeader.append(btnDeleteLast)

const todoHeaderInputWrapper = document.createElement('div')
todoHeaderInputWrapper.classList.add('todo-header__input-wrapper')
todoHeader.append(todoHeaderInputWrapper)

const todoHeaderInput = document.createElement('input')
todoHeaderInput.type = 'text'
todoHeaderInput.placeholder = 'Enter todo ...'
todoHeaderInput.classList.add('input', 'todo-header__input')
todoHeaderInputWrapper.append(todoHeaderInput)

const btnAdd = document.createElement('button')
btnAdd.innerText = 'Add'
btnAdd.classList.add('button', 'todo-header__btn', 'btn--add')
todoHeaderInputWrapper.append(btnAdd)

const showTodo = document.createElement('div')
showTodo.classList.add('todo__show-todo')
todo.append(showTodo)

const paragAll = document.createElement('p')
paragAll.innerText = 'All: '
paragAll.classList.add('show-todo__all-todo')
showTodo.append(paragAll)

const allTodo = document.createElement('span')
allTodo.innerText = '0'
allTodo.classList.add('all-todo')
paragAll.append(allTodo)

const paragCompleted = document.createElement('p')
paragCompleted.innerText = 'Completed: '
paragCompleted.classList.add('show-todo__completed-todo')
showTodo.append(paragCompleted)

const completedTodo = document.createElement('span')
completedTodo.innerText = '0'
completedTodo.classList.add('completed-todo')
paragCompleted.append(completedTodo)

const btnShowAll = document.createElement('button')
btnShowAll.innerText = 'Show All'
btnShowAll.classList.add('button', 'show-todo__btn', 'btn--show-all')
showTodo.append(btnShowAll)

const btnShowCompleted = document.createElement('button')
btnShowCompleted.innerText = 'Show Completed'
btnShowCompleted.classList.add('button', 'show-todo__btn', 'btn--show-completed')
showTodo.append(btnShowCompleted)

const showTodoInputWrapper = document.createElement('div')
showTodoInputWrapper.classList.add('show-todo__input-wrapper')
showTodo.append(showTodoInputWrapper)

const searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.placeholder = 'Search...'
searchInput.classList.add('input', 'show-todo__search-input')
showTodoInputWrapper.append(searchInput)

const todoTaskwrapper = document.createElement('div')
todoTaskwrapper.classList.add('todo__task-wrapper')
todo.append(todoTaskwrapper)