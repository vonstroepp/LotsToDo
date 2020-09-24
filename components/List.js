// app/components/List.js

import React from'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { appStyles } from '../../css/Styles';
import { itemListText, itemListTextStrike, circleInactive, circleActive, deleteIconColor } from '../css/Colors';

const styles = appStyles
// const { height, width } = Dimensions.get('window');
// console.log('width', width, height)

export default function List({params}) {
    
    const onToggleCircle = () => {
        const { isCompleted, id, completeItem, incompleteItem } = this.props;
        if(isCompleted){
            incompleteItem(id);
        } else {
            completeItem(id);
        }
    }
    
    const { text, deleteItem, id, isCompleted } = this.props;
    
    return (
            <View style = { styles.ListContainer }>
                <View style = { styles.column }>
                    <TouchableOpacity onPress = { onToggleCircle }>
                        <View 
                            style = {[
                                styles.circle,
                                isCompleted
                                    ? { borderColor: circleActive }
                                    : { borderColor: circleInactive}
                            ]}
                        />
                    </TouchableOpacity>
                    <Text 
                        style={[
                            styles.text,
                            isCompleted
                                ? {
                                    color: itemListTextStrike,
                                    textDecorationLine: 'line-through'
                                }
                                : {
                                    color: itemListText
                                }
                        ]}
                    >
                        { text }
                    </Text>
                </View>
                { isCompleted ? (
                    <View 
                        style = {styles.button}>
                        <TouchableOpacity onPressOut = { () => deleteItem(id) } >
                            <MaterialIcons 
                                name = "delete-forever"
                                size = { 24 }
                                color = { deleteIconColor }
                            />
                        </TouchableOpacity>  
                    </View>
                ): null
                } 
            </View>
    );
}

