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

document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log(e.target.textContent = 'The button was clicked')
}) 

document.querySelector('#remove-all') .addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note){
        note.remove()
    })
}) 

