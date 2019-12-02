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