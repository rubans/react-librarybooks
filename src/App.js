import React, {useContext} from 'react'
import Users from './users'
import Books from './books'
import Login from './login'
import PrivateRoute from './PrivateRoute'
import Register from './forms/RegisterForm'
//import {useCurrentUser} from './context/userContext'
import AuthProvider, {useAuth} from './context/authContext'
import NavBar from './NavBar'
import {
	BrowserRouter as Router,
	Route,
}from "react-router-dom";
const App = (props) => {
	const { authUser } = useAuth();
	// let authUser = useCurrentUser()
	// setAuthData(authUser)
	
	console.log('Rendering App...');
  	console.log("App Props:"+JSON.stringify(props))
	console.log("App auth User:"+JSON.stringify(authUser))
	return (
		<AuthProvider>
		<Router>
			<div className="App">
				<NavBar/>
			</div>
			<br/>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
			{/* <Route path="/users" render={(props) => <Users {...props} />}/> */}
			<PrivateRoute path='/users' component={Users} />
			<Route path="/books" render={(props) => <Books {...props} />} />
			<Route path="/register" exact component={Register}/>
		</Router>
		</AuthProvider>
	)
}
const Home = () => {
	return (<div className="container">
				<h2>Home page</h2>
				<blockquote>Welcome to the Book Library!</blockquote>
			</div>);
}
  

export default App
