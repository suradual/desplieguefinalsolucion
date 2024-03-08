let nombreInput = document.getElementById("nombre");
let emailInput = document.getElementById( "email" );
let commentInput =  document.getElementById("comment");
let selec1tInput = document.getElementById("selector");
let select2Input = document.getElementById("selector2");

botonIngreso.addEventListener('click', function(event){
    event.preventDefault()

     let nombreUser = nombreInput.value
     let emailUser =   emailInput.value;
     let commentUser =  commentInput.value;
     let selec1tUser =   selec1tInput.value;
     let  select2User= select2Input.value;

     
    
            localStorage.setItem("nombre",nombreUser)
            localStorage.setItem("email", emailUser)
            localStorage.setItem("comment",commentUser)
            localStorage.setItem("selector",selec1tUser)
            localStorage.setItem("selector2", select2User)
        
});