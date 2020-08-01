// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal,ActivityIndicator } from 'react-native';
// import colors from '../Colors';
// import {AntDesign} from '@expo/vector-icons';
// import TodoList from './TodoList';
// import AddListModal from './AddListModal';
// import firebase from '../firebase';
// import { connect } from 'react-redux';
// //import { connect } from 'react-redux';
// import { saveUser } from '../redux/actions'
// class Home extends React.Component {

//   // state = {
//   //   addTodoVisible : false,
//   //   lists:[],
//   //   user:{},
//   //   loading:true
//   // }

// //   componentDidMount(){

// //   this.user=this.props;
// //       // this.getLists(lists => {
// //       //   this.setState({lists,user}, () => {
// //       //     this.setState({loading: false});
// //       //   });
// //       // });
// //       // this.setState({user});
// //   }
  
// //   //  componentWillMount(){
// //   //    firebase.detach();
// //   //  }

// //   ref(){
// //     return firebase
// //               .firestore()
// //               .collection('users')
// //               .doc(this.userId)
// //               .collection("lists");
// //   }

// //   getLists(){
// //     let ref = this.ref.orderBy('name');

// //     this.unsubscribe = ref.onSnapshot(snapshot => {
// //       lists = [];

// //       snapshot.forEach(doc => {
// //           lists.push({id: doc.id, ...doc.data()});
// //       });

// //       return lists;
// //     });
// //   }


// //   toggleAddTodoModal(){
// //     this.setState({addTodoVisible: !this.state.addTodoVisible})
// //   }

// //   renderList = list => {
// //     return <TodoList list={list} updateList={this.updateList}/>;
// //   }

// //   addList = list => {
// //     this.addList2({
// //       name: list.name,
// //       color:list.color,
// //       todos:[]
// //     });
// //   };

// //   updateList = list => {
// //     this.updateList2(list);
// //   };


// //   addList2(list){
// //     let ref = this.ref;
// //     ref.add(list);
// // }

// // updateList2(list){
// //     let ref = this.ref;
// //     ref.doc(list.id).update(list);
// // }

//   render(){
//     // if(this.state.loading){
//     //   return (
//     //     <View style={styles.container}>
//     //       <ActivityIndicator size="large" color={colors.blue}/>
//     //     </View>
//     //   )
//     // }
//     return (
//       <View style={styles.container}>
//         {/* <Modal 
//           animationType="slide" 
//           visible={this.state.addTodoVisible} 
//           onRequestClose={() => this.toggleAddTodoModal()}
//         >
//             <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList}/>
//         </Modal> */}
      
//           {/* <Text>User:{this.state.user.uid}</Text> */}
//           <Text>gfaiegeru</Text>
      
// {/* 
//         <View style={{flexDirection:"row"}}>
//           <View style={styles.divider} />
//           <Text style={styles.title}>
//             Grocery Lists
//           </Text>
//           <View style={styles.divider} />
//         </View>

//         <View style={{marginVertical:48}}>
//           <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
//             <AntDesign name="plus" size={16} color={colors.blue}/>
//           </TouchableOpacity>
//           <Text style={styles.add}>Add List</Text>
//         </View>

//         <View style={{height: 350, padding:32}}>
//           <FlatList 
//             data={this.state.lists} 
//             keyExtractor={item => item.id.toString() } 
//             horizontal={true} 
//             showsHorizontalScrollIndicator={false}
//             renderItem={({item}) => (
//               this.renderList(item)
//             )}
//             keyboardShouldPersistTaps="always"
//           />
          
//         </View> */}
//       </View>
//     );
//   }
 
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   divider:{
//     backgroundColor: colors.lightBlue,
//     height:1,
//     flex:1,
//     alignSelf: "center"
//   },
//   title:{
//     fontSize:38,
//     fontWeight: "800",
//     color: colors.black,
//     paddingHorizontal:64
//   },
//   addList:{
//     borderWidth:2,
//     borderColor: colors.lightBlue,
//     borderRadius: 4,
//     padding: 16,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   add:{
//     color:colors.blue,
//     fontWeight: "600",
//     fontSize: 14,
//     marginTop: 8
//   }
// });

// const mapStateToProps = (state) => ({
//   user: state.auth.user
// })

// export default connect(mapStateToProps)(Home);



import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal,ActivityIndicator } from 'react-native';
import colors from '../Colors';
import {AntDesign} from '@expo/vector-icons';
import TodoList from './TodoList';
import AddListModal from './AddListModal';
//import Fire from '../Fire';
//import { firestore } from 'firebase';
import { connect } from 'react-redux';

class Home extends Component {

  // state = {
  //   addTodoVisible : false,
  //   lists:[],
  //   user:{},
  //   loading:true
  // }

  // componentDidMount(){
  //   // firebase = new Fire((error,user) => {
  //   //   if(error){
  //   //     return alert("something went wrong");
  //   //   }
  //   //   firebase.getLists(lists => {
  //   //     this.setState({lists,user}, () => {
  //   //       this.setState({loading: false});
  //   //     });
  //   //   });
  //   //   this.setState({user});
  //   // });
  // }
  
  // //  componentWillMount(){
  // //    firebase.detach();
  // //  }


  // toggleAddTodoModal(){
  //   this.setState({addTodoVisible: !this.state.addTodoVisible})
  // }

  // renderList = list => {
  //   return <TodoList list={list} updateList={this.updateList}/>;
  // }

  // addList = list => {
  //   firebase.addList({
  //     name: list.name,
  //     color:list.color,
  //     todos:[]
  //   });
  // };

  // updateList = list => {
  //   firebase.updateList(list);
  // };

  render(){
    // if(this.state.loading){
    //   return (
    //     <View style={styles.container}>
    //       <ActivityIndicator size="large" color={colors.blue}/>
    //     </View>
    //   )
    // }
    return (
      <View style={styles.container}>
        <Text>bauywregvierug</Text>
        {/* <Modal 
          animationType="slide" 
          visible={this.state.addTodoVisible} 
          onRequestClose={() => this.toggleAddTodoModal()}
        >
            <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList}/>
        </Modal>
        <View>
          <Text>User:{this.state.user.uid}</Text>
        </View>

        <View style={{flexDirection:"row"}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Grocery Lists
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={{marginVertical:48}}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={16} color={colors.blue}/>
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>

        <View style={{height: 350, padding:32}}>
          <FlatList 
            data={this.state.lists} 
            keyExtractor={item => item.id.toString() } 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              this.renderList(item)
            )}
            keyboardShouldPersistTaps="always"
          />
          
        </View> */}
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider:{
    backgroundColor: colors.lightBlue,
    height:1,
    flex:1,
    alignSelf: "center"
  },
  title:{
    fontSize:38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal:64
  },
  addList:{
    borderWidth:2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add:{
    color:colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8
  }
});

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Home);
