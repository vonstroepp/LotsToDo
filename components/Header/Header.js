import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { appStyles } from '../../css/Styles';

export function Header({ title, bodyText }) {
  const styles = appStyles;
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title.toUpperCase()}</Text>
        <Text style={ styles.bodyText }>{ bodyText }</Text>
      </View>
    );
  }