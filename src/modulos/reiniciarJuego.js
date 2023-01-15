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
