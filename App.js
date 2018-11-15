/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Homescreen from './app/screens/Homescreen';
import AddList from './app/screens/AddList';
import AddTaskToList from './app/screens/AddTaskToList';
import Tasks from './app/screens/Tasks';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const AppDrawerNavigator = DrawerNavigator ({
  Homescreen : {screen : Homescreen},
  AddTaskToList : {screen : AddTaskToList},
  AddList : {screen : AddList},
  Tasks : {screen :Tasks}
}) 

export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}
