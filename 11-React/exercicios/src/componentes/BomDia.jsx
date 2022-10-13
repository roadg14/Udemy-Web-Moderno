import React from "react"
// import React, { Fragment } from "react" // Uma forma para utilizar o React. para não precisa usa "React.Fragment".

// A priori não é possível retornar elementos JSX adjacentes

// React.Fragment -> serve como uma tag que encapsula elementos JSX adjacentes
// [] -> encapsula elementos JSX adjacentes | Última opção
// div -> encapsula elementos JSX adjacentes
// props -> convenção utilizada como parâmetro padrão

// Exemplo 1: export default props => <h1>Bom dia! <br/> {props.nome} tem {props.idade} anos!</h1> // props -> convenção utilizada como parâmetro padrão.

// Não pode se usar duas tags no mesmo componente

// Exemplo 2: export default props => // Para colocar suas tags pode se coloca dentro de uma 'div'.
//    <div>
//        <h1>Bom dia {props.nome}</h1>
//        <h2>Até breve!</h2>
//    </div>

// Exemplo 3: export default props => // 
//    <React.Fragment>
//        <h1>Bom dia {props.nome}!</h1>
//        <h2>Até breve!</h2>
//    </React.Fragment>

export default props => [ // Utilizando as -> [], ele só funcionar quando no final da tag  coloca a virgula.

    // key -> para facilitar identificação do elemento.
    // Essas key não podem ser iguais.
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>

]

// Esses modos vão fazer com que o html não desconfigure.