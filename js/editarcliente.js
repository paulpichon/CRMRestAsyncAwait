import { obtenerCliente } from "./API.js";

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
    });

    //FUNCION PARA MOSTRAR CLIENTE
    function mostrarCliente( cliente ) {
        //destructuring
        const { nombre, empresa, email, telefono, id } = cliente;
        //llenar los inputs con los valores
        nombreInput.value = nombre;
        emailInput.value = empresa;
        telefonoInput.value = email;
        empresaInput.value = telefono;
        idInput.value = id;

    }


})();