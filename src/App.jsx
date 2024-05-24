import React, { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import SoporteNotas from './componentes/SoporteNotas';

const App = () => {
  const [notas, setNotas] = useState([]);

  const agregarNota = () => {
    setNotas([...notas, { nombre: '', materia: '', nota: '' }]);
  };

  const actualizarNota = (index, campo, valor) => {
    const nuevasNotas = [...notas];
    nuevasNotas[index][campo] = valor;
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
    const suma = notas.reduce((acc, { nota }) => acc + parseFloat(nota || 0), 0);
    return notas.length ? (suma / notas.length).toFixed(2) : 0;
  };

  return (
    <div id="root">
      <h1>Ingresar Notas</h1>
      <div className="main-content">
        <Formulario
          notas={notas}
          agregarNota={agregarNota}
          actualizarNota={actualizarNota}
          eliminarNota={eliminarNota}
          borrarTodo={borrarTodo}
        />
        <SoporteNotas notas={notas} promedio={calcularPromedio()} />
      </div>
    </div>
  );
};

export default App;