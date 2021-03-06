import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebase.init";
//firebase initialize
firebaseInitialize();
const useFirebase = () => {
    //useStates
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    //useState for loading 
    const [isLoading, setIsLoading] = useState(true);



    //providers
    const googleProvider = new GoogleAuthProvider();

    //auth 
    const auth = getAuth();

    //googleSignIn 
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
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
            setIsLoading(false);
        });
        return () => unsubscribe;

    }, [])

    //registered with email and password

    const registerWithEmailAndPassword = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // setUser(user);
                alert("Registration Successfull Done. Now you can access everything")
                setError("");
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            })
            .finally(() => {
                setIsLoading(false);
            })
    }



    //sign in with email and password
    const emailPasswordSignIn = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                alert("Welcome to our website. you are successfully logged In . Now you can access everything to out site. Thank you")
                setError("");
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            })
            .finally(() => {
                setIsLoading(false);

            })
    }

    // sign out 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // setUser({});
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return {
        user,
        setError,
        error,
        googleSignIn,
        registerWithEmailAndPassword,
        emailPasswordSignIn,
        logOut,
        isLoading

    }


}
export default useFirebase;