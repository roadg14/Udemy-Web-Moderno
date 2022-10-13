import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void // Função de selecionar o cliente, tando para alterar ou para excluir.
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props) { // Função que vai mostrar as tabelas.

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado // Exibir as ações.

    function renderizarCabecalho() { // Função para renderizar.
        return (
            <tr>
                <th className="text-left p-4 ">Código</th>
                <th className="text-left p-4 ">Nome</th>
                <th className="text-left p-4 ">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }
    
    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={`cliente.id`} className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}> {/* Como fazer a zebrinha, nos nomes da tabela.*/}
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) { // Botões com as ações deles 
        return (
            <td className="flex justify-center"> {/* Essa className deixou os icones um do lado do outro. */}
                {props.clienteSelecionado ? ( // Para Selecionar o cliente.
                // Dando a Função onClick para Selecionar, Graças a Const no Arquivo index.tsx      
               <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-blue-500 rounded-full p-2 m-1
                    hover:bg-slate-50
                    `}>
                    {IconeEdicao}
                </button> // {/* Os icones importados la do arquivo Icones.txs */}
                ) : false}
                {props.clienteExcluido ? ( // Para Excluir o cliente. as funçãoes estão lá em cima.
                // Dando a Função onClick para Selecionar, Graças a Const no Arquivo index.tsx
                <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-slate-50
                    `}>
                    {IconeLixo}
                </button>
                ) : false}  

            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-50
                bg-gradient-to-r from-purple-500 to-blue-600
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}