import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  // Aqui vai definir qual vai fica visivel A tabela dos clientes ou 
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente) { // Faz com que apareça novamente os icones para Selecionar.
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) { // Seleciona para excluir.
    console.log(`Excluir... ${cliente.nome}`)
  }

  function novoCliente() { // Quando for Clicado leva para cadastrar um novo cliente.
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  async function salvarCliente(cliente: Cliente) { // A função para salvar o Cliente.
    await repo.salvar(cliente)
    obterTodos() // Mostrar o cliente no qual voce clica para alterar. 
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-400
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? ( // Isso vai definir quem é que vai ficar visivel no o Cadastro Simples Ou o Formulario.
          <>
          <div className="flex justify-end">   
            <Botao cor="green" className="mb-4"
            onClick={novoCliente}> {/* Dando ao formulario para quando for clicado nele ir para cadastrar.*/}
              Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}/>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}/> // Fazendo com quando for clicando em cancelar Volte para a tabela de usuarios.
        )}
  </Layout>
    </div>
  )
}
