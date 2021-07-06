import React,{useState, useContext} from 'react'
import { Comment } from '../../components'
import CommentInput from '../../components/comment-input'
import { UserContext } from '../../contexts/user'
import {storage, db} from '../../firebase'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import './style.css'
export default function Post({profileUrl, username, id, photoURL, caption, comments, timestamp,likes, dislikes}) {
    const [user, setUser] = useContext(UserContext).user;
    const updateDislike=()=>{
        
        db.collection("posts").doc(id).update({
            dislikes: dislikes+1,
        }).catch(function(error){
            console.log(`Error ${error}`);
        })
        
    }
    const updateLike=()=>{
        
        db.collection("posts").doc(id).update({
            likes: likes+1,
        }).catch(function(error){
            console.log(`Error ${error}`);
        })
        
    }
    const deletePost=()=>{
        var imageRef= storage.refFromURL(photoURL);//get ref up from here
        imageRef.delete().then(function(){
            console.log("delete successful");

        })
        .catch(function(error){
            console.log(`Error ${error}`);
        });


        db.collection("posts").doc(id).delete()//delete from the database
        .then(function(){
            console.log("DELETE SUCCESSFUL");
        })
        .catch(function(error){
            console.log(`Error post info delete ${error}`);
        });

    }

    
    
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                    <img src= {profileUrl} className="post__profilepic"/>
                    <p style={{marginLeft: "8px"}}>{username}</p>
                    
                    
                </div>
                <IconButton aria-label="delete" className="post__delete" onClick={deletePost}>
                <DeleteIcon />
                </IconButton>
                {/* <button >Delete</button> */}
                </div>
                <div>
                <p style={{fontWeight:"bold"}}>
                    {/* <span style= {{fontWeight:"bold" , marginRight:"4px" }}>{username}</span> */}
                    {caption}
                </p>
                </div>    
            <div className="post__center">
                <img className="post__photoUrl" src={photoURL}/>
            </div>
            
            <div className="like__dislike">
                <div className="like">
                    <ThumbUpIcon className="post__liked" onClick={updateLike}/>
                    <p>Likes:{likes}</p></div>
                <div className="dislike">
                    <ThumbDownIcon className="post__disliked" onClick={updateDislike}/>
                    <p>Dislikes:{dislikes}</p>
                </div>
            </div>


            {comments ? (
                comments.map((comment)=>(
                <Comment username={comment.username} caption={comment.comment}/>
                ))):(<div></div>)
            }
            {user?<CommentInput comments= {comments} id={id}/>:<></>}

        </div>
    )
}
