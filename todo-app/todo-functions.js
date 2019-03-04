// Reads saved todos from localStorage
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todo')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
} 

// Save todos to localStorage
const saveTodos = function (todo) {
    localStorage.setItem('todo', JSON.stringify(todo))
}

// Render application todos based on filters
const renderTodos = function (todo, filters) {
    let filteredTodos = todo.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    }) 

    filteredTodos = filteredTodos.filter(function (todo){
        if (filters.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
    })  
    
    const incompleteTodos = filteredTodos.filter(function (todo){
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''

    filteredTodos.forEach(function (todo){  
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    }) 
    
    document.querySelector('#todos').appendChild(generateDOMSummary(incompleteTodos))
    
    
}

// Get the DOM elements for an individual todo
const generateTodoDOM = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    return p
}

// Get the DOM elements for list summary 
const generateDOMSummary = function (incompleteTodos) {
    const todosLeft = document.createElement('h2')
    todosLeft.textContent = `You have ${incompleteTodos.length} todos left` 
    return todosLeft
}
