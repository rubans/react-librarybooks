import { useContext, useState, useEffect } from 'react'
import { firebase } from './firebaseClient'

export const CurrentUser = () => {
    const [currentUserEmail, setAuthUser] = useState(null);
    const [authWasListened,setAuthWasListened] = useState(false);

    useEffect(() =>{
        firebase.auth().onAuthStateChanged(
		(authUser) => {
		  if(authUser) {
            console.log("auth user state:"+authUser.email)
			setAuthUser(authUser.email);
			setAuthWasListened(true);
		  } else {
            console.log("no auth user!")
			setAuthUser(null);
			setAuthWasListened(true);
          }
        })
    });

    return currentUserEmail
}