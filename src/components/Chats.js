import React from "react";
import { useHistory } from "react-router-dom";
import {ChatEngine} from "react-chat-engine";
import { auth } from "firebase";
import {useAuth} from '../contexts/AuthContext';


const Chats=()=>{
 const history=useHistory();
const{user} = useAuth();
const handelLogout = async()=>{
   await auth().signOut();
   

        /* eslint-disable no-restricted-globals */
        history.push('/')

   


       
    }
    return(
        <div className="chat-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Unichart
                </div>
                <div onClick={handelLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
            height="calc(100vh-66px)"
            projectId="
            57f17799-6594-46cc-bed6-9c2da4ffb10d"
            userName="."
            userSecret="."
            />

        </div>
    )
}
export default Chats;