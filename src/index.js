import {comprobarRespuesta} from './modulos/funcionRespuesta'

const input = document.querySelector('input');
const boton = document.querySelector('.enviar__respuesta');
const respuesta = document.querySelector('.respuesta p');
const contenedorRespuesta = document.querySelector('.respuesta');
const btnReinicio = document.querySelector('.nuevoJuego');
const resAnteriores = document.querySelector('.respuestasAnteriores');
const ayudaRespuesta = document.querySelector('.ayudaRespuesta');

input.focus();

let contador = 0;
let intentos = '';
let primerIntento = true;
let numeroRandom = 1;

comprobarRespuesta();