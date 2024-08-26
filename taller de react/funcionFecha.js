const edadEn10años = edad =>edad + 10

const edades = [15, 22, 35, 44, 60];

const aumentoedad = edades.map(edadEn10años)

console.log(aumentoedad)