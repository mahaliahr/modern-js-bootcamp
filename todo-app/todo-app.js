const todo = [{
    text: 'Laundry',
    completed: true
}, {
    text: 'Go to the bank',
    completed: false
}, {
    text: 'Go shopping',
    completed: true 
}, {
    text: 'Tidy room',
    completed: false
}, {
    text: 'Make phone calls',
    completed: false
}]

const filters = {
    searchText: '',
    hideCompleted: false
}

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

    const todosLeft = document.createElement('h2')
    todosLeft.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(todosLeft)

    filteredTodos.forEach(function (todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })  

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
    e.target.elements.addTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todo, filters)
})