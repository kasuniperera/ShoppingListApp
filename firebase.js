import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCCT6my63osNwXOFuMd7267DBqwcnCwCDI",
    authDomain: "logintest-bff14.firebaseapp.com",
    databaseURL: "https://logintest-bff14.firebaseio.com",
    projectId: "logintest-bff14",
    storageBucket: "logintest-bff14.appspot.com",
    messagingSenderId: "88313031943",
    appId: "1:88313031943:web:3ce22944c3d09f98aee9a2"
};

class Fire{
    constructor(callback){
        this.init(callback);
    }
    init(callback){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                callback(null,user);
            }else{
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {
                        callback(error);
                });
            }
        });
    }

    addList(list){
        let ref = this.ref;
        ref.add(list);
    }

    updateList(list){
        let ref = this.ref;
        ref.doc(list.id).update(list);
    }

    getLists(callback){
        let ref = this.ref.orderBy('name');

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = [];

            snapshot.forEach(doc => {
                lists.push({id: doc.id, ...doc.data()});
            });

            callback(lists);
        });
    }

    get userId(){
        return firebase.auth().currentUser.uid;
    }

    get ref(){
        return firebase
        .firestore()
        .collection('users')
        .doc(this.userId)
        .collection("lists");
    }

    detach(){
        this.unsubscribe();
    }

    
}

export default Fire;