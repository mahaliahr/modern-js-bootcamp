// DOM - Document Object Model

// Query and remove (singular)
//const p = document.querySelector('p')

// p.remove()

// Query all and remove

const ps = document.querySelectorAll('p')

ps.forEach(function (p){
    p.textContent = '*********'
    // p.remove()
    // console.log(p.textContent)
})