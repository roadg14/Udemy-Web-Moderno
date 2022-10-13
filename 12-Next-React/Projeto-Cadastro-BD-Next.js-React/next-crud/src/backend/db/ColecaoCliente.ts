import firebase from "../config";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    
    // Para deixar esse conversor privador é só coloca '#' ou o 'private' no inicio da frase.
    // CONVERSOR -> vai converter um class para ser persistido no firestore.
    #conversor = { // Quando for fazer essa Conversão, vai ter que retorna, dizendo nome, idade, e o ID.
        toFirestore(cliente: Cliente) { // isso aqui transforma uma class 
            return {
                nome: cliente.nome,
                idade: cliente.idade,
                
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> { // Formula para setar caso já esteja na lista e salvar caso não esteja na lista.
        if(cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
        .firestore().collection('clientes')
        .withConerter(this.#conversor)
    }
}