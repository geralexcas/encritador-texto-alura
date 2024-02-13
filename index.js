function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let mayusculas = /[A-Z]/; 
  let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/;
  let numeros = /[0-9]/
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.jpg";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
  if (mayusculas.test(texto)) { // Verificar si hay al menos una mayúscula en el texto
    tituloMensaje.textContent = "No se permiten mayúsculas";
    muñeco.src = "./img/encriptado.jpg";
    parrafo.textContent = "";
    document.getElementById("texto").value = ""; // Limpiar el campo de texto
    swal("Ooops!", "No se permiten mayúsculas en el texto", "warning");
    return; // Salir de la función si hay mayúsculas
  }
  if (caracteres.test(texto)) { // Verificar si hay al menos una mayúscula en el texto
    tituloMensaje.textContent = "No se permiten Caracteres";
    muñeco.src = "./img/encriptado.jpg";
    parrafo.textContent = "";
    document.getElementById("texto").value = ""; // Limpiar el campo de texto
    swal("Ooops!", "No se permiten caracteres en el texto", "warning");
    return; // Salir de la función si hay mayúsculas
  }
  if (numeros.test(texto)) { // Verificar si hay al menos una mayúscula en el texto
    tituloMensaje.textContent = "No se permiten numeros";
    muñeco.src = "./img/encriptado.jpg";
    parrafo.textContent = "";
    document.getElementById("texto").value = ""; // Limpiar el campo de texto
    swal("Ooops!", "No se permiten numeros en el texto", "warning");
    return; // Salir de la función si numeros
  
}
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./img/desencriptado.jpg";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}
