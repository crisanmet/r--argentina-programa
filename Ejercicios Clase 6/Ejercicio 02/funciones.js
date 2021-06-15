
  function numeroMenor(numero){
    let menor=numero[0];
    for(let i=0; i<numero.length; i++){
        if(numero[i] < menor){
            menor=numero[i];
    }
    }
    return menor;
}

function numeroMayor(numero){
    let mayor= numero[0];
    for(let i=0; i<numero.length; i++){
        if (numero[i] > mayor){
            mayor=numero[i];
        }
    }return mayor;
}


function sacarPromedio(numero){
    let contador = 0;
    for(let i=0; i<numero.length; i++){
        contador += numero[i];
    } return contador / numero.length;
}

function mensualPromedio(numero) {
    
    return numero / 12;
}

function salarioAnual(numero){
    let contador=0;
    for (let i=0; i<numero.length; i++){
        contador += numero[i];
    }return contador / numero.length;

}
function totalSalarios(numero){
    let contador=0;
    for (let i=0; i<numero.length; i++){
        contador += numero[i];
    }return contador;

}