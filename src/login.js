import React, { useState, Fragment } from 'react'
import { useHistory, withRouter  } from "react-router-dom"

const Login = props => {
    console.log("login:"+JSON.stringify(props.location.state.from.pathname))

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
//    console.log("login history:"+JSON.stringify(props.history))

    const history = useHistory();

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: 'rubansiva@hotmail.com',
            password: 'liverpool'
        }
        console.log("history:"+JSON.stringify(props))

        if ((emailInput == hardcodedCred.email) && (passwordInput == hardcodedCred.password)) {
            console.log("login successful!")
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            props.history.push(props.location.state.from.pathname);
        } else {
            //bad combination
            alert('wrong email or password combination');
        }
    }

return (
    <div className="login-page">
        <h2>Login In</h2>
        <form autoComplete="off" onSubmit={handleLoginSubmit}>
            <div className="form-group">
                <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={emailInput}
                onChange={handleEmailChange}
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                autoComplete="new-password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={passwordInput}
                onChange={handlePasswordChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
      </form>
    </div>
  )
}

export default Login