import Link from 'next/link'
import style from '../styles/Layout.module.css'

export default function Layout(props) { // props -> ela é chamada quando voce for pega algo de outro arquivo.
    return (
        <div className={style.layout}> {/*Como chamar o css module.*/}
            <div className={style.cabecalho}>
                <h1>{props.titulo ?? 'Mais um Exemplo'}</h1> {/* Foi buscar esse props no arquivo estiloso.jsx <Layout titulo="">  */}
                <Link href="/">Voltar</Link> {/*Fazendo os link utilizando Link.*/}
            </div>
            <div className={style.conteudo}>
                {props.children} {/* Isso Vai chamar oque tem dentro de estiloso.jsx */}
            </div>
            
        </div>
    )
}