import "./style.css";

const setFormat = (valor:string):string => {

   valor = valor.padStart(2, "0");
   return valor;
}

var monitor = document.getElementById("monitor") as HTMLDivElement;
const reset = () => {
   let valor = "0";
   monitor.innerHTML = setFormat(valor);
}

/* Ejecuta function reset una vez en primera carga para establecer
*  el contador a 0 al inicio.
*/
reset();


const downNumber = () :void => {
   let valor = parseInt(monitor.innerHTML);
   valor = valor - 1;
   let valorActualizado = valor.toString();
   monitor.innerHTML = setFormat(valorActualizado);
}

const upNumber = () :void => {
   let valor = parseInt(monitor.innerHTML);
   valor = valor + 1;
   let valorActualizado = valor.toString();
   monitor.innerHTML = setFormat(valorActualizado);
}
/* Botón para ir al puesto indicado */
const goTo = ():void => {
   const puesto = parseInt((document.getElementById("elige-puesto") as HTMLInputElement).value);

   if (puesto >= 0){      
      let valorActualizado = puesto.toString();
      monitor.innerHTML = setFormat(valorActualizado);
   }
}


const btnSuma = document.getElementById("suma") as HTMLButtonElement;
btnSuma.addEventListener("click", upNumber);

const btnResta = document.getElementById("resta") as HTMLButtonElement;
btnResta.addEventListener("click", downNumber);


const campoGoTo = document.getElementById("elige-puesto") as HTMLInputElement;
const btnGoto = document.getElementById("btn-goto") as HTMLButtonElement;

/* Habilita / deshabilita botón de ir al puesto seleccionado
*  dependiendo de si el input tiene algún valor.
*/
campoGoTo.addEventListener("input", () => {
   if (campoGoTo.value.length !== 0 && campoGoTo.value !== '' && campoGoTo.value >= '0'){
      btnGoto.disabled = false;
   }else{
      btnGoto.disabled = true;
   }
})
// Botón de ir al puesto indicado
btnGoto.addEventListener("click", goTo);

const btnReset = document.getElementById("reset") as HTMLButtonElement;
btnReset.addEventListener("click", reset);



