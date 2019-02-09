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

/* const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
} */

const note =  findNote(notes, 'Reading')
console.log(note)
  