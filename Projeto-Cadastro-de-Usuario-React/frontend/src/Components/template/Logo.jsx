import './Logo.css'
import logo from '../../assets/imgs/logo.png' // Importando a imagem para a LOGO.
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="#" className="logo"> {/* E esse <a> é para fazer com que a imagem se torne um click.*/}
            <img src={logo} alt="logo" /> {/* Assim que se faz para chamar uma imagem no React.*/}
        </Link>
    </aside>