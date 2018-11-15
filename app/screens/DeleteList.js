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
    ScrollView,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import ItemComponent from '../components/ItemComponents';

import { db } from '../config/db';
import { deleteList } from '../services/ItemService';

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
            /*llistes.map((d)=>{
                console.log(d.name);
            })
            console.log({numbers});*/
        });
    }

    handleChange(e) {
        this.setState({
            name: e.nativeEvent.text
        });
    }

    handleSubmit() {
        deleteList(this.state.name);
        this.textInput.clear();
    }

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.header}>Llistes disponibles:</Text>
                <ScrollView>
                    <View style={styles.button}>
                            {   
                                this.state.llistes.length > 0
                                ? <ItemComponent llistes={this.state.llistes} />
                                : <Text>No llistes</Text>
                            }
                    </View>
                </ScrollView>

                <Text style={styles.title}>Eliminar una llista de tasques</Text>
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
                        Eliminar
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
    title: {
        marginBottom: 35,
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
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