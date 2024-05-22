import React, { useState } from 'react';
import './app.css';
import Formulario from './Formulario';
import SoporteNotas from './SoporteNotas';

const App = () => {
  const [notas, setNotas] = useState([]);

  const agregarNota = () => {
    setNotas([...notas, '']);
  };

  const actualizarNota = (index, valor) => {
    const nuevasNotas = [...notas];
    nuevasNotas[index] = valor;
    setNotas(nuevasNotas);
  };

  const eliminarNota = (index) => {
    const nuevasNotas = notas.filter((_, i) => i !== index);
    setNotas(nuevasNotas);
  };

  const borrarTodo = () => {
    setNotas([]);
  };

  const calcularPromedio = () => {
    const suma = notas.reduce((acc, nota) => acc + parseFloat(nota || 0), 0);
    return notas.length ? (suma / notas.length).toFixed(2) : 0;
  };

  return (
    <div id="root">
      <h1>Ingresar Notas</h1>
      <Formulario
        notas={notas}
        agregarNota={agregarNota}
        actualizarNota={actualizarNota}
        eliminarNota={eliminarNota}
        borrarTodo={borrarTodo}
      />
      <SoporteNotas notas={notas} promedio={calcularPromedio()} />
    </div>
  );
};

export default App;
