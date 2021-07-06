import  {auth, provider} from "../firebase"
export const signInWithGoogle = async()=>{
    let user_2;
    await auth
    .signInWithPopup(provider)
    .then((res) =>{
        // console.log(res.user);
        user_2 = res.user;
        

    })
    .catch((error)=>{
        console.log(error.message);
    });

    
    return user_2;
};
export const logout = async()=>{
    let logout_success;
    await auth.signOut()
    .then(()=>{
        logout_success = true;

    }).catch((error)=>{
        console.log(error.message);
    });
    return logout_success;
}