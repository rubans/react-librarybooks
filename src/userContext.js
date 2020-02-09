import { useContext, useState, useEffect } from 'react'
import { firebase } from './firebaseClient'


// const userContext = React.createContext({
//     user: null,
//   })

// export const useSession = () => {
//     const { user } = useContext(userContext)
//     return user
// }
// export const loggedIn = (currentUser) => {
// 	console.log('logged in CurrentUser:'+JSON.stringify(currentUser))
// 	if (!currentUser) {
// 		console.log('no auth token set');
// 		return false;
// 		//do something like redirect to login page
// 	} else {
// 		return true
// 	}
// }
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