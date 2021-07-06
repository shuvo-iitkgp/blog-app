import React, {useState, useContext} from 'react'
import { UserContext } from '../../contexts/user'
import './style.css'
import { db, storage } from '../../firebase';
import SendIcon from '@material-ui/icons/Send';
export default function CommentInput({comments, id}) {
    const [comment, setComment] = useState("");
    const [user, setUser] = useContext(UserContext).user;
    const [commentArray, setCommentArray] = useState(comments?comments: []);



    const addComment=()=>{
        if(comment!=""){
            //add comment to above post
            commentArray.push({
            comment:comment, 
            username: user.displayName.toLowerCase(),
        })
        db.collection("posts").doc(id).update({
            comments:commentArray,
        }).then(()=>{
            setComment("");
            //console.log("comment added");
        }).catch(function(error){
            console.log(`Error ${error}`);
        })
        }
    }
    return (
        <div className="commentInput">
                        
            <input className="commentInput__textarea" placeholder="Write a comment" 
            onChange={(e)=>setComment(e.target.value)}></input>
            
            
            <SendIcon className="commentInput__btn" onClick={addComment}>Comment</SendIcon>
        </div>
    )
}
