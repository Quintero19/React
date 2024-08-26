const baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
const baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

function encontrado() {
    console.log('pais encontrado');
}

function busquedaBaseDatos2(pais, callbackEncontrado) {
    if (baseDatos2.includes(pais)) {
        callbackEncontrado();
    } else {
        console.log('Dato no encontrado');
    }
}

function busquedaBaseDatos1(pais, callbackEncontrado, callbackBusquedaBaseDatos2) {
    if (baseDatos1.includes(pais)) {
        callbackEncontrado();
    } else {
        callbackBusquedaBaseDatos2(pais, callbackEncontrado);
    }
}


busquedaBaseDatos1('Mexico', encontrado, busquedaBaseDatos2);
busquedaBaseDatos2('Australia', encontrado, busquedaBaseDatos2); 