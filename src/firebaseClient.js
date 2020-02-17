import { initializeApp, firestore } from "firebase";
import {global} from "./Global";
export const firebase = require("firebase");
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
var config = {
    apiKey: "AIzaSyDh0dHvfYVmQobx7VyKNCD2WZ2UFAY6wMA",
    projectId: "fast-planet-243821",
    appId: "1:515007598211:web:d7f919e31f73d3463f15b6"
  }
firebase.initializeApp(config);
console.log("Firebase initialized!")

// export const getCurrentUser = () =>{
//     return firebase.auth().currentUser
// }

export const authorize = (async (username, password) => {
    var auhorized = false;
    await firebase.auth().signInWithEmailAndPassword(username, password)
        .then(function(result) {
            auhorized = true;
        })
        .catch(function(error) {
            // Handle Errors here.
            console.error("Unauthorized with Firebase : "+error);
        });
        console.log("Authorized with Firebase!"+auhorized);
        return auhorized;
})

export const createUser = (email, password) => {
    var db = firebase.firestore();
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
        // add username to tabel too
        db.collection("Library_Users").add({username:email})
    })
    .then(function(){
        console.log("created user.")
    })
    .catch(function(error) {
        console.error("Error creating user: ", error);
        alert(error);
      });
}

export const deauthorize = () => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        console.log("Error with Firebase : "+error);
        alert(error);
      });
}

export const updateBookInDB = (book) => {
        console.log("createBook!");
        console.log("firebase:"+JSON.stringify(firebase.auth()))
        //console.log("cache created : "+global.Date)
        var db = firebase.firestore();
        if(book.id === null)
        {
            db.collection("Library_Books").add(book)
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                alert(error);
                //throw error;
            });
        }
        else
        {
            db.collection("Library_Books").doc(book.id).update(book)
            .then(function(docRef) {
                console.log("Document written with ID: ", book.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                alert(error);
                //throw error;
            });
        }

}

export const deleteBookInDB = (id) => {
    console.log("deleteBook!");
    //console.log("cache created : "+global.Date)
    var db = firebase.firestore();
    db.collection("Library_Books").doc(id).delete()
    .then(function(docRef) { 
        console.log("Document deleted with ID: ", id);
    })
    .catch(function(error) {
        console.error("Error deleting document: ", error);
        alert(error);
        //throw error;
    });
}

export const getBooksInDB = (async () => {
        console.log("getBooks!");
        var books = []
        //console.log("cache created : "+global.Date)
        var db = firebase.firestore();
        
        await db.collection("Library_Books").get()
            .then(function(querySnapshot) {
                books = querySnapshot.docs.map(doc => ({...doc.data(),id:doc.id}));
                console.log("books:"+JSON.stringify(books))
            })
            .catch(function(error) {
                console.error("Error getting document: ", error);
                alert(error);
                //throw error;
            });
        console.log("All documents retrieved!");
        console.log("books : "+JSON.stringify(books))
        return books;
})

export const getUsersInDB = (async (nextPageToken) => {
    var users = []
    console.log("getUsersInDB")
    var db = firebase.firestore();
    await db.collection("Library_Users").get()
    .then(function(querySnapshot) {
        users = querySnapshot.docs.map(doc => ({...doc.data(),id:doc.id}));
        return users;
    })
    .catch(function(error) {
        console.error("Error getting document: ", error);
        alert(error);
        //throw error;
    });
    console.log("users : "+JSON.stringify(users))
    console.log("All documents retrieved!");
    return users;
  })
