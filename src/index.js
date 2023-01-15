import {input, boton,btnReinicio} from './modulos/variables'
import {comprobarRespuesta, reinicarJuego} from './modulos/funcionRespuesta'

input.focus();

comprobarRespuesta();

boton.addEventListener('click', comprobarRespuesta, false);
btnReinicio.addEventListener('click', reinicarJuego, false);