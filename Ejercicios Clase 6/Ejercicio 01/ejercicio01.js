document.querySelector("#boton-siguiente").onclick = function () {
  const $cantidadDeIntegrantes = Number(
    document.querySelector("#cantidad-integrantes").value
  );

  borrarIntegrantesCargados();
  crearIntegrantes($cantidadDeIntegrantes);

  return false;
};

document.querySelector("#calcular").onclick = function (event) {
  const edades = edadesIntegrantes();
  const validarForm = validarFormulario(edades);

  if (validarForm) {
    const $errores = document.querySelector("#errores");
    const $error = document.createElement("li");
    $error.innerText = validarForm;

    $errores.appendChild($error);

    mostrarErrores();
    ocultarResultados();
    mostrarReset();
  } else {
    const edadMayor = numeroMayor(edades);
    const edadMenor = numeroMenor(edades);
    const promedioEdad = sacarPromedio(edades);

    document.querySelector("#edad-mayor").innerText = edadMayor;
    document.querySelector("#edad-menor").innerText = edadMenor;
    document.querySelector("#edad-promedio").innerText = promedioEdad;
    mostrarResultados();
    mostrarReset();
    ocultarErrores();

    event.preventDefault();
  }
};

document.querySelector("#resetear").onclick = reset;

function crearIntegrantes(integrantes) {
  if (integrantes > 0) {
    mostrarBtnCalcular();
  } else {
    reset();
  }

  for (let i = 0; i < integrantes; i++) {
    mostrarIntegrantes(i);
  }
}

function mostrarIntegrantes(numero) {
  const elementoDiv = document.createElement("div");
  elementoDiv.className = "integrante";

  const elementoLabel = document.createElement("label");
  elementoLabel.textContent = `Edad del integrante Nro. ${numero + 1}`;
  const elementoInput = document.createElement("input");
  elementoInput.type = "number";

  elementoDiv.appendChild(elementoLabel);
  elementoDiv.appendChild(elementoInput);

  const $integrantes = document.querySelector("#cargar-integrantes");
  $integrantes.appendChild(elementoDiv);
}

function borrarIntegrantesCargados() {
  const $integrantes = document.querySelectorAll(".integrante");
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function borrarErrores() {
  const errores = document.querySelectorAll("#errores");
  for (let i = 0; i < errores.length; i++) {
    errores[i].remove();
  }
}
function mostrarBtnCalcular() {
  document.querySelector("#calcular").className = "";
}

function ocultarBtnCalcular() {
  document.querySelector("#calcular").className = "oculto";
}

function ocultarResultados() {
  document.querySelector("#calculo-edades").className = "oculto";
}

function mostrarResultados() {
  document.querySelector("#calculo-edades").className = "";
}

function mostrarReset() {
  document.querySelector("#resetear").className = "";
}

function ocultarReset() {
  document.querySelector("#resetear").className = "oculto";
}

function mostrarErrores() {
  document.querySelector("#errores").className = "";
}

function ocultarErrores() {
  document.querySelector("#errores").className = "oculto";
}

function edadesIntegrantes() {
  const $integrantes = document.querySelectorAll(".integrante input");
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}

function validarFormulario(edades) {
  const edad = [];
  let edadIteracion;
  let validarEdades;
  let errores = [];

  for (let i = 0; i < edades.length; i++) {
    edadIteracion = edades[i].value;
    validarEdades = validarEdad(edadIteracion);
    if (validarEdades !== 0) {
      errores.push(validarEdades);
    }
  }
  return errores;
}

function validarEdad(numero) {
  if (!/[0-9\.]+$/.test(numero)) {
    return "Este campo solo acepta números";
  }
  if (numero < 1) {
    return "Debe ser mayor a $0";
  }
  return "";
}

function reset() {
  borrarIntegrantesCargados();
  ocultarResultados();
  ocultarBtnCalcular();
  ocultarReset();
  borrarErrores();
}

function numeroMenor(numero) {
  let menor = numero[0];
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] < menor) {
      menor = numero[i];
    }
  }
  return menor;
}

function numeroMayor(numero) {
  let mayor = numero[0];
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > mayor) {
      mayor = numero[i];
    }
  }
  return mayor;
}

function sacarPromedio(numero) {
  let contador = 0;
  for (let i = 0; i < numero.length; i++) {
    contador += numero[i];
  }
  return contador / numero.length;
}
