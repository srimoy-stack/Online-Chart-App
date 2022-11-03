import React from 'react';
import"firebase/app";
import { auth } from '../firebase';
import firebase from 'firebase/app';
import { useHistory } from "react-router-dom";

import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons';
const Login =()=>{
    return(
        <div id='login-page'>
            <div id="login-card">
            <h1>wellcome to unichart</h1>
            <div className="login-button-google"
            onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }>
                <GoogleOutlined/> Sign in with Google
            </div>
            <br/>
            <br/> 
            <div className="login-button-facebook"
            onClick={()=>{
                auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }}>
                <FacebookOutlined/>Sign in with Facebook
            </div>
            
            </div>


            



        </div>
    )
}

export default Login;