import React from 'react';

const SoporteNotas = ({ notas, promedio }) => {
  return (
    <div className="SoporteNotas">
      <h2 className="Titulo">Notas Ingresadas</h2>
      <ul>
        {notas.map((nota, index) => (
          <li key={index}>{nota}</li>
        ))}
      </ul>
      <h2 className="Promedio">Promedio: {promedio}</h2>
    </div>
  );
};

export default SoporteNotas;
