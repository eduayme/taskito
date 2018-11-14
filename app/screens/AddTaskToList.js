/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight,Alert,ScrollView,FlatList,TextInput} from 'react-native';
import ItemComponent from '../components/ItemComponents';

import { db } from '../config/db';
import { addTaskToList} from '../services/ItemService';

let itemsRef = db.ref('/Llista');

const numbers = [1, 2, 3, 4, 5];
/*data = { 
this.state.llistes.map((d,idx)=>{
// console.log(d.name+' '+idx);
return (<li key={idx}>{d.name}</li>)
})
}*/

export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskname: '',
            llistes: [],
            listname: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeList = this.handleChangeList.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
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
            taskname: e.nativeEvent.text
        });
    }
    handleChangeList(e) {
        this.setState({
        listname: e.nativeEvent.text
        });
    }
    handleSubmit() {
        addTaskToList(this.state.listname,this.state.taskname);
        this.textInputLlista.clear();
        this.textInputTasca.clear();
    }
    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.header}>Tasques disponibles:</Text>
                <ScrollView>
                    <View style={styles.button}>
                            {   
                                this.state.llistes.length > 0
                                ? <ItemComponent llistes={this.state.llistes} />
                                : <Text>No llistes</Text>
                            }  
                    </View>
                </ScrollView>
                <Text style={styles.title}>Afegir una tasca:</Text>
                <TextInput
                        placeholder='Nom de la llista (valid adalt)'
                        underlineColorAndroid={'transparent'}
                        style={styles.itemInput}
                        onChange={this.handleChangeList}
                        ref={input => { this.textInputLlista = input }}
                        />
                    <TextInput
                        placeholder='Nom de la tasca'
                        underlineColorAndroid={'transparent'}
                        style={styles.itemInput}
                        onChange={this.handleChange}
                        ref={input => { this.textInputTasca = input }}
                        />
                    <TouchableHighlight
                            style = {styles.button2}
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
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2a8ab7',
    },
    header: {
        fontStyle: 'normal',
        fontSize: 35,
        color: 'white',
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
    }
    ,
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
    button2: {
        height: 45,
        flexDirection: 'row',
        backgroundColor:'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 160,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
})
