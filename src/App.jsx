import { Component } from 'react'
import SoporteNotas from './componentes/SoporteNotas'
import Formulario from './componentes/Formulario';
import './App.css';

export default class App extends Component {
  constructor (props){
    super (props);
    this.state ={
      contadores: []
    }
  }
  guardar(nombre) {
    let nuevosContadores =[...this.state.contadores, nombre];
    this.setState({contadores: nuevosContadores});
  }

  eliminarContador(index) {
    const nuevosContadores = this.state.contadores.slice();
    nuevosContadores.splice(index, 1);
    this.setState({ contadores: nuevosContadores });
  }
  
  render() {
    return (
        <div className="Contenedor">
            <Formulario 
                guardar={(nombre) => this.guardar(nombre)}
                eliminarTodos={() => this.eliminarTodos()}
            />
            <div className="ListaContadores">
                {this.state.contadores.map((cont, index) => (
                    <Contador key={index} eliminar={() => this.eliminarContador(index)}>
                        {cont}
                    </Contador>
                ))}
      </div>
      </div>
    )
  }
}

//map
//<contador valor>
//
//</contador>