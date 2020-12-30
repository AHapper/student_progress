import React from 'react';
import firebase from './firebase'

function Auth () {

    const auth = firebase.auth();

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = event => {
        console.log(event.target.value);
        auth.signInWithPopup(provider);
    }

    const handleSignOut = event => {
        console.log(event.target.value);
        auth.signOut();
    }

    const whenSignedIn = document.getElementById('whenSignedIn');
    const whenSignedOut = document.getElementById('whenSignedOut');

    const userDetails = document.getElementById('userDetails');



    /// Sign in event handlers


    auth.onAuthStateChanged(user => {
        if (user) {
            // signed in
            whenSignedIn.hidden = false;
            whenSignedOut.hidden = true;
            userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
        } else {
            // not signed in
            whenSignedIn.hidden = true;
            whenSignedOut.hidden = false;
            userDetails.innerHTML = '';
        }
    });

    return (
    <div>
        <div>HELLO FROM auth.js</div>
        <section id="whenSignedOut">
            <button id="signInBtn" onClick={handleSignIn} className="btn btn-primary">Sign in with Google</button>
        </section>
        
        <section id="whenSignedIn" hidden="true">
            <div id="userDetails"></div>
            <button id="signOutBtn" onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
        </section>
    </div>
    )

}


export default Auth;