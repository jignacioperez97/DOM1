function clickBoton() {
  console.log("Se clickea el boton para generar numero");
  let sectionPadre = document.getElementsByTagName("section");
  let botonGenerar = window.prompt("Probar");
  let numeroAzar = Math.floor(Math.random() * 10);
  console.log(numeroAzar);
  console.log(botonGenerar);
  /* let textoGenerado = document.createElement("p");
  textoGenerado.innerHTML = "El número ingresado es: " + botonGenerar;
  textoGenerado.className = "lead mt-3";
  console.log(textoGenerado);
  sectionPadre[0].appendChild(textoGenerado); */

  if (botonGenerar == numeroAzar) {
    let textoAdivinaste = alert(`Adivinaste! El número era ${numeroAzar}`);
  } else if (botonGenerar > numeroAzar) {
    let alertMayor = alert("El número ingresado es mayor que el número mágico");
    alertMayor;
  } else {
    let alertMenor = alert("El número ingresado es menor que el número mágico");
    alertMenor;
  }
}
