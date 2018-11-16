/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import Homescreen from './app/screens/Homescreen';
import AddTaskToList from './app/screens/AddTaskToList';
import Lists from './app/screens/Lists';
import EditList from './app/screens/EditList';
import EditTask from './app/screens/EditTask';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const AppDrawerNavigator = DrawerNavigator ({
  Homescreen : {screen : Homescreen},
  Lists : {screen : Lists},
  AddTaskToList : {screen : AddTaskToList},
  EditList : {screen : EditList},
  EditTask : {screen : EditTask}
}) 

export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}
