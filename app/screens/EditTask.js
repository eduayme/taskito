/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput} from 'react-native';
import { db } from '../config/db';
import { updateTask } from '../services/ItemService';
import { deleteTaskToList } from '../services/ItemService';
let itemsRef = db.ref('/Llista');


export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskname: '',
            newtaskname: '',
            llistes: [],
            listname: '',
        }
        this.handleChangeList = this.handleChangeList.bind(this);
        this.handleChangeTask = this.handleChangeTask.bind(this);
        this.handleChangeNewTask = this.handleChangeNewTask.bind(this);
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

    handleChangeList(e) {
        this.setState({
            listname: e.nativeEvent.text
        });
    }
    handleChangeTask(e) {
        this.setState({
            taskname: e.nativeEvent.text
        });
    }
    handleChangeNewTask(e) {
        this.setState({
            newtaskname: e.nativeEvent.text
        });
    }
    handleSubmit() {
        updateTask(this.props.navigation.state.params.itemname2,this.props.navigation.state.params.itemname, this.state.newtaskname);
        this.textInputNouNom.clear();
        this.props.navigation.navigate('AddTaskToList', {itemname: this.props.navigation.state.params.itemname2})
    }

    render() {
        return (
            
            <View style={styles.main}>
                <Text style={styles.header}>{this.props.navigation.state.params.itemname} </Text>
               
                <Text style={styles.title}>Editar nom de la tasca</Text>
                <TextInput
                    placeholder='Nou nom de la tasca'
                    underlineColorAndroid={'transparent'}
                    style={styles.itemInput}
                    onChange={this.handleChangeNewTask}
                    ref={input => { this.textInputNouNom = input }}
                />


                <TouchableHighlight
                    style = {styles.button}
                    underlayColor= "white"
                    onPress = {this.handleSubmit}
                >
                    <Text
                        style={styles.buttonText}>
                        Editar
                    </Text>
                </TouchableHighlight>


                <TouchableHighlight
                    style = {styles.button2}
                    underlayColor= "white"
                    onPress = {() => deleteTaskToList(this.props.navigation.state.params.itemname2,this.props.navigation.state.params.itemname)&this.props.navigation.navigate('AddTaskToList', {itemname: this.props.navigation.state.params.itemname2})}
                >
                    <Text
                        style={styles.buttonText}>
                        Eliminar tasca
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
