/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { addList } from '../services/ItemService';
import { addTaskToList } from '../services/ItemService';
import { db } from '../config/db';
let itemsRef = db.ref('/Llista');

export default class AddItem extends Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        llistes: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
      itemsRef.on('value', (snapshot) => {
          let data = snapshot.val();
          let llistes = Object.values(data);
          this.setState({llistes});
      });
    }

    handleChange(e) {
      this.setState({
        name: e.nativeEvent.text
      });
    }
    handleSubmit() {
      addList(this.state.name);
      this.textInput.clear();
    }

    _onPressButton(name) {
        Alert.alert('Obrir pantalla '+name)
    }
    createButton (item, index) {
        // add a unique key, per react warnings
        return (
            <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => this.props.navigation.navigate('AddTaskToList', {itemname: item.name})}>
                    <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    render() {
      return (
        <View style={styles.main}>
          <Text style={styles.header}>Llistes disponibles</Text>
          <ScrollView>
              <View style={styles.container}>
                      {this.state.llistes.map(this.createButton, this)}
              </View>
          </ScrollView>

          <Text style={styles.title}>Afegeix una llista nova</Text>
          <TextInput
                placeholder='Nom de la llista'
                underlineColorAndroid={'transparent'}
                style={styles.itemInput}
                onChange={this.handleChange}
                ref={input => { this.textInput = input }}
              />
          <TouchableHighlight
                  style = {styles.button}
                  underlayColor= "white"
                  onPress = {this.handleSubmit}
                >
                <Text
                    style={styles.buttonText}>
                    Afegir
                </Text>
          </TouchableHighlight>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#2a8ab7'
  },
  header: {
      fontStyle: 'normal',
      fontSize: 35,
      color: 'white',
      textAlign: 'center'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});