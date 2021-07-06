import React,{useContext} from 'react'
import "./logout.css"
import {logout} from "../../services/auth"
import { UserContext } from '../../contexts/user';
import ReactDOM from 'react-dom';
export default function SignOutBtn() {
    const [user, setUser] = useContext(UserContext).user;
    const signOutBtnClick =async()=>{
        let userBySignOut = await logout()
        if(user) setUser(userBySignOut);   
        
    };
    return (
        <div className="signOutBtn" onClick={signOutBtnClick}>
            <p>Sign Out</p>
        </div>
    )
}
