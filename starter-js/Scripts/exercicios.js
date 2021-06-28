// 1. Declare uma variável de nome weight.
// let weight

// 2. Que tipo de dado é a variável acima?
// console.log(typeof weight) // undefined


/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: boolean
*/

// let name = "Yuri"
// let age = 20
// let stars = 8.4
// let isSubscribed = true

/*

4. A variável student abaixo é de que tipo de dados?
// Object
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

*/

let student = {
    name: "Yuri",
    age: 20,
    weight: 87.4,
    isSubscribed: true
};

console.log(student)

// 4.2
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

// --------~------------------~----------------------~-------------------~-----------------~-~-~-~--

/*

    5. Declare uma variável do tipo Array, de um nome students e atribua a ela nenhum valor, ou seja,
    somente o Array vazio.

*/

/*

    6. Reatribua o valor para a variável acima, colocando dentro dela o objeto 
    student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

*/

/*

    7. Coloque no console o valor da posição zero do Array acima.

*/

// 5 - Array
let students = []

// 6 - Atribuiu o objeto student dentro da array students
students = [
    student
]
console.log(students)

// 7 - mostra no console a posição zero da array
console.log(students[0])

// --------~------------------~----------------------~-------------------~-----------------~-~-~-~--

/*

    8. Crie um novo student e coloque na posição 1 do Array students

*/

const john = {
    name: "John",
    age: 32,
    weight: 95.2,
    isSubscribed: true,
}

students = [
    student,
    john
]

console.log(students)

/*

    9. Sem rodar o código responda qual é a respota do código abaixo e por que? Após sua resposta,
    rode o código e veja se acertou.

    console.log(a)
    var a = 1

    Resposta -->  undefined... por que a variável foi declarada após o console.log
    e não antes.
    a leitura do código é realizada de cima para baixo.

*/
