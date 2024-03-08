let usuarioBaseDatos="suradual"
let contrasenaBaseDatos="12345"
let correoBaseDatos="suradual@gmail.com"

let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioEmail=document.getElementById("email")
let cajaFormularioPassword=document.getElementById("password")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){

    evento.preventDefault()
    
    //1.capturamos la informacion del formulario
    let nombreUsuario=cajaFormularioNombre.value
    let correoUsuario=cajaFormularioEmail.value
    let passwordUsario=cajaFormularioPassword.value
    
    //validando los datos del usuario

    if(usuarioBaseDatos==nombreUsuario && contrasenaBaseDatos==passwordUsario && correoBaseDatos==correoUsuario){
        Swal.fire({
            title: "Bienvenido! "+nombreUsuario,
            text: "Tus credenciales son correctas",
            icon: "success"
          })

          setTimeout(function(){
            sessionStorage.setItem("nombre",nombreUsuario)
            sessionStorage.setItem("correo",correoUsuario)
            sessionStorage.setItem("contrasena",passwordUsario)
            window.location.href="./src/views/peticiones.html"
          },2000)
        
          

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops..."+nombreUsuario,
            text: "Tus credenciales son incorrectas",
            
          });
        

    }

})