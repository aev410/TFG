import React, { useEffect } from "react";

const ValidadorCorreo = () => {
  // Función para crear una RegExp para el correo:
  const formatoCorreo = () => {
    const formato = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    return formato;
  };

  useEffect(() => {
    const inputEmail = document.getElementById("correo");

    // Validación si el texto ingresado en un campo de correo electrónico coincide con un formato
    // de correo electrónico válido:
    const handleInput = () => {
      const correo = inputEmail.value;
      const formato = formatoCorreo();
      if (formato.test(correo)) {
        inputEmail.setCustomValidity("");
      } else {
        inputEmail.setCustomValidity("Por favor, introduce un correo válido");
      }
    };

    inputEmail.addEventListener("input", handleInput);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      inputEmail.removeEventListener("input", handleInput);
    };
  }, []); // Se ejecuta solo una vez después del montaje del componente

  return null;
};

export default ValidadorCorreo;
