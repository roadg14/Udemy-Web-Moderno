import Layout from '../components/Layout'

export function getStaticProps() { // Essa função pode gerar um numero Random, porem quando ele não estar com o Build gerado.
    return { // Para deixar Estatico a numeração gerada, deve usar o comando " npm run build " e em seguida o " npm start "
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            {/* Math.random -> ele gera numeros aleatorios. */}
            <div>{props.numero}</div>
        </Layout>
    )
}