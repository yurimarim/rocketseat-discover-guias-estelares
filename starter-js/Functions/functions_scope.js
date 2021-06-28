// function scope 
let subject = 'create video'

function createThink(subject) {
    return subject = 'study'
}

console.log(createThink(subject))
console.log(subject)

// Toda function sem return -> undefined