import React from 'react';
import { StyleSheet } from 'react-native';

import Home from './components/Home';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import Signup from './components/Signup';
import Signin from './components/Signin';
import createStore from './redux/store'
import { Provider } from 'react-redux';


  const AppSwitchNavigator = createSwitchNavigator({
    Signin:Signin,
    Signup:Signup,
    Home:Home
  });
  
  const AppNavigator = createAppContainer(AppSwitchNavigator);
  const store = createStore();
  // name="Signup" 
  
  export default class App extends React.Component {
    render (){
      return (<Provider store={store}>
        <AppNavigator/>
      </Provider>)
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