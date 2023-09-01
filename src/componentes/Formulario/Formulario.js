import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
const Formulario =(props) =>{

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] =useState("");

    const [titulo, actualizarTitulo]= useState("");
    const [color, actualizarColor] =useState("");

    //destructuracion de datos
    const {registrarColaborador, crearEquipo}= props;

    const manejarEnvio = (e) =>{
        e.preventDefault();
        console.log("Manejar el envío");
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEnvio = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})   // o {titulo: titulo, color:color} (objeto simplificado)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo titulo="Nombre" 
            placeholder="Ingresar Nombre" 
            required valor={nombre} 
            actualizarValor={actualizarNombre}
        />

        <Campo 
            titulo="Puesto"
            placeholder="Ingresar Puesto" 
            required
            valor={puesto} 
            actualizarValor={actualizarPuesto}
        />

        <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
        />

        <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos = {props.equipos}
        />
        <Boton>
            Crear
        </Boton>
        </form>

        <form onSubmit={manejarNuevoEnvio}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo titulo="Titulo" 
            placeholder="Ingresar Titulo" 
            required valor={titulo} 
            actualizarValor={actualizarTitulo}
        />

        <Campo 
            titulo="Color"
            placeholder="Ingresa el color en Hexadecimal" 
            required
            valor={color} 
            actualizarValor={actualizarColor}
            type ="color"
        />
        <Boton>Registrar Equipo</Boton>
        </form>

    </section>
}

export default Formulario;