import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

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

        const verificaArray = (temp, num) => {

            let flag = false;

            for (let i = 0; i < temp.length; i++) {
                if(num == temp[i]) {
                    flag = true
                    break
                }
            }
            return flag
        }

        let temp = []
        let num

        for (let c = 0; c < qtde; c++){

            do {
                num = Math.floor(((60) * Math.random()) + 1)
            }
            while(verificaArray(temp, num))

            temp.push(num)
        }

        this.setState({numeros: temp.sort((a,b) => {
            return a-b
        })})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero  key={num} num={num} />
        })
    }

    render() {
        return (
            <>
            <Text style={Estilo.txtG}>
                Gerador de Mega-Sena{' '}
            </Text>
            <TextInput
            keyboardType="numeric"
                style={{borderBottomWidth: 1}} 
                placeholder="Qtde de Números"
                value={`${this.state.qtdeNumeros}`}
                onChangeText={/*qtde => this.alterarQtdeNumeros(qtde)*/this.alterarQtdeNumeros}
            />
            <View style={{
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {this.exibirNumeros()}
            </View>
            </>
        )
    }
}