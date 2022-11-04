//importar del archivo funciones.js
//la funcion mostrarAlerta y validar
import { mostrarAlerta, validar } from "./funciones.js";
//funcion para crear nuevo cliente
import { nuevoCliente } from "./API.js";

//IIFE
(function() {
    //variable para formulario
    const formulario = document.querySelector('#formulario');
    //añadir un listener al formulario
    formulario.addEventListener('submit', validarCliente);

    //funcion para validar al cliente
    function validarCliente( e ) {
        //prevenir la accion por default
        e.preventDefault();

        //leer valores de los inputs
        //nombre
        const nombre = document.querySelector('#nombre').value;
        //correo
        const email = document.querySelector('#email').value;
        //telefono
        const telefono = document.querySelector('#telefono').value;
        //empresa
        const empresa = document.querySelector('#empresa').value;

        //objeto con datos de los inputs
        //al ser la llave igual que el valor se puede dejar de la siguiente forma
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

       

        //validar que no esten vacios los campos
        //llamamos una funcion que se encarga de valida
        //pasamos como argumento el objeto CLIENTE
        if ( validar( cliente ) ) {
            //mostrar mensaje
            mostrarAlerta("todos los campos son obligatorios");
            //retornamos para que no se siga ejecutando codigo
            return;
        }

        //llamar funcion para crear un nuevo cliente
        //se pasa como arguemnto el objeto cliente
        nuevoCliente( cliente );
        

    }

})();