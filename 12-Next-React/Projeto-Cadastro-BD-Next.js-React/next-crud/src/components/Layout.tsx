import Titulo from "./Titulo"

interface LayoutProps { // 'interface' é um recurso do typescript
    titulo: string // Isso aqui te forçar a voce usa o titulo. no Layout, em caso de não querer é só colocar uma INTERROGAÇÃO '?' ASSIM -> titulo?:
    children: any
}

export default function Layout(props) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children }
            </div>
        </div>
    )
}