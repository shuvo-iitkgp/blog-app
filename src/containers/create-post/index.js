import React,{useContext, useState} from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import "./style.css"
import makeid from '../../helper/function';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import { db, storage } from '../../firebase';
export default function CreatePost() {
    const [user, setUser] = useContext(UserContext).user;
    // console.log(user);
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress]= useState(0);
    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
            var selectedImageSrc= URL.createObjectURL(e.target.files[0]);
            var imagePreview = document.getElementById("image-preview");
            imagePreview.src = selectedImageSrc;imagePreview.style.display="block";
        }
    };
    const handleUpload=()=>{
        if(image){
            var imageName= makeid(10);
            const uploadTask  =storage.ref(`images/${imageName}.jpg`).put(image);
            uploadTask.on("state_changed", (snapshot)=>{//to determine the progress of upload
                const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                setProgress(progress);
            }, (error)=>{
                console.log(error);
            }, ()=>{
                //get the download URL and upload the post information
                storage.ref("images").child(`${imageName}.jpg`).getDownloadURL()
                .then((imageUrl)=>{
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        photoUrl: imageUrl,
                        username: user.displayName,
                        profileUrl: user.photoURL,
                        likes: 0,
                        dislikes:0,
                    })
                })
                setCaption("");
                setProgress(0);
                setImage(null);
                document.getElementById("image-preview").style.display= "none";
            });
        }
    };
    return (
        <div className="createPost">
             {user ? ( 
               
                <div className="createPost__loggedIn">
                    <p>CreatePost</p>
                    <div className="createPost__loggedInCenter">
                        <textarea className="createPost__textarea" rows="3" value={caption} 
                        onChange={(e)=>setCaption(e.target.value)} placeholder="enter the caption here..">

                        </textarea>
                        <div className="createPost__imagePreview">
                            <img id="image-preview" alt=""/>
                        </div>
                    </div>
                    <div className="createPost__loggedInBottom">
                    <div className="createPost__imageUpload">
                        <label htmlFor="fileInput">
                        <AddAPhotoIcon style={{cursor:"pointer", fontSize:"20px"}}/>
                        </label>
                        <input id="fileInput" type="file" accept="image/*" onChange={handleChange}/>
                    </div>
                    <Button variant="contained" color="primary" className="createPost__uploadBtn" onClick={handleUpload} style={{color:caption?"white":"lightgrey"}}>
                        {`Upload${progress!=0? "ing..."+progress +"%":""}`}
                    </Button>
                    {/* <button className="createPost__uploadBtn" onClick={handleUpload} style={{color:caption?"#000":"lightgrey"}}>
                        {`Upload ${progress!=0? progress:""}`}
                    </button> */}
                    </div>
                </div>
             ):(<></>
                 
                // <div><SignInBtn/>
                // <p style={{marginLeft: "12px"}}>To Post & Comment</p></div>
            )} 
                
               
                       
        </div>
    )
}
