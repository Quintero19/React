function verificarVocal(cadena) {
    return new Promise((resolve, reject) => {
        const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        const ultimoCaracter = cadena.charAt(cadena.length - 1);

        if (vocales.includes(ultimoCaracter)) {
            resolve(ultimoCaracter);
        } else {
            reject('el caracter no es una vocal');
        }
    });
}


verificarVocal("Hola")
    .then(vocal => console.log("La vocal es:", vocal))
    .catch(error => console.error(error));

verificarVocal("Mundo")
    .then(vocal => console.log("La vocal es:", vocal))
    .catch(error => console.error(error));

