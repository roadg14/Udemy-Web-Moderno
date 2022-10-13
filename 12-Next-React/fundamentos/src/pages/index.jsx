// Importando o ' LINK ' do proprio Nexst.js 
import Navegador from '../components/Navegador'
// Observação: Esse 'Link' é para fazermos a navegação das paginas.
export default function Inicio() { // Modo errado "<h1>Douglas</h1>". -> Assim o Next não vai entender por causa das ASPAS "".
    return ( // Style={{}} => esta sendo usando como css interno, sem criar um arquivo. feito igual no html.
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap', /* Aceita quebra a linhas*/ 
            height: '100vh',
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" cor="brown" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="blue"/>
            <Navegador texto="JSX" destino="/jsx" cor="#9400d3"/>
            <Navegador texto="Navegação #01" destino="/navegacao/" cor="green"/> {/* Acessando da pasta navegacao. */}
            <Navegador texto="Navegação #02" destino="/cliente/sp-3/321" cor="red"/> {/* Acessando da pasta cliente. */}
            <Navegador texto="Componente com Estado" destino="/estado" cor="black"/> {/* Acessando da pasta pages */}
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="grey"/> {/* Acessando da pasta pages. */}
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a"/> {/* Acessando da pasta pages. */}
            {/* Esta indo buscar o arquivo em Navegador.jsx */}
        </div>
    ) // Parece html, mais não javascript
}