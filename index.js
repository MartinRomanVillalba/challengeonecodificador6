var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var muneco = document.querySelector(".muneco");
var contenedor = document.querySelector(".parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
  var cajatexto = recuperarTexto();

  if(validarTexto(cajatexto)){
    resultado.textContent = encriptarTexto(cajatexto);
    ocultarAdelante();
  } else{
    mostrarAlerta()
  }
}

function desencriptar() {
  var cajatexto = recuperarTexto();
  
  if(validarTexto(cajatexto)){
    resultado.textContent = desencriptarTexto(cajatexto);
    ocultarAdelante();
  } else{
    mostrarAlerta()
  }
}

function recuperarTexto() {
  var cajatexto = document.querySelector(".cajatexto");
  return cajatexto.value;
}

function validarTexto(texto){
  var regex = /^[a-z\s]+$/;
  return regex.test(texto)
}

function mostrarAlerta() {
  alert("Ingrese solo letras minúsculas y sin acentos");
}

function ocultarAdelante() {
  muneco.classList.add("ocultar");
  contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

const botonCopiar = document.querySelector(".boton-copiar");

botonCopiar.addEventListener(
  "click",
  (copiar = () => {
    var contenido = document.querySelector(".resultado").textContent.trim();
    navigator.clipboard.writeText(contenido);
  })
);
