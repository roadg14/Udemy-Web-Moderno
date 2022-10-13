import React from 'react'
import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado"> {/* Isso vai fica em props.children -> Layout.jsx */}
            <div className={styles.roxo}> {/* Assim que se chama uma class que esta no css className={style.roxo}*/}
                {/*Fazendo os link utilizando Link.*/}
                <h1>Estilo usando o CSS MÓDULOS</h1>
            </div>
        </Layout>
    )
}