const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body ')
const removeElement = document.querySelector('#remove-note')
const noteID = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return notes.id === noteID
})

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.addEventListener('input', function(e) {
    note.title = e.target.value
    saveNotes()
})
 
bodyElement.addEventListener('input', function(e) {
    note.body = e.target.value
    saveNotes(notes)
})
removeElement.addEventListener('click', function() {
    removeNote(note.id)
    saveNotes(notes )
    location.assign('/index.html')
}) 