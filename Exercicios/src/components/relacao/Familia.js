import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Membro from './Membro'

export default props => {
    return (
        <>
            <Text style={Estilo.txtG}>[Início] Membros da Família:</Text>
            {props.children}
            <Text style={Estilo.txtG}>[Fim] Membros da Família:</Text>
        </>
    )
}