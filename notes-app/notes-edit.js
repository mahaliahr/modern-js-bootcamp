const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body ')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteID = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteID
})

if (note === undefined) {
    location.assign('/notes-app/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', function(e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes()
    dateElement.textContent = generateLastEdited(note.updatedAt)

})
 
bodyElement.addEventListener('input', function(e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    dateElement.textContent = generateLastEdited(note.updatedAt)

})
removeElement.addEventListener('click', function() {
    removeNote(note.id)
    saveNotes(notes )
    location.assign('/notes-app/index.html')
})

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue) 
        note = notes.find(function (note) {
            return note.id === noteID
        })
        
        if (note === undefined) {
            location.assign('/notes-app/index.html')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt)

    }
})