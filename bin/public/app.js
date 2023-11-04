const auth = firebase.auth();
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.EmailAuthProvider();

signInBtn.onclick = () => auth.SignInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();