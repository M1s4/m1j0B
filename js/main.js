
function redirection() {
    setTimeout(()=> location.href="search-tours.html",1000);
}


function enviar(){
  var correo = document.getElementById('email').value;
  var clave = document.getElementById('pass').value;


  firebase.auth().createUserWithEmailAndPassword(correo, clave)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      
     
    });
}

function desbloquear(){
    var contenido = document.getElementById('pass').type ;
    
  if(contenido == 'text'){
    document.getElementById('pass').type ='password';
    document.getElementById('eyeImg').src='images/icons/eye.svg'
    document.getElementById('contentIMG').title='Ver contraseña'



  }
  else{
    document.getElementById('pass').type ='text';
    document.getElementById('eyeImg').src='images/icons/eye-closed.svg'
    document.getElementById('contentIMG').title='Ocultar contraseña'   

  }
}

function validar(){
  var correo = document.getElementById('email').value;
  var clave = document.getElementById('pass').value;
  // Handle Errors here.
  firebase.auth().signInWithEmailAndPassword(correo, clave)
    .catch(function(error) {
    
       
    var errorCode = error.code;
    var errorMessage = error.message;

   
    // ...
  });

}

function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("existe usuario activo");
      addElement();
      
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {

      // User is signed out.
      // ...
    }
  });
}

observador();

function addElement(){
    var contenedor = document.getElementById('sectionClose');
    contenedor.innerHTML= ` 
      <p>Bienvenido</p>
      <button onclick="CloseSession()">Cerrar </button>    
    `;
}

function CloseSession(){
   firebase.auth().signOut()
   .then(function(){
      console.log ("saliendo ...");
   })
   .catch(function(error){
     console.log(error);
   })

}

function verificar(){
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
}











