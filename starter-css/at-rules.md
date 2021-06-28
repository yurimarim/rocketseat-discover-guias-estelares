# At-rules  @

* Está relacionado ao comportamento do CSS
* Começa com o sinal `@` seguido do identificado e valor

## Exemplos Comuns

- @import       /* incluir um CSS externo */

- @media        /* regras condicionais para dispositivos */

- @font-face    /* fontes externas */

- @keyframes    /* Animation */

```css
@import "http://local.com/style.css";
/* ou */
@import url("http://local.com/style.css");


@media (min-width: 500px) {
    /* rules here */ 
}

@font-face {
   /* rules here */  
}

@keyframes nameofanimation {
    /* rules here */ 
}

```