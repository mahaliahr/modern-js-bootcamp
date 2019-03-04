let todo = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todo, filters)  

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todo, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    todo.push({
        text: e.target.elements.addTodo.value,
        completed: false
    })
    
    renderTodos(todo, filters)
    e.target.elements.addTodo.value = ' '
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todo, filters)
})