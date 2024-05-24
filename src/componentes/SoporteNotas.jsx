import React from 'react';

const SoporteNotas = ({ notas, promedio }) => {
  return (
    <div className="SoporteNotas">
      <div className="NotasIngresadas">
        <h2 className="Titulo">Notas Ingresadas</h2>
        <ul>
          {notas.map((nota, index) => (
            <li key={index}>{`${nota.nombre} - ${nota.materia}: ${nota.nota}`}</li>
          ))}
        </ul>
      </div>
      <div className="PromedioNotas">
        <h2 className="Promedio">Promedio: {promedio}</h2>
      </div>
    </div>
  );
};

export default SoporteNotas;