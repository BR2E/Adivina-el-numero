import { input, respuesta, resAnteriores, boton, btnReinicio, ayudaRespuesta } from './variables'



let contador = 0;
let intentos = '';
let primerIntento = true;
let numeroRandom = 1;



export function comprobarRespuesta() {

    let valor = input.value;


    if (primerIntento) {
        numeroRandom = Math.floor(Math.random() * 100) + 1;
        primerIntento = false
    }


    if (valor != '') {

        if (valor == numeroRandom) {
            respuesta.textContent = 'Felicidades !Ganaste';
            respuesta.style.color = '#00ff08'
            finJuego();
        } else if (valor != numeroRandom) {
            contador++;
            intentos += input.value + ', ';
            resAnteriores.textContent = intentos;
            input.value = '';
        }

        if (valor > numeroRandom) {
            ayudaRespuesta.textContent = 'El numero tiene que ser menor';
            ayudaRespuesta.style.color = '#bd7424'
        } else if (valor < numeroRandom) {
            ayudaRespuesta.textContent = 'El numero tiene que ser mayor';
            ayudaRespuesta.style.color = '#cdab1e'
        }

        if (contador === 10) {
            respuesta.textContent = `!Perdiste  respuesta:${numeroRandom}`;
            respuesta.style.color = 'red'
            finJuego();
        }
    }


    input.focus();

}

function finJuego() {
    input.disabled = true;
    boton.disabled = true;
    btnReinicio.style.display = 'inline'
    ayudaRespuesta.textContent = '';
    contador = 0;
    primerIntento = true;
}

export function reinicarJuego() {
    respuesta.textContent = '';
    respuesta.style.color = '#cdab1e';
    input.disabled = false;
    boton.disabled = false;
    input.value = '';
    intentos = '';
    contador = 0;
    primerIntento = true;
    btnReinicio.style.display = 'none'
}

