/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { db } from '../config/db';
import { addTaskToList } from '../services/ItemService';
import { deleteList } from '../services/ItemService';

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
        let itemsRef = db.ref('/Llista/'+this.props.navigation.state.params.itemname);
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

    createButton (item, index) {
        // add a unique key, per react warnings
        return (
            <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => this.props.navigation.navigate('EditTask', {itemname: item.name, itemname2:this.props.navigation.state.params.itemname})}>
                    <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
    
    render() {
        return (
            
            <View style={styles.main}>
                <Text style={styles.header}>{this.props.navigation.state.params.itemname}</Text>

                <Text style={styles.title}>Tasques assignades a aquesta llista:</Text>
                <ScrollView>
                    <View style={styles.container}>
                            {this.state.llistes.map(this.createButton, this)}
                    </View>
                </ScrollView>

                <Text style={styles.title2}>Afegir una tasca a la llista:</Text>

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


                <TouchableHighlight
                    style = {styles.button2}
                    underlayColor= "white"
                    onPress = {() => this.props.navigation.navigate('EditList', {itemname: this.props.navigation.state.params.itemname})}
                >
                    <Text
                        style={styles.buttonText}>
                        Editar nom de la llista
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight
                    style = {styles.button}
                    underlayColor= "white"
                    onPress = {() => deleteList(this.props.navigation.state.params.itemname)&this.props.navigation.navigate('Lists')}
                >
                    <Text
                        style={styles.buttonText}>
                        Eliminar llista
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
        marginBottom: 10,
        marginTop: 30,
        fontSize: 25,
        textAlign: 'center'
    },
    title2: {
        marginBottom: 10,
        marginTop: 30,
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
    },
    button2: {
        height: 45,
        flexDirection: 'row',
        backgroundColor:'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 60,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
})
