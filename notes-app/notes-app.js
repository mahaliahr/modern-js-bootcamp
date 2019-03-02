const notes = [{
    title: 'Work on my blog',
    body: 'Regularly update and post content'
}, {
    title: 'Habits to work on',
    body: 'Making sure to go to exercise class every week'
}, {
    title: 'Reading',
    body: 'Aiming to read more. Daily reading.'
}]

const filters = {
    searchText: ''
}

/* CRUD

-- localStorage only stores strings

- Create
localStorage.setItem('location', 'London')

- Read
console.log(localStorage.getItem('location'))

- Update
localStorage.setItem('location', 'London')

- Delete
localStorage.removeItem('location')

- Delete (all)
localStorage.clear() */

/* const user = {
    name: 'Mahalia',
    age: 29
} */

// JSON = JavaScript Object Notation 

// const userJSON = JSON.stringify(user)

// console.log(userJSON)
// localStorage.setItem('user', userJSON) 

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title 
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log(e.target.textContent = 'The button was clicked')
}) 

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})