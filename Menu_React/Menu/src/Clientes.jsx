import React from 'react';
import './Clientes.css';

function Clientes() {
  return (
    <div className="clientes-container">
      <h1 className="titulo-clientes">Clientes</h1>
      <p className="descripcion-clientes">Nuestros clientes nos recomiendan:</p>
      <div className="clientes-testimonios">
        <div className="testimonio">
          <img
            src="https://caracoltv.brightspotcdn.com/dims4/default/57c197c/2147483647/strip/true/crop/774x546+0+0/resize/774x546!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Ffe%2F3f%2Fb26c062d4c59839009e901cb616e%2Fwhatsapp-image-2024-07-22-at-16-02-47.jpeg"
            alt="Juan Pérez"
            className="foto-cliente"
          />
          <p className="texto-testimonio">
            "Me encantó el servicio que recibí, muy profesional y amable."
          </p>
          <p className="nombre-cliente">- Cris Valencia</p>
        </div>
        <div className="testimonio">
          <img
            src="https://www.elespectador.com/resizer/v2/BAZAKTRLWFHZ7E6J477NSM4CTE.png?auth=369a8996e788f23c96c01fff5d519453e19ff124f926177fb85846888c8a0fe8&width=920&height=613&smart=true&quality=70"
            alt="Epa Colombia"
            className="foto-cliente"
          />
          <p className="texto-testimonio">
            "Los productos son de alta calidad y el precio es muy razonable."
          </p>
          <p className="nombre-cliente">- Epa Colombia</p>
        </div>
        <div className="testimonio">
          <img
            src="https://www.kienyke.com/sites/default/files/styles/interna_contenido_s/public/2023-04/JH%20de%20la%20Cruz%20historia_0001_9.jpg?itok=VZnny0nN"
            alt="Jh de la Cruz"
            className="foto-cliente"
          />
          <p className="texto-testimonio">
            "Me gustó mucho la atención al cliente, muy rápida y eficiente."
          </p>
          <p className="nombre-cliente">- Jh de la Cruz</p>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
