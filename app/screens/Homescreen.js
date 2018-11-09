/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Homescreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>PROJECTE TASKITO!</Text>
        <Text style={styles.text}>És un software per llistar tasques 
        entre un o diferents usuaris, tant en àmbits professionals com podrien ser projectes; o en un àmbit
        més quotidià com pot ser la llista de la compra d'una familia. </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a8ab7',
  },
  welcome: {
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
