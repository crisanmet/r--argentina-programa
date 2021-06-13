
const $botonCalcular=document.querySelector("#boton-calcular");




function numeroMenor(numero){
    let menor=999999;
    for(let i=0; i<numero.length; i++){
        if(numero[i] < menor){
            menor=numero[i];
    }
    }
    return menor;
}

function numeroMayor(numero){
    let mayor=-9999999;
    for(let i=0; i<numero.length; i++){
        if (numero[i] > mayor){
            mayor=numero[i];
        }
    }return mayor;
}

function masFrecuente(numero){
    let frecuente;
    for(let i=0; i<numero.length; i++){
        for(let j=i+1;j< numero.length; j++){
            if(numero[i]===numero[j]){
                frecuente = numero[i];
            }
        }
    }return frecuente;
}

function sacarPromedio(numero){
    let contador = 0;
    for(let i=0; i<numero.length; i++){
        contador += numero[i];
    } return contador / numero.length;
}


$botonCalcular.onclick = function(){
    const arrayDeLi=document.querySelectorAll("li");
    const sumaDeLi=[];

    

    for(let i=0; i<arrayDeLi.length; i++){
        sumaDeLi.push(Number(arrayDeLi[i].innerText));
    }
    

    const frecuente=masFrecuente(sumaDeLi);
    const menor=numeroMenor(sumaDeLi);
    const mayor=numeroMayor(sumaDeLi);
    const promedio=sacarPromedio(sumaDeLi);

    document.querySelector("#mostrar-promedio").innerText=promedio;
    document.querySelector("#mostrar-menor").innerText=menor;
    document.querySelector("#mostrar-mayor").innerText=mayor;
    document.querySelector("#mostrar-frecuente").innerText=frecuente;
    
    return false;
}

