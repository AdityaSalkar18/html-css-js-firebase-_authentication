import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword ,signOut} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


  
  const firebaseConfig = {
    apiKey: "AIzaSyDyahEFvY2O0b2zzcUkPle4e2JZjNcqVZE",
    authDomain: "formlogin-743ff.firebaseapp.com",
    projectId: "formlogin-743ff",
    storageBucket: "formlogin-743ff.appspot.com",
    messagingSenderId: "1086081266427",
    appId: "1:1086081266427:web:a7797d09020b335d86b65e"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
document.getElementById("reg-btn").addEventListener('click',function(){
    document.getElementById("register-div").style.display="inline";
    document.getElementById("login-div").style.display="none";
});

document.getElementById("login-btn").addEventListener('click',function(){
    document.getElementById("register-div").style.display="none";
    document.getElementById("login-div").style.display="inline";
});
document.getElementById("login-btn").addEventListener('click',function(){
    const loginEmail=document.getElementById("login-email").value;
    const loginPassword=document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+"was Login Successfully";
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });
});
  // register-btn

  document.getElementById("register-btn").addEventListener('click',function(){
    const registerEmail=document.getElementById("register-email").value;
    const registerPassword=document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome<br>"+registerEmail+"was Register Successfully";
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });
  });
  document.getElementById("log-out-btn").addEventListener('click',function(){
    signOut(auth).then(() => {
        document.getElementById("result-box").style.display="none";
        document.getElementById("login-div").style.display="inline";
        
      }).catch((error) => {
        document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
        
      });
    
  });





