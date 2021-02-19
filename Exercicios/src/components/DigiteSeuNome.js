import React, {useState} from 'react'
import { View, TextInput, Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View>
            <Text style={Estilo.txtG}>{nome}</Text>
            <TextInput
                style={Estilo.txtG}
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}