import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => (
        <Fragment>
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>
    )

    //para retornar diversos elesmentos pelo mesmo componente, devemos envolver em um View ou Fragment(aceita propridade (por exemplo key)) ou <> e </>(não aceita propridade (por exemplo key))