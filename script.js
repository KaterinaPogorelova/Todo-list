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
allTodo.innerText = '2'
allTodo.classList.add('all-todo')
paragAll.append(allTodo)

const paragCompleted = document.createElement('p')
paragCompleted.innerText = 'Completed: '
paragCompleted.classList.add('show-todo__completed-todo')
showTodo.append(paragCompleted)

const completedTodo = document.createElement('span')
completedTodo.innerText = '1'
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

const todoTask = document.createElement('div')
todoTask.classList.add('todo__task')

const close = document.createElement('button')
close.classList.add('task__close')
todoTask.append(close)
const closePart1 = document.createElement('div')
closePart1.classList.add('task__close-sign', 'close-part-1')
close.append(closePart1)
const closePart2 = document.createElement('div')
closePart2.classList.add('task__close-sign', 'close-part-2')
close.append(closePart2)

const taskCheckbox = document.createElement('div')
taskCheckbox.classList.add('task__checkbox')
todoTask.append(taskCheckbox)
const check = document.createElement('div')
check.classList.add('check')
taskCheckbox.append(check)
const checkPart1 = document.createElement('div')
checkPart1.id = 'check-part-1'
checkPart1.classList.add('check-sign')
check.append(checkPart1)
const checkPart2 = document.createElement('div')
checkPart2.id = 'check-part-2'
checkPart2.classList.add('check-sign')
check.append(checkPart2)

const taskText = document.createElement('p')
taskText.innerText = 'Todo Text'
taskText.classList.add('task__text')
todoTask.append(taskText)

const taskDate = document.createElement('p')
taskDate.innerText = 'Date'
taskDate.classList.add('task__date')
todoTask.append(taskDate)

todoTaskwrapper.append(todoTask)

const task2 = todoTask.cloneNode(true)
task2.classList.add('task--active')
const check2 = task2.querySelector('.check')
check2.classList.add('check--active')
todoTaskwrapper.prepend(task2)

/*check.classList.add('check--active')
todoTask.classList.add('task--active')*/

/*Функция для удаления всех тасков */
btnDeleteAll.addEventListener('click', function () {
	let alltodoTasks = document.querySelector('.todo__task-wrapper')
	alltodoTasks.innerHTML = ''
	allTodo.innerText = '0'
	completedTodo.innerText = '0'
})
/*Функция, генерирующая дату в формате ДД.ММ.ГГГГ*/
function todoDate() {
	let date = new Date()
	let day = String(date.getDate())
	let month = String(date.getMonth() + 1)
	let year = date.getFullYear()
	if (day.length === 1) {
		day = '0' + day
	}
	if (month.length === 1) {
		month = '0' + month
	}
	let fullDate = `${day}.${month}.${year}`
	return fullDate
}
/*Сырая версия добавления тасков */
btnAdd.addEventListener('click', function () {
	if (todoHeaderInput.value !== "") {
		let newTask = todoTask.cloneNode(true)
		let newTaskText = newTask.querySelector('.task__text')
		let newTaskDate = newTask.querySelector('.task__date')
		newTaskText.innerText = todoHeaderInput.value
		newTaskDate.innerText = todoDate()
		todoTaskwrapper.prepend(newTask)
		allTodo.innerText = enlargeCountAllTask(allTodo.innerText)
	}
})
/*Функция для увеличения счётчика всех тасков и сделанных тасков*/
function enlargeCountAllTask(spanText) {
	let numText = Number(spanText)
	numText += 1
	return String(numText)
}
/*Функция для уменьшения счётчика всех тасков и сделанных тасков*/
function reduceCountAllTask(spanText) {
	let numText = Number(spanText)
	numText -= 1
	return String(numText)
}