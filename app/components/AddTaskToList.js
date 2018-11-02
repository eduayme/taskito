/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button, Picker} from 'react-native';
import firebase from 'firebase';
import {DrawerNavigator} from 'react-navigation';


export default class AddTaskToList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      nomllista: '',
      texttasca: '',
    }
  }

  Insert = () => {

  }

  SelectLlistes = () => {

      
  }

  render() {
  
    return (
      <View style={styles.container}>
      {this.SelectLlistes()}
        <Picker style = {styles.textinput} 
            selectedValue={this.state.language}
            style={{ height: 50, width: 300 }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
        </Picker>
        <TextInput style = {styles.textinput} 
        placeholder='Introdueix tasca'
        underlineColorAndroid={'transparent'}
        onChangeText={(text) => this.setState({texttasca:text})}
        value={this.state.texttasca}
        />
        
        <Button
          onPress={this.Insert}
          title="Afegir"
          color="#841584"
        />
       
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinput: {
    fontSize: 24,
    color: '#003399',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#003399',
    borderBottomWidth: 1,
    paddingRight:120,
    paddingTop: 60,
  },
});
