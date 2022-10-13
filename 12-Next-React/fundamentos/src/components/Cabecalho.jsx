export default function Cabecalho(props) {
    // props é somente leitura.
    return (
        <header>
            <h1>{props.titulo}</h1> {/*Pegando propriedades de outros arquivos. com o props.*/}
            <h2>{props.titulo2}</h2>
        </header>
    )
}