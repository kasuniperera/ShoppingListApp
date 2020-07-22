import React from 'react';
import { StyleSheet } from 'react-native';

import Home from './components/Home';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import Signup from './components/Signup';
import Signin from './components/Signin';


  const AppSwitchNavigator = createSwitchNavigator({
    Signin:Signin,
    Signup:Signup,
    Home:Home
  });
  
  const AppNavigator = createAppContainer(AppSwitchNavigator);
  // name="Signup" 
  
  export default class App extends React.Component {
    render (){
      return <AppNavigator/>;
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });