// Posso tambem criar uma pastar com o nome de navegacao e coloca o nome do arquivo de index.jsx
// Isso quando for refenciar precisa apenas o nome da pasta onde o arquivo tiver.
// Nesse caso isso só é necessario quando já existe um arquivo Index.jsx dentro de pasta -> pages.
import Layout from "../../components/Layout"

export default function Navegacao(props) {
    return (
        <Layout titulo="Exemplo de Navegação #01">
            <h1>Navegação #01</h1>
        </Layout>
    )
}