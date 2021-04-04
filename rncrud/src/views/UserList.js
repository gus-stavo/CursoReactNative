import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron name='edit' color='orange' size={25} onPress={() => props.navigation.navigate('UserForm', user)}/>
                <ListItem.Chevron name='delete' color='red' size={25} onPress={() => confirmUserDeletion(user)} />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}