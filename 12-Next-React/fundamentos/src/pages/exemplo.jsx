// exemplo está linkado ao Cabecalho.jsx.
import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() { // Componenetes 
    return (
        
        <Layout titulo="Usando Componentes"> {/* Outra forma de chama tambem os componentes que não podem fica fora de uma div ou um tag. */}
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo2="Aprender Next.js na prática!"/>
        </Layout> 
    )
}

/* Uma forma que pode usar é:
        Exemplo - 1
            <div>
                <Cabecalho />
                <Cabecalho />
            </div>

        Exemplo - 2
            <>
                <Cabecalho />
                <Cabecalho />
            </>
        */