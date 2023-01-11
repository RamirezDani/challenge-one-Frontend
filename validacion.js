//Haz tú validación en javascript acá
var nombre = document.getElementById("nombre__form");
let email = document.getElementById("email__form");
let asunto = document.getElementById("asunto__form");
let mensaje = document.getElementById("mensage__form");


nombre.addEventListener('invalid', function (evt) {  this.setCustomValidity('Solo ingrese letras');});
nombre.addEventListener("input", function (evt) {  this.setCustomValidity('');});
email.addEventListener('invalid', function (evt) {  this.setCustomValidity('Ingrese un email válido');});
email.addEventListener("input", function (evt) {  this.setCustomValidity('');});
asunto.addEventListener('invalid', function (evt) {  this.setCustomValidity('Ingrese un asunto');});
asunto.addEventListener("input", function (evt) {  this.setCustomValidity('');});
mensaje.addEventListener('invalid', function (evt) {  this.setCustomValidity('Ingrese un mensaje');});
mensaje.addEventListener("input", function (evt) {  this.setCustomValidity('');});
//listener
/* btn.addEventListener('click', (e)=>{	
	
  e.preventDefault(); //previene que se refresque la pagina
  let nombre = document.getElementById("nombre__form");
  
  console.log(nombre.value);

  if (!document.getElementById('formulario__form').checkValidity()) {
    // Si el formulario no es válido, muestra un mensaje de error
    alert('El formulario no es válido');    
  }else{
    console.log("nonono");
  }
  
}) */