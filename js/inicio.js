function login(){
    let email = document.getElementById('email').value;
    let contraseña = document.getElementById('password').value;
    if( email==="" || contraseña===""){
        alert("Por favor ingresar Email y Contraseña")
    }else{
        location.href="index.html"
    }
}
document.addEventListener("DOMContentLoaded",()=>{
 let boton =  document.getElementById("enviar").addEventListener("click",()=>{
       login();
    })
})