import { useState } from 'react' // Necessario para poder realizar esse contador.
import Layout from '../components/Layout'

export default function Estado() { 
    // React Hooks
    const [numero, setNumero] = useState(0) // Utilizando as [] o numero e o setNumero vão continuar com o valor de 0
    // por conta do useState(0) -> na função que o setNumero vai atualizar o numero adicionando  + 1. fazendo a soma de um contador.

    function incrementar() { // A função de adicionar os clicks que foram dados no caso a soma.
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}

// Uma função para atualizar e incrementar numeros, um Contador
    //const numero = useState(0)

    // let numero = state[0] // numero se torna -> 0 
    // let alterarNumero = state[1] // a Alteração sempre de um e um

    //function incrementar() { // Um função para adicionar o numero.
        //alterarNumero(numero + 1) // Aqui faz a soma toda vez que for clicado vai soma + 1
    //}