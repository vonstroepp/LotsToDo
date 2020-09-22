import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { appStyles } from '../../css/Styles';

export function Header({ title, bodyText }) {
    console.log('Styles',  appStyles.headerContainer )
    return (
      <View style={appStyles.headerContainer}>
        <Text style={appStyles.headerText}>{title.toUpperCase()}</Text>
        <Text style={ appStyles.bodyText }>{ bodyText }</Text>
      </View>
    );
  }