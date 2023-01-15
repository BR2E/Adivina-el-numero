import {input, boton,btnReinicio} from './modulos/variables'
import {comprobarRespuesta} from './modulos/funcionRespuesta'
import {reinicarJuego} from './modulos/reiniciarJuego'

input.focus();

comprobarRespuesta();

boton.addEventListener('click', comprobarRespuesta, false);
btnReinicio.addEventListener('click', reinicarJuego, false);