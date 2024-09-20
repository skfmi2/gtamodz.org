// After successful registration
firebase.auth().createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        // Redirect to Edit Profile page
        window.location.href = 'edit-profile.html';
    })
    .catch((error) => {
        console.error('Error registering user:', error.message);
    });
