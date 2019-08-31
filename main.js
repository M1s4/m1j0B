

function enviar(){
    var correo = document.getElementById('email').value;
    var clave = document.getElementById('pass').value;
    console.log(correo)
    console.log(clave)

    firebase.auth().createUserWithEmailAndPassword(correo, clave)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        
        console.log(errorCode)
        console.log(errorMessage)
      });
      

}









