# Scope

* Escopo determina a visibilidade de alguma variável no JS.

# Block Statement -> Declaração de Bloco

```js
// Vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de:
`block-scoped`





## var
```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> esiste x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)
```

## let e const
```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe x antes do bloco? ', y)

    {
        let y = 0
    }

    console.log('> existe x depois do bloco? ', y)
```