import React from "react" // Tem que importa para funcionar no Arquivo Pai.jsx

export function childrenWithProps(props) { // Essca formula faz com que todos os tenham o mesmo sobrenome.
    return React.Children.map(props.children, child => { // children -> igual a Filhos e child -> Filho.
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}