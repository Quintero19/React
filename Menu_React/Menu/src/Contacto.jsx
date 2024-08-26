import React, { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = "El nombre es requerido.";
    } else if (nombre.length > 12) {
      nuevosErrores.nombre = "El nombre no debe exceder los 12 caracteres.";
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      nuevosErrores.email = "El email es requerido.";
    } else if (!regexEmail.test(email)) {
      nuevosErrores.email = "El email no es válido.";
    }

    const regexTelefono = /^\d{10}$/;
    if (!telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es requerido.";
    } else if (!regexTelefono.test(telefono)) {
      nuevosErrores.telefono = "El teléfono debe tener 10 dígitos.";
    }

    return nuevosErrores;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevosErrores = validarFormulario();
    if (Object.keys(nuevosErrores).length === 0) {
      alert("Formulario enviado exitosamente");
    } else {
      setErrores(nuevosErrores);
    }
  };

  return (
    <div>
      <center><h1>Bienvenido a nuestro formulario de Contacto</h1></center>
      <br />
      <form className="formulario" onSubmit={manejarEnvio}>
        <label>Ingrese el Nombre: </label>
        <input
          type="text"
          placeholder="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          maxLength={12}
        />
        {errores.nombre && <p style={{ color: "black" }}>{errores.nombre}</p>}
        <br />

        <label>Ingrese su E-Mail: </label>
        <input
          type="text"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={50}
        />
        {errores.email && <p style={{ color: "black" }}>{errores.email}</p>}
        <br />

        <label>Ingrese su Telefono: </label>
        <input
          type="text"
          placeholder="Telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          maxLength={10}
        />
        {errores.telefono && <p style={{ color: "black" }}>{errores.telefono}</p>}
        <br />

        <button type="submit">Enviar</button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default Contacto;
