import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

import AuthOrApp from './screens/AuthOrApp'
import Menu from './screens/Menu'
import commonStyles from './commonStyles'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const menuConfig = {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeTintColor: '#080'
    }

const DrawerNavigator = props => {
    const { email, name } = props.route.params
    return (
        <Drawer.Navigator drawerContentOptions={menuConfig}
            drawerContent={(props) => <Menu {...props} email={email} name={name} />}>
            <Drawer.Screen name='Today' options={{ title: 'Hoje' }}>
                {props => <TaskList title='Hoje' daysAhead={0} {...props} />}
            </Drawer.Screen>
            <Drawer.Screen name='Tomorrow' options={{ title: 'Amanhã' }}>
                {props => <TaskList title='Amanhã' daysAhead={1} {...props} />}
            </Drawer.Screen>
            <Drawer.Screen name='Week' options={{ title: 'Semana' }}>
                {props => <TaskList title='Semana' daysAhead={7} {...props} />}
            </Drawer.Screen>
            <Drawer.Screen name='Month' options={{ title: 'Mês' }}>
                {props => <TaskList title='Mês' daysAhead={30} {...props} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AuthOrApp' component={AuthOrApp} />
            <Stack.Screen name='Auth' component={Auth} />
            <Stack.Screen name='Home' component={DrawerNavigator} />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default Navigator