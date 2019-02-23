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

document.querySelector('#remove-all') .addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note){
        note.remove()
    })
}) 

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})