let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    }) 
    location.assign(`/notes-app/edit.html#${id}`)
    saveNotes(notes)
}) 

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

/* const now = moment()
now.subtract(1, 'week').subtract(20, 'days')
console.log(now.format('MMMM Do, YYYY',))
console.log(now.fromNow())

const nowTimestamp = now.valueOf()
console.log(moment(nowTimestamp).toString()) */

const birthday = moment()
birthday.year(1990).month(1).date(13)

console.log(birthday.format('MMM D, YYYY')) 