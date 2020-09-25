import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { appStyles } from '../css/Styles' ;

const TodoForm = ({ addTodo }) => {
    const styles = appStyles;
    const [value, setValue] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    }

    return (
        <View>
        <TextInput 
            style = { styles.input }
            value = { value }
            onChangeText = {event => {
                setValue(event)}
            } 
            placeholder = "Type here to add note"
            placeholderTextColor ="antiquewhite"
            multiline = { true }
            autoCapitalize = "sentences"
            underlineColorAndroid = "transparent"
            selectionColor = "white"
            maxLength = { 130 }
            returnKeyType = "done"
            autoCorrect = { false }
            blurOnSubmit = { true }
            onSubmitEditing = { handleSubmit }
    />
            <Button onPress= { handleSubmit } title = "Add new Todo" />
    </View>   
    )

}

export default TodoForm;