import React from 'react'
// import Filho from './Filho' // Importou o arquivo Filho.jsx
import { childrenWithProps } from '../utils/utils' // Importando o Arquivo utils.js.

export default props => // Essca formula faz com que todos os tenham o mesmo sobrenome.
    <div>
        <h1> {props.nome} {props.sobrenome} </h1>
        <h2>Filhos</h2>
        <ul>
            {/* Clona os paramentros para os outros ou para todos. */}
            { childrenWithProps(props) }
        </ul>
    </div>

// export default props =>
// <div>
//     <h1>{props.nome} {props.sobrenome}</h1>
//     <h2>Filhos</h2>
//     <ul>
//         <Filho nome="Pedro" sobrenome={props.sobrenome} />
//         <Filho {...props} />
//         <Filho {...props} nome="Carla" />
//     </ul> 
// </div> // {...props} filho recebe todas as propriedades do pai