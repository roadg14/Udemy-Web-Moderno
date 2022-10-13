// Procurar cliente por Codigo
// Como deixar o Arquivo Dinâmica ? -> tem que se coloca entre Cochetes [] para fica assim -> [codigo].jsx
import Layout from "../../../components/Layout"
import { useRouter } from 'next/router'  // Esse import vai ajudar a ter acesso ao codigo.
// Atraves do router.query.codigo => podemos acessar o Codigo

export default function ClienteProCodigo() {
        const router = useRouter() // Utilizando o router para acessar os codigos.

        return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div> {/* Como acessar o codigo ou ate mesmo a filial.*/}
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}

// Pasta Cliente normal, depois criar uma pasta com do jeito [filial] e colocar o arquivo jsx. dentro.
// Pasta Cliente -> [filial] -> Arquivo.jsx