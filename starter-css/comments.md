# Comentários

* Não irá afetar o seu código
* Ajuda a lembrar blocos de código
* Deixa dicas para leitura
* Ajuda outros a entenderem
* Nunca esqueça de fechar um comentário aberto

Comentários começam com '/*' e terminam com '*/'.

```css

/* Basico */
/* ------------------------- */
body {
    font: 1em/150% Helvetica, Arial, sans-serif;
    padding: 1em;
    margin: 0 auto;
    max-width: 33em;
}

@media (min-width: 70em) {
    /* Let's special case the global font size. On large screen or window, 
    we increase the font size for better readability */
    body {
        font-size: 130%;
    }
}

h1 {font-size: 1.5em}

/* Elementos específicos */
/* ---------------------------------- */
div p, #id:first-line {
    background-color: red;
    border-radius: 3px;
}

div p {
    margin: 0;
    padding: 1em;
}

/* Seletor irmão p + p */
div p + p {
    padding-top: 0;
}
```

* Você pdoerá usar para desabilizar partes do seu código
``` css

/* .special {
    color: red;
} */

p {
    color: blue;
}
```

