import React, { useState } from 'react';
import './App.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    identificacion: '',
    email: '',
    nivelCarrera: '',
    programa: '',
    materia: '',
    corte1: '',
    corte2: '',
    corte3: '',
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const corte1 = parseFloat(formData.corte1);
    const corte2 = parseFloat(formData.corte2);
    const corte3 = parseFloat(formData.corte3);

    if (
      corte1 < 0 || corte1 > 5 ||
      corte2 < 0 || corte2 > 5 ||
      corte3 < 0 || corte3 > 5
    ) {
      setResult('Las notas deben estar en el rango de 0 a 5.');
      return;
    }

    const finalGrade = corte1 * 0.35 + corte2 * 0.35 + corte3 * 0.30;

    if (finalGrade >= 3) {
      setResult(`Has aprobado la materia con una nota de ${finalGrade.toFixed(2)}.`);
    } else {
      setResult(`No has aprobado la materia. Tu nota final es ${finalGrade.toFixed(2)}.`);
    }
  };

  return (
    <div>
      <div className='container'>
      <h2>Formulario de Estudiante</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Apellidos:</label>
          <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div>
          <label>Identificación:</label>
          <input type="text" name="identificacion" value={formData.identificacion} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Nivel de Carrera:</label>
          <select name="nivelCarrera" value={formData.nivelCarrera} onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="Tecnico">Técnico</option>
            <option value="Tecnologo">Tecnólogo</option>
            <option value="Pregrado">Pregrado</option>
            <option value="Postgrado">Postgrado</option>
          </select>
        </div>
        <div>
          <label>Programa de Formación:</label>
          <input type="text" name="programa" value={formData.programa} onChange={handleChange} required />
        </div>
        <div>
          <label>Materia:</label>
          <input type="text" name="materia" value={formData.materia} onChange={handleChange} required />
        </div>
        <div>
          <label>Nota 1er Corte (35%):</label>
          <input type="number" name="corte1" value={formData.corte1} onChange={handleChange} required />
        </div>
        <div>
          <label>Nota 2do Corte (35%):</label>
          <input type="number" name="corte2" value={formData.corte2} onChange={handleChange} required />
        </div>
        <div>
          <label>Nota 3er Corte (30%):</label>
          <input type="number" name="corte3" value={formData.corte3} onChange={handleChange} required />
        </div>
        <button type="submit">Calcular Nota Final</button>
      </form>
      </div>
      
      {result && <div>{result}</div>}
    </div>
  );
};

export default StudentForm;
