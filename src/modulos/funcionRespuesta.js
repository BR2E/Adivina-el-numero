import {input, respuesta,resAnteriores, ayudaRespuesta} from './variables'
import {finJuegos} from './finJuego'



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
            finJuegos()
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
            finJuegos();
        }
    }


    input.focus();

}