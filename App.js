import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { primaryGradientArray } from './css/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from './components/Header/Header'

export default function App() {
  
    const headerTitle = 'Lots to do!';
    const bodyText = "Open up App.js to start working on your app!";
    return (
      <View>
      <StatusBar  barStyle="light-content" />
        <LinearGradient colors={primaryGradientArray} style={styles.container}>
          <Header title={ headerTitle } bodyText={ bodyText }/>
        </LinearGradient>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
