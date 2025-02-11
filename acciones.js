const botonNo = document.querySelector(".boton-no");
const botonSi = document.querySelector(".boton-si");
const gif = document.querySelector(".gif-amor");
let contador = 0;

botonNo.addEventListener("click", function () {
  contador++;
  if (contador >= 5 && contador <= 10) {
    gif.style.backgroundImage = "url('https://i.gifer.com/YCZM.gif')";
  } else if (contador >= 10) {
    gif.style.backgroundImage =
      "url('https://media.tenor.com/fvphRD_LUEMAAAAj/bear-angry.gif')";
  }
  botonNo.style.width = "100px";

  let anchoSi = botonSi.offsetWidth;
  let altoSi = botonSi.offsetHeight;

  let anchoNo = botonNo.offsetWidth;
  let altoNo = botonNo.offsetHeight;

  botonSi.style.width = anchoSi + 20 + "px";
  botonSi.style.height = altoSi + 20 + "px";

  botonNo.style.width = anchoNo - 5 + "px";
  botonNo.style.height = altoNo - 5 + "px";

  botonNo.textContent = "No";
});
