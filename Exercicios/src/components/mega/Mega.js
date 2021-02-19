import React, { Component } from 'react'
import { Button, Text, TextInput } from 'react-native'
import Estilo from '../estilo'

export default class Mega extends Component {
    
    state = {
        qtdeNumeros: this.props.qtdeNumeros || 0,
        numeros: []
    }

    /*constructor(props) {
        super(props)

        this.alterarQtdeNumeros = this.alterarQtdeNumeros.bind(this)
    }*/

    alterarQtdeNumeros = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
        this.gerarNumeros(qtde)
    }

    gerarNumeros = (qtde) => {

        const verificaArray = (temp) => {
            if(1==2) {

                return true
            }
            else return false
        }

        let temp = []

        for (let c = 0; c < qtde; c++){

            let num = Math.floor(((60) * Math.random()) + 1)
            temp.push(num)
        }

        this.setState({numeros: temp.sort((a,b) => {
            return a-b
        })})
        console.warn(verificaArray(temp))
    }

    render() {
        return (
            <>
            <Text style={Estilo.txtG}>
                Gerador de Mega-Sena{' '}
                {this.state.qtdeNumeros}
            </Text>
            <TextInput
            keyboardType="numeric"
                style={{borderBottomWidth: 1}} 
                placeholder="Qtde de Números"
                value={`${this.state.qtdeNumeros}`}
                onChangeText={/*qtde => this.alterarQtdeNumeros(qtde)*/this.alterarQtdeNumeros}
            />
            <Text>
                {this.state.numeros.join([separador = ','])}
            </Text>
            </>
        )
    }
}