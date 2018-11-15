/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput } from 'react-native';

import { db } from '../config/db';
import { addTaskToList } from '../services/ItemService';

let itemsRef = db.ref('/Llista');

export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskname: '',
            llistes: [],
            listname: '',
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
            taskname: e.nativeEvent.text
        });
    }
    handleSubmit() {
        addTaskToList(this.props.navigation.state.params.itemname,this.state.taskname);
        this.textInputTasca.clear();
    }

    render() {
        return (
            
            <View style={styles.main}>
                <Text style={styles.title}>Afegir una tasca a: {this.props.navigation.state.params.itemname}</Text>
                <TextInput
                    placeholder='Nom de la tasca'
                    underlineColorAndroid={'transparent'}
                    style={styles.itemInput}
                    onChange={this.handleChange}
                    ref={input => { this.textInputTasca = input }}
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a8ab7',
    },
    header: {
        fontStyle: 'normal',
        fontSize: 35,
        color: 'white',
        textAlign: 'center'
    },
    title: {
        marginBottom: 35,
        fontSize: 25,
        textAlign: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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
})
