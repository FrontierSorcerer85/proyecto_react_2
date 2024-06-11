import React from 'react';
import Boton from './Boton';

const Formulario = ({ notas, agregarNota, actualizarNota, eliminarNota, borrarTodo }) => {
  return (
    <div className="Formulario">
      <div className="Botonera">
        <Boton onClick={agregarNota}>Agregar Nota</Boton>
        <Boton onClick={borrarTodo}>Borrar Todo</Boton>
      </div>
      {notas.map((nota, index) => (
        <div key={index} className="NotaItem">
          <input
            className="InputNombre"
            type="text"
            placeholder="Nombre de alumno"
            value={nota.nombre}
            onChange={(e) => actualizarNota(index, 'nombre', e.target.value)}
          />
          <input
            className="InputMateria"
            type="text"
            placeholder="Materia"
            value={nota.materia}
            onChange={(e) => actualizarNota(index, 'materia', e.target.value)}
          />
          <input
            className="InputNota"
            type="number"
            placeholder="Nota numérica"
            value={nota.nota}
            onChange={(e) => actualizarNota(index, 'nota', e.target.value)}
          />
          <Boton className="BotonEliminar" onClick={() => eliminarNota(index)}>Eliminar</Boton>
        </div>
      ))}
    </div>
  );
};

export default Formulario;