import { initializeApp, firestore } from "firebase";
const firebase = require("firebase");
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
var config = {
    apiKey: "AIzaSyDh0dHvfYVmQobx7VyKNCD2WZ2UFAY6wMA",
    projectId: "fast-planet-243821",
    appId: "1:515007598211:web:d7f919e31f73d3463f15b6"
  }
firebase.initializeApp(config);
console.log("Firebase initialized!")

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
    firebase.auth().createUserWithEmailAndPassword(email, password)
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

export const createBook = () => {
    authorize().then(function(){
        console.log("createBook!");
        var db = firebase.firestore();

        // var docRef = db.collection("Library_Books").doc("SF")
        // docRef.get().then(function(doc) {
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch(function(error) {
        //     console.log("Error getting document:", error);
        // });

        db.collection("Library_Books").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            alert(error);
            //throw error;
        });
    });
}

