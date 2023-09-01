import { useState } from "react";
import "./Campo.css";
const Campo = (props) =>{

    const placeholderModificado =`${props.placeholder}...`;

    //destructuracion
    const {type = "text"} =props //si no viene definido en el props por defecto lo convertimos en tipo: type text
    console.log(type)
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input  placeholder={placeholderModificado} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
                type={type}
        />
    </div>
}

export default Campo;