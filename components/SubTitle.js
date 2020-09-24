import React from 'react';
import { View, Text } from 'react-native';
import { appStyles } from '../css/Styles';

export function SubTitle({ subtitle }) {
  const styles = appStyles;
    return (
      <View style={styles.headerContainer}>
        <Text style={ styles.bodyText }>{ subtitle }</Text>
      </View>
    );
  }