import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'


const initialState = {
    user: { name: '', email: '' },
    list: []
}

// Componente de classe pois elemento possuíra estado e ciclo de vida
export default class UserCrud extends Component {

    state = { ...initialState } // Aqui é inicializado o state.

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() { // Essa função vai ser responsavel para limpar o formulario quando o usuario erra algo ou ate mesmo começa do inicio. 
        this.setState({ user: initialState.user }) // Oque vai ser limpo é oque estiver no user: nome e email .
    }

    // O save vai ser tanto para salvar um novo usuario tanto para alterar um que já esta salvo.
    save() { // Para incluir um novo usuario usaremos o metodo POST // Para alterar usa o PUT ou PET.
        const user = this.state.user
        const method = user.id ? 'put' : 'post' // Se id for válido usuário será alterado, se não será adicionado.
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl // Em caso de id ja estiver cetado -> `${baseUrl}/${user.id}` , caso não esteja ele vai passar só o -> baseUrl.
    
        axios[method](url, user) // Vai fica sempre -> .Atualizando formulário após adicionar/alterar usuário
            .then(resp => { // No ".then(resp =>" vai mostrar se foi adicionado ou alterado.
                const list = this.getUpdateList(resp.data)
                this.setState({ user: initialState.user, list })
                // Atualizando formulário após adicionar/alterar usuário
            })
    }

    getUpdateList(user, add = true) {
        // filter -> gera uma nova lista a partir dos resultados filtrados.
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user) // unshift -> adiciona elemento na primeira posição da lista.
        return list // Retorna lista atualizada para axios alterar seu estado.
    }

    // Uma função para atualizar os Campos que são Nome e Email.
    updateField(event) {
        const user = { ...this.state.user} // Aqui é para clonar o usuario.
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() { // Todos os 'onChange' aponta para as funções para qual eles vão funcionar. -> onChange{e => this.Funçãoquefoicriada(e)}
            return (
                <div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" className="form-control"
                                    name="name"
                                    value={this.state.user.name}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o nome..." />
                            </div>
                        </div>
    
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>E-mail</label>
                                <input type="text" className="form-control"
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o e-mail..." />
                            </div>
                        </div>
                    </div>
    
                    <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary"
                                onClick={e => this.save(e)}>
                                Salvar
                            </button>
    
                            <button className="btn btn-secondary ml-2"
                                onClick={e => this.clear(e)}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )
        }

        // Funções para fazer load e remove de usuarios.
        load(user) { // Carregar os Usuarios.
            this.setState({ user })
        }

        remove(user) { // Para remover um Usuario.
            axios.delete(`${baseUrl}/${user.id}`).then(resp => { // Para ir no BancoDeDados e Excluir ele da lista.
                const list = this.getUpdateList(user, false)
                this.setState({ list })
            })
        }
    
        renderTable() {
            return (
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()} {/*Isso Aqui vai renderizar as linhas já que é uma tabela. isso ai é uma função*/}
                    </tbody>
                </table>
            )
        }
        
        renderRows() {
            return this.state.list.map(user => {
                return (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className="btn-group">
                            <button className="btn btn-warning"
                                onClick={() => this.load(user)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className="btn btn-danger ml-1"
                                onClick={() => this.remove(user)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                )
            })
        }

    // Componente de classe precisa ser renderizado
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}