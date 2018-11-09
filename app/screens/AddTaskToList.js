/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight,Alert,ScrollView,FlatList} from 'react-native';
import ItemComponent from '../components/ItemComponents';

import { db } from '../config/db';
import { addItem } from '../services/ItemService';

let itemsRef = db.ref('/Llista');


export default class ListItem extends Component {

    state = {
        items: []
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
         });
    }
    
    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.header}>Llistes disponibles:</Text>
                <Text></Text><Text></Text>

                <ScrollView>
                    <TouchableHighlight onPress={this._onPressButton} underlayColor="#2a99b8">
                        <View style={styles.button}>
                            {
                                this.state.items.length > 0
                                ? <ItemComponent items={this.state.items} />
                                : <Text>No items</Text>
                            }  
                        </View>
                    </TouchableHighlight>
                                      
                </ScrollView>
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
  })
