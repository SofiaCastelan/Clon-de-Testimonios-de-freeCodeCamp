/*Permite usar todo lo necesario de react en tu componente*/
import React from 'react';
//Importamos el archivo css
import '../hojas-de-estilo/Testimonio.css';

/*El componente funcional es una funcion de js */
//Ocuparemos props
function Testimonio(props) {
    /*Un componente funcional de React retorna 
    un elemento jsx*/
    return (
      //Tendremos un contenedor con una clase en especifica
      //en jsx es className
      //asignamos el contenedor principal
        //luego colocaremos una imagen
        //le asignamos una clase
        //Los dos puntos da a entender que no esta en la carpeta componentes
        //sino que suba un nivel y asi entre en la carpeta
        //imagenes
        //Todo lo que esta dentro de llavez es porque
        //es parte de js
        //hacemos eso en la parte de imagen para poner 
        //imagen personalizada
      <div className='contenedor-testimonio'>
        <img className='imagen-testimonio'
        src={require(`../imagenes/kuromi-${props.imagen}.jpg`)}
        alt={`Imagen de kuromi ${props.nomAlt}`}/>
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-pais-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
            <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
            <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
      </div>
      
    );
}

//Para exportar testimonio y podramos ocuparlo (por defecto)
export default Testimonio;
//Ejemplo de exportacion nombrada
//En este archivo estaria:
//export function Testimonio(){}
//En el archivo app:
//import {Testimonio} from './componentes/Testimonio';