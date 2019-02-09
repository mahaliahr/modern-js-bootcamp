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

/*console.log(notes.pop()) // removes last item in an array. returns the item 
notes.push('My new note') // adds new item to the end

console.log(notes.shift()) // removes first item in array
console.log(notes.unshift('My first note')) // adds first item in the array

// notes.splice(1, 1, 'This is the new second item') // two arguments, index first, then number of things you want to remove

notes[2] = 'This is now the new Note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

*/

console.log(notes.length)
console.log(notes)

/* for loop examples

for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = 0; count < notes.length; count ++) {
    console.log(notes[count])
}

*/

const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habits to work on'
})

console.log(index)