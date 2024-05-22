import React from 'react';
import './app.css';
import Boton from './Boton';

const Formulario = ({ notas, agregarNota, actualizarNota, eliminarNota, borrarTodo }) => {
  return (
    <div className="Formulario">
      {notas.map((nota, index) => (
        <div key={index} className="NotaItem">
          <input
            className="InputNota"
            type="number"
            value={nota}
            onChange={(e) => actualizarNota(index, e.target.value)}
          />
          <Boton className="BotonEliminar" onClick={() => eliminarNota(index)}>Eliminar</Boton>
        </div>
      ))}
      <div className="Botonera">
        <Boton onClick={agregarNota}>Agregar Nota</Boton>
        <Boton onClick={borrarTodo}>Borrar Todo</Boton>
      </div>
    </div>
  );
};

export default Formulario;
