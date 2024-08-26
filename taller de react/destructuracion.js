const {nombre,edad,direccion,intereses} = {
    nombre: "Carlos",
    edad: 30,
    direccion: {
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Springfield"
    },
    intereses: ["programación", "lectura", "ciclismo"]
};

document.write("<p>"+nombre+"</p>")
document.write("<p>"+direccion.ciudad+"</p>")
document.write("<p>"+intereses+"</p>")