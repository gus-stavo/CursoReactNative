import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

export default ({ route, navigation }) => {

    const [user, setUser] = useState(route.params ? route.params : {})

    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput 
                onChangeText={name => setUser({...user, name})}
                placeholder='Informe o nome'
                value={user.name}
                style={style.input}
            />
            <Text>E-mail</Text>
            <TextInput 
                onChangeText={email => setUser({...user, email})}
                placeholder='Informe o e-mail'
                value={user.email}
                style={style.input}
            />
            <Text>URL do avatar</Text>
            <TextInput 
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder='Informe a URL do avatar'
                value={user.avatarUrl}
                style={style.input}
            />
            <Button 
                title='Salvar'
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
})