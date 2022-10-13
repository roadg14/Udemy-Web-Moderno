// JS não suporta nativamente tag's HMTML | React utiliza JSX para transpilar código HTML

import React from 'react' // Core do framework | Obrigatório quando há JSX
import ReactDOM from 'react-dom' // Conversa com a página

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>

        {/* Como passar componentes filhos diretamente na tag Pai */}
        <Pai nome="Douglas" sobrenome="Rodrigues" >

        <Filho nome="Ellie" />
        <Filho nome="Maria Luiza" />
        <Filho nome="Mike" />

        </Pai>
    </div>
, document.getElementById('root'))


//////// -> Arquivo Saudacao.jsx
// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//    <div>
//        <Saudacao tipo="Bom dia" nome="Aniele"/>
//    </div>
//, document.getElementById('root'))
//////////

//////////// -> Arquivo Multiplos.jsx
//import Multi, { BoaNoite } from './componentes/Multiplos'

//ReactDOM.render(
//    <div>
//        <Multi.BoaTarde nome='Douglas'/> // Da para chama tanto com o Multi, tanto sem.
//        <BoaNoite nome='Aniele'/>
//    </div>
//, document.getElementById('root')) // Pega elemento de id root e joga h1 dentro.
//////////////

//////////// -> Arquivo BomDia.jsx
// import BomDia from './componentes/BomDia'

// Exemplo 1: ReactDOM.render(<BomDia nome='Aniele' idade={25} />, document.getElementById('root')) // Sempre coloca o componente com letra maiuscula no caso: <Primeiro/>

// Exemplo 2: ReactDOM.render(<BomDia nome='Aniele!'/>, document.getElementById('root'))

// Exemplo 3: ReactDOM.render(<BomDia nome='Aniele'/>,document.getElementById('root'))

// Exemplo 4: ReactDOM.render(<BomDia nome='Aniele'/>, document.getElementById('root'))
////////////

///////// -> Arquivo Primeiro.jsx
// import Primeiro from './componentes/Primeiro' // Como importa o Arquivos.