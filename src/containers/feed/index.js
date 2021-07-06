import React,{useEffect, useState} from 'react'
import { Post } from '..'
import './style.css'
import {db} from '../../firebase'
export default function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map((doc)=>({id:doc.id, post:doc.data()})));
        })
        
    }, [])
    return (
        <div className="feed">
            
            {posts.map(({id, post})=>{
                return <Post
                key={id}
                id={id}
                profileUrl={post.profileUrl}
                username={post.username}
                photoURL={post.photoUrl}
                caption={post.caption}
                comments={post.comments}
                timestamp={post.timestamp}
                likes={post.likes}
                dislikes={post.dislikes}
                />

            })}
        </div>
    )
}
