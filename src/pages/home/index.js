import { SignInBtn } from '../../components'
import { CreatePost, Navbar } from '../../containers'
import Feed from '../../containers/feed'
import './style.css'
import React,{useContext} from 'react'
import { UserContext } from '../../contexts/user'
import FrontPage from '../../components/front-page'
import Footer from '../../components/front-page/footer'
export default function Home() {
    const [user, setUser] = useContext(UserContext).user;
    
    return (
        <div className="home">
            <Navbar/>
            
            {user?(<div><div><CreatePost/></div><div><Feed/></div></div>):<FrontPage></FrontPage>}
            
        </div>
    )
}
