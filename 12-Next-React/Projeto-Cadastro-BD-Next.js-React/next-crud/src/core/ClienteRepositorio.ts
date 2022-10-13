import Cliente from "./Cliente";

export default interface ClienceRepositorio { // Colocando metodos que vão ser Três
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}