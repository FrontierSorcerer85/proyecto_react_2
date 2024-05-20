import {Component} from "react";
import Formulario from "./Formulario";
export default class Formulario extends Component {
    constructor(props){
        super (props);
        this.state = {
            nombre: "Enviar nota"
        }
    }
}