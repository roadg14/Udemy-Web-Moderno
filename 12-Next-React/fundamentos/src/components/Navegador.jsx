import Link from 'next/link'
import style from '../styles/Navegador.module.css'

export default function Navegador(props) {
return ( // * Essa é a forma de fazer link entre as paginas no Next.js *
        <Link href={props.destino}>
            <div className={style.navegador} style={{
                backgroundColor: props.cor ?? 'crimson'
            }}>
                {props.texto}
            </div>
        </Link>
    )
}