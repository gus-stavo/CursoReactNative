import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    const aleatorio = Math.floor(((props.max) * Math.random()) + 1)
    return (
        <Text style={Estilo.txtG}>O número escolhido entre {props.min} e {props.max} foi {aleatorio}.</Text>
    )
}