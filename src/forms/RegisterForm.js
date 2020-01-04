import React, { useState, Fragment } from 'react'
import Users, {initialFormState} from '../users'
import UserForm from './UserForm'
import {
	Redirect
} from "react-router-dom";
import { redirectToLogin } from '../utils';
import {createUser} from '../firebaseClient'

const RegisterForm = props => {
    const addUser = (id, user) => {
        console.log("new user:"+JSON.stringify(user))
        // add to firebase
        createUser(user.username, user.password)
        redirectToLogin(props)
	}


    return (<div><h3>Register</h3>
        <UserForm
            editing={true}
            setViewMode={Users.setViewMode}
            currentUser={initialFormState}
            updateUser={addUser}
        />
        </div>)
}

export default RegisterForm