// Reads saved todos from localStorage
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todos')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
} 

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todos from list
const removeTodo = function (id){
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })
    
    const incompleteTodos = filteredTodos.filter(function (todo){
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateDOMSummary(incompleteTodos))

    filteredTodos.forEach(function (todo){  
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    }) 
    
}

// Get the DOM elements for an individual todo
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    const button = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

    // Setup todo text
    text.textContent = todo.text
    todoEl.appendChild(text)

    // Setup button
    button.textContent = 'x'
    todoEl.appendChild(button)
    button.addEventListener('click', function(){
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary 
const generateDOMSummary = function (incompleteTodos) {
    const todosLeft = document.createElement('h2')
    todosLeft.textContent = `You have ${incompleteTodos.length} todos left` 
    return todosLeft
}
