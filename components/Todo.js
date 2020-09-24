import React from 'react';
import { View, Text } from 'react-native';
import { appStyles } from '../css/Styles' ;

const Todo = ({todo, index, completeTodo, removeTodo}) => {
    
    const styles = appStyles;
    return (
        <View style = { styles.ListContainer } >
            <View style = { styles.column }>
                <Text style = { styles.bodyText }>
                    {todo.text}
                </Text>
            </View>
        </View>
    )
}

export default Todo;