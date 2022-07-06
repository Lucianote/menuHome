import React from "react";
import { Link, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Reloj from "./Reloj";

const Home = ({logout}) => {
    let hoy = new Date()
    let hora = hoy.getHours()
    let mensaje
    if (hora >= 19 && hora< 24) {
        mensaje = "Buenas noches usuario"
    }
    else if (hora > 12 && hora < 19 ){
        mensaje = "Buenas tardes usuario"
    }
    else if (hora >= 0 && hora < 12){
        mensaje = "Buenos dias usuario"
    }
    else{
        mensaje = "Problemas al cargar el mensaje , disculpe las molestias ..."
    }
    console.log(hora)
    return(
        <div className="Home">
            <nav>
            <Link to={"/tareas"}>Tareas</Link>
            <Link to={"/clima"}>Pronosticos</Link>
            </nav>
            <Reloj/>
            <header className="aa">

            <h1>{mensaje}</h1>
            <button onClick={logout}>Cerrar Sesion</button>
            </header>
        </div>
    )
}


export default Home