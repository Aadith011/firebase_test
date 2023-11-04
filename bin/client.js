const firebaseConfig = {
    apiKey: "AIzaSyCeilYGI0BA8PscDdzT0c4SapSsbzd4JgY",
    authDomain: "student-management-v2.firebaseapp.com",
    projectId: "student-management-v2",
  };
  
  const email = 'user@email.com';
  const password = 'user123';
  
  firebase.initializeApp(firebaseConfig);
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed up or signed in:', user);
  
      user.getIdToken(true)
        .then((idToken) => {
          console.log('ID Token:', idToken);
        })
        .catch((error) => {
          console.error('Error retrieving ID token:', error);
        });
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
  