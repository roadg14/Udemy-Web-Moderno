interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void

}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'
    return ( // Dando o onClick para da o Evento de ir para o cadastro.
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-700 to-${cor}-300
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}