import { useState } from "react"
import Cliente from "../core/Cliente"
import Botao from "./Botao"
import Entrada from "./Entrada"

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void // Cancelar se torna ativo.
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '') 
    const [idade, setIdade] = useState(props.cliente?.idade ?? '') 
    return (
        <div>
            {id ? (
                <Entrada 
                    somenteLeitura
                    texto="Código" 
                    valor={id}
                    className="mb-5"/>    
            ) : false}
            <Entrada
                texto="Nome" 
                valor={nome} 
                valorMudou={setNome} 
                className="mb-5"/>
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade }
                valorMudou={setIdade} />

            
            <div className="flex justify-end mt-3 ">
                <Botao cor="blue" className="mr-2" 
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}> {/* Onclick é para SALVAR e ALTERAR os clientes.*/}
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}> {/* fazendo com que o cancelar volte para a tabela. */}
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}