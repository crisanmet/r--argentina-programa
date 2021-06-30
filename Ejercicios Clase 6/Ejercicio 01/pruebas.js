function probarValidarEdad(numero) {
  console.assert(
    validarEdad("23423dadas") === "Este campo solo acepta números",
    "Validar salario no pudo validar que solo sean números"
  );

  console.assert(
    validarEdad(-1) === "Debe ser mayor a $0",
    "Validar salario no pudo validar que el numero ingresado sea mayor a 0"
  );

  console.assert(
    validarEdad("25000") === "",
    "Validar salario no pudo valir un dato correcto"
  );
}

probarValidarEdad();
