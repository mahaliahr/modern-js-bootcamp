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

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

/* console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day of month: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minute: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`) */

const dateOne = new Date('February 5, 2012 00:00:00')
const dateTwo = new Date('July 11, 2000 00:00:00')

const timestampOne = dateOne.getTime()
const timestampTwo = dateTwo.getTime()

console.log(dateOne)
console.log(dateTwo)

console.log(timestampOne)
console.log(timestampTwo)

if (timestampOne <  timestampTwo) {
    console.log(dateOne.toString())
} else if (timestampTwo <  timestampOne){
    console.log(dateTwo.toString())
}