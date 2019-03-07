let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)  

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.addTodo.value,
        completed: false
    })
    
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ' '
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})