//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



let horasParciales;
let minutosParciales;
let segundosParciales;

let horasTotales;
let minutosTotales;
let segundosTotales;


function sumarTiempos(numeros){
    let suma=0;
    for(let i=0; i<numeros.length ; i++){
        suma += Number(numeros[i].value)
    }
    return suma;
}


const $botonCalcular=document.querySelector("#calcular-duracion");

$botonCalcular.onclick = function(){

    const listaHoras=document.querySelectorAll(".horas")
    const listaMinutos=document.querySelectorAll(".minutos")
    const listaSegundos=document.querySelectorAll(".segundos")
    
    horasParciales= sumarTiempos(listaHoras);
    minutosParciales=sumarTiempos(listaMinutos);
    segundosParciales=sumarTiempos(listaSegundos);

    segundosTotales= Math.floor(segundosParciales % 60);
    minutosTotales= Math.floor(segundosParciales / 60) + (minutosParciales % 60);
    horasTotales= Math.floor(minutosParciales / 60 + horasParciales);

    document.querySelector("#duracion-videos").innerText= `La duración de los videos es de:${horasTotales}:${minutosTotales}:${segundosTotales}`; 

    console.log(horasTotales);
    console.log(minutosTotales);
    console.log(segundosTotales);

    
    return false;
}