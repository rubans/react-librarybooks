import {getCurrentUser} from './firebaseClient'

// export const loggedIn = () => {
// 	var currentUser = getCurrentUser();
// 	console.log('logged in CurrentUser:'+JSON.stringify(currentUser))
// 	if (currentUser === null) {
// 		console.log('no auth token set');
// 		return false;
// 		//do something like redirect to login page
// 	} else {
// 		return true
// 	}
// }

export const redirectToLogin = (props) => {
	let currentHref = props.match.path
		console.log("current href :"+currentHref)
		const loginHref = {
			pathname: '/login',
			state: { from: {pathname: currentHref} }
		}
	props.history.push(loginHref)	
}