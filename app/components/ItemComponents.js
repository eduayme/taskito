import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
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

export default class ItemComponent extends Component {

  static propTypes = {
      llistes: PropTypes.array.isRequired
  };
  onItemClickHandler(){
    print('hello');
      }
  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.llistes.map((item, index) => {
            return (
                <View key={index} onClick={this.onItemClickHandler.bind(this)}>
                    <Text style={styles.itemtext}>{item.name}</Text>
                </View>
            )
        })}
      </View>
    );
  }
}


/**
 * render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
            return (
                <View key={index} onClick={this.onItemClickHandler.bind(this)}>
                    <Text style={styles.itemtext}>{item.name}</Text>
                </View>
            )
        })}
      </View>
    );
  }
}
 */