
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

form.addEventListener('submit',(e) => {
  e.preventDefault();

  checkInputs();
});

// las funciones principales

function checkInputs(){
  // extraer el valor de los inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirm_passwordValue = confirm_password.value.trim();

  if(usernameValue === ''){
    // muestra el error
    // añade el error class

  setErrorFor(username,'Rellene este campo');
} else if (!isNaN(usernameValue)) {
    setErrorFor(username,'Sólo se permiten caracteres de texto');
} else {
  // añade el success class
  setSuccessFor(username);
  }
// las condiciones para el email
if(emailValue === '') {
  setErrorFor(email,'Rellene este campo');
} else if(!isEmailValid(emailValue)) {
  setErrorFor(email,'Email inválido')
} else {
  setSuccessFor(email);
}
// las condiciones para la clave, para en vez de usar maxlengh y limitar los caracteres a 8, que salte un mensaje de error al introducir mas de 8 como en el ejemplo.
if(passwordValue === ''){
  setErrorFor(password,'Rellene este campo');
  } else if (passwordValue.length > 8) {
    setErrorFor(password, 'No debe tener más de 8 caracteres');
    return;
  }
  else{
  // añade el success class
  setSuccessFor(password);
  }

// las dos condiciones para la confirmar clave
if(confirm_passwordValue === ''){
  setErrorFor(confirm_password,'Rellene este campo');
  }else if(passwordValue !== confirm_passwordValue){
  setErrorFor(confirm_password,'Las contraseñas no coinciden');
  } else {
  // añade el success class
  setSuccessFor(confirm_password);
  }

// alert si todo esta ok

  if(usernameValue !== '' && emailValue !== '' && passwordValue !== '' && confirm_passwordValue !== '' && isNaN(usernameValue) && isEmailValid(emailValue) && passwordValue === confirm_passwordValue) {
    alert('La inscripción ha sido correcta');
    }
}
// funcion para el que salte el mensaja de error
function setErrorFor(input,message) {
  const inputFields = input.parentElement; // .input-fields class
  const small = inputFields.querySelector('small');
  // para añadir el mensaje de error de dentro del error-texto1
  small.innerText = message;
  // añade error class

inputFields.className = 'input-fields error';
}

// funcion para que salte el color verde + icono de success
function setSuccessFor(input) {
const inputFields = input.parentElement;
inputFields.className = 'input-fields success';
} 

function isEmailValid(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

