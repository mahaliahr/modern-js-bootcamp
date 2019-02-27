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
    searchText: ''
}

const renderTodos = function (todo, filters) {
    const filteredTodos = todo.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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
