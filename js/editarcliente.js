//obtener cliente y editarCliente del archivo API.js
import { obtenerCliente, editarCliente } from "./API.js";
//validar clientes y mostrarAlerta del archivo funciones.js
import { mostrarAlerta, validar } from "./funciones.js";

//IFEE
(function() {   

    //campos del formulario
    //input nombre
    const nombreInput = document.querySelector('#nombre');
    //input email
    const emailInput = document.querySelector('#email');
    //input telefono
    const telefonoInput = document.querySelector('#telefono');
    //input empresa
    const empresaInput = document.querySelector('#empresa');
    //input id
    const idInput = document.querySelector('#id');

    //se usa async await, ya que obtenerCliente no se termina de ejecutar cuando DOMContentLoaded ya lo esta requiriendo
    document.addEventListener('DOMContentLoaded', async () => {
        //obtener un parametro dentro de la URL
        //con esta instruccion new URLSearchParams( window.location.search ) podemos identificar cierto parametro dentro
        //del aURL
        const parametrosURL = new URLSearchParams( window.location.search );        
        //id del cliente
        //finalmente con parametrosURL.get('id') obtenemos el parametro para obtener el ID del cliente
        const idCliente = parseInt( parametrosURL.get('id') );

        //llamamos la funcion obtenerCliente()
        const cliente = await obtenerCliente( idCliente );
        //llamamos funcion para mostrar cliente
        mostrarCliente( cliente );

        //submit al formulario
        const formulario = document.querySelector('#formulario');
        //formulario
        //se llamala funcion validarCliente 
        formulario.addEventListener('submit', validarCliente);


    });

    //FUNCION PARA MOSTRAR CLIENTE
    function mostrarCliente( cliente ) {
        //destructuring
        const { nombre, empresa, email, telefono, id } = cliente;
        //llenar los inputs con los valores
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;

    }
    //fcunion para validar cliente
    function validarCliente( e ) {
        e.preventDefault();

        //objeto con datos de los inputs
        //al ser la llave igual que el valor se puede dejar de la siguiente forma
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt( idInput.value)
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

        //si se pasa la condicion entonces reescribimos el objeto
        //llamamos la funcion editarCliente
        //y pasamos el parametro cliente
        editarCliente( cliente );


    }

})();