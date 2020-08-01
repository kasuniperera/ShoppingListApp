// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
// import { connect } from 'react-redux';
// import { saveUser } from '../redux/actions'
// import firebase from '../firebase';

// class Signin extends Component {

//   constructor() {
//     super();
//     this.state = { 
//       email: '', 
//       password: '',
//       isLoading: false
//     }
//   }
//   updateInputVal = (val, prop) => {
//     const state = this.state;
//     state[prop] = val;
//     this.setState(state);
//   }

//   signIn (email, password) {
//     const {saveUser} = this.props;
//     const token = null; // sign in and get token
//     const user = null; // get user details

//     //if sign in is successful
//     firebase
//     .auth()
//     .signInWithEmailAndPassword(email,password)
//     .then((res) => {
//       console.log(res)
//       console.log('User logged-in successfully!')
//       this.setState({
//         isLoading: false,
//         email: '', 
//         password: ''
//       })
      
      // saveUser({token, user});
      // console.log('vyyyyyyy');
      // this.props.navigation.navigate('Home');
//      // this.props.navigation.navigate('Dashboard')
     
//     })
//     .catch(error => this.setState({ errorMessage: error.message }))

//   }

//   render() {  
//     return (
//       <View style={styles.container}>  
//          <TextInput
//           style={styles.inputStyle}
//           placeholder="Email"
//           value={this.state.email}
//           onChangeText={(val) => this.updateInputVal(val, 'email')}
//         />
//         <TextInput
//           style={styles.inputStyle}
//           placeholder="Password"
//           value={this.state.password}
//           onChangeText={(val) => this.updateInputVal(val, 'password')}
//           maxLength={15}
//           secureTextEntry={true}/>
//         <Button
//           color="#3740FE"
//           title="Signin"
//           onPress={() => this.signIn(this.state.email,this.state.password)}
//         />   

//         <Text 
//           style={styles.loginText}
//           onPress={() => this.props.navigation.navigate('Signup')}>
//           Don't have account? Click here to signup
//         </Text>              
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       padding: 35,
//       backgroundColor: '#fff'
//     },
//     inputStyle: {
//       width: '100%',
//       marginBottom: 15,
//       paddingBottom: 15,
//       alignSelf: "center",
//       borderColor: "#ccc",
//       borderBottomWidth: 1
//     },
//     loginText: {
//       color: '#3740FE',
//       marginTop: 25,
//       textAlign: 'center'
//     },
//     preloader: {
//       left: 0,
//       right: 0,
//       top: 0,
//       bottom: 0,
//       position: 'absolute',
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: '#fff'
//     }
//   });

// const mapDispatchToProps = {saveUser};

// export default connect(null, mapDispatchToProps)(Signin);


import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { saveUser } from '../redux/actions'
import firebase from '../firebase';


class Signin extends Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }


  signIn (email, password) {
    const {saveUser} = this.props;
    const token = null; // sign in and get token
    const user = null; // get user details

    //if sign in is successful

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
       // this.props.navigation.navigate('Dashboard')
        saveUser({token, user});
        this.props.navigation.navigate('Home');
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }


  render() {  
    return (
      <View style={styles.container}>  
         <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signin"
          onPress={() => this.signIn(this.state.email,this.state.password)}
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
