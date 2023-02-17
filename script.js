const alltodoTasks = document.querySelector('.todo__task-wrapper');
const textInput = document.querySelector('.todo-header__input');

/*Функция для удаления всех тасков */
btnDeleteAll.addEventListener('click', function () {
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

// Удаление одной карточки
alltodoTasks.addEventListener('click', (event) => {
	const target = event.target.closest('.task__close');
	const task = target.parentElement;
	if (task.classList.contains('task--active')) {
		completedTodo.textContent = reduceCountAllTask(completedTodo.textContent)
	}
	task.remove();
	allTodo.textContent = reduceCountAllTask(allTodo.textContent)
});

// Изменение отмеченной карточки
alltodoTasks.addEventListener('click', (event) => {
	const target = event.target.closest('.task__checkbox');
	const check = target.firstElementChild;
	const task = target.parentElement;
	check.classList.toggle('check--active');
	task.classList.toggle('task--active');
	if (check.classList.contains('check--active')) {
		completedTodo.textContent = enlargeCountAllTask(completedTodo.textContent);
	} else {
		completedTodo.textContent = reduceCountAllTask(completedTodo.textContent);
	}
});

// Добавление новой карточки
let arrTodoText = [];
let arrTodoDate = [];
btnAdd.addEventListener('click', (event) => {
	const textInputValue = textInput.value;
	const currentDate = todoDate();
	if (textInputValue !== '') {
		arrTodoText.push(textInputValue);
		arrTodoDate.push(currentDate);

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
		taskText.innerText = textInputValue;
		taskText.classList.add('task__text')
		todoTask.append(taskText)

		const taskDate = document.createElement('p')
		taskDate.innerText = currentDate;
		taskDate.classList.add('task__date')
		todoTask.append(taskDate)

		todoTaskwrapper.prepend(todoTask);
		allTodo.textContent = Number(allTodo.textContent) + 1;
		textInput.value = '';
	}
})