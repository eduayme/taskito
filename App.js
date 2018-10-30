/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import firebase from 'firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentWillMount() {

    // To Configure react native app with cloud of Google Firebase database !
    var config = {
      apiKey: "AIzaSyD8SzEiMaqZc2EB_SMVZ_8wt7S0-sAnfwE",
      authDomain: "rnfirebase-a06d1.firebaseapp.com",
      databaseURL: "https://rnfirebase-a06d1.firebaseio.com",
      projectId: "rnfirebase-a06d1",
      storageBucket: "rnfirebase-a06d1.appspot.com",
      messagingSenderId: "908392363509"
    };
    firebase.initializeApp(config);

        // seleccionar les dades del firebase cada cop que canvien
        firebase.database().ref('users').on('value', (data) => {
            console.log(data.toJSON());
        })

        // espera 1 segon i afegir
        setTimeout(() => {
            firebase.database().ref('users/008').set(
                {
                    name: 'PADROSAURIO',
                    age: 21
                }
            ).then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 1000);

        // fer un update
        firebase.database().ref('users/007').update({
            name: 'Pedro'
        }); 

        // fer delete
        // firebase.database().ref('users/007').remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>--- @oldrowchicks ---</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc800',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
