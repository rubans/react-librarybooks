import React, { createContext, useState, useEffect, useContext } from 'react';
//import {useCurrentUser} from './userContext'
import { firebase, deauthorize } from '../firebaseClient'

const authContext = createContext({});
export const useAuth = () => {
    return useContext(authContext);
  };

export const authSignOut = () => {
  sessionStorage.isSessionLoggedIn = false
  deauthorize();
}

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null, isAdmin : false, isLoggedIn : false, isSessionLoggedIn : false });
// we will use loading later

  const setAuthData = (data) => {
    console.log("setAuthData:"+JSON.stringify(data))
    // create session for login
    if (sessionStorage.isSessionLoggedIn) {
      sessionStorage.isSessionLoggedIn = true;
    } else {
      sessionStorage.isSessionLoggedIn = true;
    }
    setAuth({data: data, 
      isAdmin : (data && data.email === "admin@booklibrary.com"), 
      isLoggedIn : (data !== null),
      isSessionLoggedin : (sessionStorage.isSessionLoggedIn === true)
    });
  };
 // a function that will help us to add the user data in the auth;
  
 // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthData(user);
      } else {
        setAuthData(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;