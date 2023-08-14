
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8BbIh0UsMNYU6XgeVt_qhm3wVF6Se584",
    authDomain: "frugal-friend-518b7.firebaseapp.com",
    projectId: "frugal-friend-518b7",
    storageBucket: "frugal-friend-518b7.appspot.com",
    messagingSenderId: "649851201279",
    appId: "1:649851201279:web:31bbad6e2b369e66848eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();




let signupButton = document.querySelector('.signupWithgoogle')
// let signoutButton = document.querySelector('.signout')



signupButton.addEventListener('click', () => {
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });





    // signInWithPopup(auth, provider)
    //     .then((result) => {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken;
    //         // The signed-in user info.
    //         const user = result.user;
    //         // IdP data available using getAdditionalUserInfo(result)

    //         // Name = displayName
    //         // Email = email
    //         // photo = photoURL
    //         alert(user.displayName)
    //         // ...
    //     }).catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.customData.email;
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         // ...
    //     });


})

// signoutButton.addEventListener('click',()=>{
//     signOut(auth).then(() => {
//         // Sign-out successful.
//       }).catch((error) => {
//         // An error happened.
//       });
// })