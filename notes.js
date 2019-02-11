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

const findNote = function (notes, noteTitle) {
   return notes.find(function (note, index){
       return note.title.toLowerCase() === noteTitle.toLowerCase()
   })
}

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else
            return 0
    })
}
// filter always returns an array

const findNotes = function (note, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase()) 
        const isBodyMatch =  note.body.toLowerCase().includes(query.toLowerCase()) 
        return isTitleMatch || isBodyMatch
    })
}

/* console.log(findNotes(notes, 'work'))

const note =  findNote(notes, 'Reading')
console.log(note) */

sortNotes(notes)
console.log(notes) 