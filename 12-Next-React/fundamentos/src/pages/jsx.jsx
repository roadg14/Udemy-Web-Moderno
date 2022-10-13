import Layout from "../components/Layout"

export default function Jsx() { // Javascript Fora e sendo chamado com as CHAVE -> '{}'.
    const titulo = <h1>JSX é um conceito Cental</h1> // Uma forma de chamar tambem é criando uma const e chamando ela no jsx com AS '{}'

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendo o JSX">
            <div> {/* Isso aqui é JSX.w*/}
                {/*Para poder usa javascript dentro do React você tem que usar os PARES DE CHAVES "{}". */}
                {/*Podemos usa*/}
                {titulo} {/* Como chamar um const só precisa das chaves '{titulo}' */}
                {subtitulo()} {/* Como chamar uma function precisar das chavesx e '{subtitulo()}' */}
                <p>
                    {JSON.stringify({nome: 'Douglas', idade: 25})}
                </p>
            </div>
        </Layout>
    )
}