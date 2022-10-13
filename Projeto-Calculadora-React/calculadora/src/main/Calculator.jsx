import React, { Component } from 'react' // Importando para o "Component".
import './Calculator.css' // Referenciando já o CSS.

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = { // Aqui vai zerá o contador.
    displayValue: '0', // Diz o valor do Display
    clearDisplay: false, // Para limpar o Display
    operation: null,
    values: [0, 0], //
    current: 0
}

export default class Calculator extends Component {

    // Criado um clone do objeto e atribuido ao state.
    state = { ...initialState } // adicionando a contate para poder fazer a calculadora adicionar ou limpar

    constructor(props) { // função para da aos buttons funcionamento. a cada click.
        super(props)
        
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() { // Função de limpar os numeros digitados
        this.setState({ ...initialState}) // Fazendo com que o contador seja limpo, caso seja apertando ele volta para o estado inicial.
    }


    // Toda essa função é para ativa as operações de SOMA, SUBTRAÇÃO, DIVISÃO, MULTIPLICAÇÃO.
    // 
    setOperation(operation) { // Função para setar os calculos para definir se é uma: SOMA, SUBTRAÇÃO, DIVISÃO, MULTIPLICAÇÃO.
        
        if(this.state.current === 0) { // Mexer em current para pegar segundo valor do vetor.
            this.setState({ operation, current: 1, clearDisplay: true }) // Quando recebe uma operação troca para o segundo elemento do vetor.
        } else {
            const equals = operation === '=' // Quando for clickando em -> ' = '
            const currentOperation = this.state.operation // Pegar operação corrente.

            const values = [...this.state.values]
            try {
                // Executa as operações com os dois indices do vetore armazena no indice 0.
                values[0] = eval (`${values[0]} ${currentOperation} ${values[1]}`)
                if (isNaN(values[0]) || !isFinite(values[0])) { // Faz com que pare que os numeros sejam infintos sendo digitados.
                    this.clearMemory()
                return
                }
            } catch (e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0], // Resultado da operação exibido no display.
                operation: equals ? null : operation, // Se for igual exibe resultado senão segue p/ próxima operação.
                current: equals ? 0 : 1,
                clearDisplay: !equals, // Se for diferente de equals não limpa display.
                values
            })
        }
    }

    // Toda a função faz com que inclua numero no display da calculadora.
    addDigit(n) { // Adiciona o digito quando clicka.
        if (n === '.' && this.state.displayValue.includes('.')) { // Impede que usuário digite um outro -> ponto '.' caso o display já possua '.'
            return
        }

        const clearDisplay = this.state.displayValue === '0' // Quando precisa limpar display
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue // Se precisar limpar display o valor corrente assume vazio, caso contrário assume o valor do display
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false }) // Mudando o estado da aplicação que no caso é que quando for clickado o numero ele vai ser adicionado.
    
        if (n !== '.') {
            const i = this.state.current // Pega indice do elemento digitado.
            const newValue = parseFloat(displayValue) // Converte em Float.
            const values = [...this.state.values] // Clona em um novo array.
            values[i] = newValue
            this.setState({ values }) // Substitui novo array dentro de State
            console.log(values)
        }
    }

    render() {
        return (
            <div className="calculator"> {/* Para se Referencia class no REACT eles usam assim-> className */}
                <Display value={this.state.displayValue}/> {/*Mostra o valor que tem lá no displayValue.*/}
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}




// constructor(props) {
//     super(props)
//     this.clearMemory = this.clearMemory.bind(this)
//     this.setOperation = this.setOperation.bind(this)
//     this.addDigit = this.addDigit.bind(this)
//     // This será resolvido para as funções
//     // Bind retorna um objeto/função

//     // ||
//     // Recebendo valores e passando para as funções 
//     // const addDigit = n => this.addDigit(n)
//     // const setOperation = op => this.setOperation(op)
// }