import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { appStyles } from '../css/Styles' ;

const Todo = ({todo, index, completeTodo, removeTodo}) => {
    
    const styles = appStyles;
    return (
        <View style = { styles.ListContainer } >
            <View style = { styles.column }>
                <Text style={[
                    styles.bodyText,
                    todo.isCompleted
                        ? {
                            color: styles.itemListTextStrike,
                            textDecorationLine: 'line-through'
                        }
                        : {
                            color: styles.bodyText
                        }
                ]}  
                >
                    {todo.text}
                </Text>
                <View style = { styles.column }>
                    <View 
                    style = {styles.button}>
                        <TouchableOpacity onPressOut = { () => completeTodo(index) } >
                            <MaterialIcons 
                                name = "done"
                                size = { 12 }
                                color = { "black" }
                            />
                        </TouchableOpacity>  
                    </View>
                    <View 
                    style = {styles.button}>
                        <TouchableOpacity onPressOut = { () => removeTodo(index) } >
                            <MaterialIcons 
                                name = "delete-forever"
                                size = { 12 }
                                color = { "black" }
                            />
                        </TouchableOpacity>  
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Todo;