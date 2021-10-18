import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebase.init";
//firebase initialize
firebaseInitialize();
const useFirebase = () => {
    //useStates
    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    //providers
    const googleProvider = new GoogleAuthProvider();

    //auth 
    const auth = getAuth();

    //googleSignIn 
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    // observe whether user auth state changed or not
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user);
                // ...
            } else {
                setUser({});
            }
        });
        return () => unsubscribe;

    }, [])

    // sign out 
    const logOut =()=>{
        signOut(auth)
        .then(() => {
            setUser({});
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            setError(error.message);
          });
    }

    return {
        user,
        error,
        googleSignIn,
        logOut

    }


}
export default useFirebase;