import { useState } from "react"
import Layout from "../components/Layout"


export default function Integracao() {

    const [codigo, setCodigo] = useState(0) // 
    const [cliente, setCliente] = useState({})

    // Função utilizando o await, que é uma forma Sincrona  

    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
    }

    //function obterCliente() { // Essa função vai fazer com que eu o fetch mostre o caminho para o resp obter a informação de onte ela está.
    //    fetch(`http://localhost:3000/api/clientes/${codigo}`) // O fetch -> ele faz uma acicronismo // Colocando o codigo ele vai chamar cada cliente pelo seu codigo. 
    //        .then(resp => resp.json()) // Buscar as informações.
    //        .then(dados => setCliente(dados)) // Obtem a informação e manda os dados para 
    //}

    return (
        <Layout>
            <div>
                <input type="number" value={codigo}
                    onChange={e => setCodigo(e.target.value)}/> {/* Se não tiver esse onChange com o comando o input se torna Inalteravel. não vai acrecentar em nada. */}
                <button onClick={obterCliente}>Obter Cliente</button> {/* onClick chama a função obterCliente -> e manda os dados para 'cliente' */}
            </div>
            <ul>
                <li>Codigo: {cliente.id}</li> {/* Aqui vai chamar o oque está no localhost:3000*/}
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}