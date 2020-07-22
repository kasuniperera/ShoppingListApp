import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { saveUser } from '../redux/actions'


class Signin extends Component {

  signIn (email, password) {
    const {saveUser} = this.props;
    const token = null; // sign in and get token
    const user = null; // get user details

    //if sign in is successful
    saveUser({token, user});
    this.props.navigation.navigate('Home');
  }

  render() {  
    return (
      <View style={styles.container}>  
         <TextInput
          style={styles.inputStyle}
          placeholder="Email"
         
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
        />   
        <Button
          color="#3740FE"
          title="Signin"
          onPress={() => this.signIn()}
        />   

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have account? Click here to signup
        </Text>              
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
    loginText: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }
  });

const mapDispatchToProps = {saveUser};

export default connect(null, mapDispatchToProps)(Signin);


