/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/



document.querySelector("#boton-agregar").onclick = function(){

    const $salariosAgregar=Number(document.querySelector("#salarios-familia").value);

    if($salariosAgregar >0){
        inputSalarios($salariosAgregar);
        MostrarBotonBorrar()
        mostrarBotonResetear()
        mostrarBotonCalcular()
    }    
    
    return false;
}

document.querySelector("#borrar-salario").onclick = borrarSalarios;

document.querySelector("#resetear").onclick = reset;

document.querySelector("#calcular").onclick = function(){

    const salarios=sumaDeSalarios();

    const salarioMayor=numeroMayor(salarios);
    const salarioMenor=numeroMenor(salarios);
    const salarioAnualPromedio=salarioAnual(salarios);
    const salarioMensualPromedio= mensualPromedio(salarioAnualPromedio);

    document.querySelector("#salario-mayor").textContent=salarioMayor;
    document.querySelector("#salario-menor").textContent=salarioMenor;
    document.querySelector("#salario-anual-promedio").textContent=salarioAnualPromedio;
    document.querySelector("#salario-mensual-promedio").textContent=salarioMensualPromedio;

    mostrarResultados() 
}


function inputSalarios(salario){

    const elementoDiv=document.createElement("div");
    elementoDiv.className="div-salarios";

    const elementoLabel=document.createElement("label");
    elementoLabel.textContent=`El salario ingresado es de:`;
    const elementoInput=document.createElement("input");
    elementoInput.type="number";
    elementoInput.value= `${salario}` ;

    elementoDiv.appendChild(elementoLabel);
    elementoDiv.appendChild(elementoInput);

    const $salarios=document.querySelector("#mostrar-salarios");
    $salarios.appendChild(elementoDiv);
}

function sumaDeSalarios(){
    const $sumaSalarios=document.querySelectorAll(".div-salarios input");
    const $suma=[];

    for(let i=0; i < $sumaSalarios.length; i ++ ){
        if($sumaSalarios[i].value == ""){
            continue
        }$suma.push(Number($sumaSalarios[i].value));
    }
    return $suma;
}



function borrarSalarios(){

    const $borrarInput=document.querySelectorAll(".div-salarios");
    const $ultimoInput= $borrarInput.length -1;
    $borrarInput[$ultimoInput].remove();
 
}

function MostrarBotonBorrar(){
    document.querySelector("#borrar-salario").className="";

}

function  OcultarBotonBorrar(){
    document.querySelector("#borrar-salario").className="oculto";
}

function reset(){
    borrarTodosSalarios()
    OcultarBotonBorrar()
    ocultarBotonResetear()
    ocultarBotonCalcular()
    ocultarResultados()
}

function borrarTodosSalarios(){

    const $salariosABorrar=document.querySelectorAll(".div-salarios");
    for(let i=0; i <$salariosABorrar.length; i++){
        $salariosABorrar[i].remove();
    }
}

function mostrarBotonResetear(){
    document.querySelector("#resetear").className="";
}

function ocultarBotonResetear(){
    document.querySelector("#resetear").className="oculto";
}

function mostrarBotonCalcular(){
    document.querySelector("#calcular").className="";
}

function ocultarBotonCalcular(){
    document.querySelector("#calcular").className="oculto";
}


function ocultarResultados() {
    document.querySelector('#calculo-salario').className = "oculto";
  }

  function mostrarResultados() {
    document.querySelector('#calculo-salario').className = "";
  }

