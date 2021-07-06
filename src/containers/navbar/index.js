import React, { useContext , useState} from 'react'
import { SignInBtn, SignOutBtn } from '../../components'
import PostAddIcon from '@material-ui/icons/PostAdd';
import { UserContext } from '../../contexts/user'

import './style.css'
export default function Navbar() {
    const [user, setUser] = useContext(UserContext).user;
    return (
       
        <div class ="navbar">
            
            
            <p class="posterroom">PosterRoom</p>            
            {user ? (<div className="pic__logout"><SignOutBtn/><img className="navbar__img" src = {user.photoURL}/></div>):(<SignInBtn/>)}
            
        </div>
    )
}
