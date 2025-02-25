import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext=createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const  [loader,setLoader]=useState(true)
    // register user with email and password
    const createUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // log in user with email and password
    const signInUser=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
     // load the current logged in user
     useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoader(false)
            console.log(currentUser.email)

        })
        return ()=>unsubscribe();
     },[])
    //  logout the current user
    const logOut=()=>{
        setLoader(true)
        signOut(auth)
        
    }
  
    const AuthInfo={
        createUser,
       signInUser,
       user,
       logOut,
       loader,

       
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
             {
                children
             }
        </AuthContext.Provider>
    ); 
};

export default AuthProvider;