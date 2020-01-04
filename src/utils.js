export const loggedIn = () => {
	if (!sessionStorage.getItem('auth-token')) {
		console.log('no auth token set');
		return false;
		//do something like redirect to login page
	} else {
		console.log('token found. Logged in.')
		return true
	}
}

export const redirectToLogin = (props) => {
	let currentHref = props.match.path
		console.log("current href :"+currentHref)
		const loginHref = {
			pathname: '/login',
			state: { from: {pathname: currentHref} }
		}
	props.history.push(loginHref)
}