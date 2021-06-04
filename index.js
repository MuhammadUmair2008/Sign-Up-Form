
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  let loginDpRef = document.getElementById('loginsucess')
  var firebaseConfig = {
    apiKey: "AIzaSyAV-f6sJVT726FztFoXvHXjBzgHCI1w6co",
    authDomain: "authentication--form.firebaseapp.com",
    projectId: "authentication--form",
    storageBucket: "authentication--form.appspot.com",
    messagingSenderId: "325807729816",
    appId: "1:325807729816:web:aac772bd01e063ad42f4ed",
    measurementId: "G-N66LVPJEXN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const auth = firebase.auth()
  function signUp() {
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value );
promise.catch(e=>alert(e.message));
alert("User SignUp")
  }

  function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value );
promise.catch(e=>alert(e.message));
// alert("User SignIn" +email);
}

function signOut() {
    const promise = auth.signOut();
promise.catch((e)=>alert(e.message));
    window.location.href="index.html"
    
}

auth.onAuthStateChanged(function (user) {
    if (user) {
        loginDpRef.style.display = 'block';
        loginDpRef.innerHTML = `<center>
        <h1>You are login</h1>
        <p>Welcome ${user.email}</p>
        </center>;`
    } else {
        loginDpRef.style.display = 'block';
        loginDpRef.innerHTML = `<center>
        <h1>User is signed Out</h1>
        
        </center>`;
    }

})
       