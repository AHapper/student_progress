import React, { useState } from 'react';
import firebase from './firebase'

function Auth () {

    const auth = firebase.auth();

    const provider = new firebase.auth.GoogleAuthProvider();

    const [inHidden, setInHidden] = useState(false);
    const [outHidden, setOutHidden] = useState(true);
    const [welcomeUser, setWelcome] = useState('')

    const handleSignIn = () => {
        auth.signInWithPopup(provider);
        setInHidden(true)
        setOutHidden(false)
    }

    const handleSignOut = () => {
        setInHidden(false);
        setOutHidden(true)
        auth.signOut();
    }

    /// Sign in event handlers

    auth.onAuthStateChanged(user => {
        if (user) {
            // signed in
            let dearUser = user.displayName
            setWelcome(dearUser);
        } else {
            // not signed in
            setWelcome('');
        }
    });

    return (
    <div>
        <section id="whenSignedOut" hidden={inHidden}>
            <div ><h1>A Student Progress App</h1></div>
            <button id="signInBtn" onClick={handleSignIn} className="btn btn-primary">Sign in with Google</button>
        </section>
        
        <section id="whenSignedIn" hidden={outHidden}>
            <div id="userDetails"><h2>Hello {welcomeUser}!</h2></div>
            <button id="signOutBtn" onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
        </section>
    </div>
    )

}


export default Auth;