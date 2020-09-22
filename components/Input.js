// app/components/input.js

import React from 'react';
import { appStyles } from '../css/Styles' ;
import { StyleSheet, TextInput } from 'react-native';
import { inputPlaceholder } from '../css/Colors';

const Input = ({inputValue, onChangeText, onDoneAddItem}) => {
    return (
    <TextInput 
        style = { appStyles.input }
        value = { inputValue }
        onChangeText = { onChangeText }
        placeholder = "Type here to add note"
        placeholderTextColor = { inputPlaceholder }
        multiline = { true }
        autoCapitalize = "sentences"
        underlineColorAndroid = "trasparent"
        selectionColor = { 'white' }
        maxLength = { 30 }
        returnKeyType = "done"
        autoCorrect = { false }
        blurOnSubmit = { true }
        onSubmitEditing = { onDoneAddItem }
    />
    )
};

 export default Input;

