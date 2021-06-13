const $botonMostrar=document.querySelector("#mostrar-info");
    
$botonMostrar.onclick = function(){

    const nombre=document.querySelector("#nombre").value;
    const apellido=document.querySelector("#apellido").value;
    const edad=Number(document.querySelector("#edad").value);

    const nombreUsuario= `${nombre} y ${apellido}`
    document.querySelector("h1").innerText= `Bienvenido, ${nombreUsuario}`;
    
    
    const informacionUsuario= `Tu nombre es ${nombreUsuario} y tenes ${edad} años.`;
    document.querySelector("#informacion-usuario").innerText= informacionUsuario;
    

  

    return false;
}