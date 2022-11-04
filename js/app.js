//importar 
import { obtenerClientes, eliminarCliente } from "./API.js";
//IFEE
(function() {
    //variable donde se mostrara el listado de clientes
    const listado = document.querySelector('#listado-clientes');
    
    //listeners
    document.addEventListener('DOMContentLoaded', mostrarClientes);
    //añadir un listener a LISTADO
    listado.addEventListener('click', confirmarEliminar);
    
    //funcion para mostrar los clientes
    //async await
    // obtenerClientes() tarda un momento en traer los clientes por lo cual podemos poner async await
    async function mostrarClientes() {
        //usamos await para retrasar un poco la ejecucion de mostrarClientes() y se muestre el console.log
        const clientes = await obtenerClientes();
        //recorremos CLIENTES con un FOREACH()
        clientes.forEach( cliente => {
            //destrcuturing
            const { nombre, email, telefono, empresa, id } = cliente;

            //construir el HTML
            const row = document.createElement('tr');
            //innerhtml
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;
            //renderizar
            listado.appendChild( row );

        });
    }
    //funcion para eliminar registro
    function confirmarEliminar(e) {
        e.preventDefault();
        //verificar si hace click en la CLASE "eliminar"
        if ( e.target.classList.contains('eliminar') ) {
            //id a eliminar
            // e.target.dataset.cliente = e.target.getAttribute('data-cliente')
            const clienteId = parseInt( e.target.dataset.cliente );
            //confirmar si el usuario quiere eliminar el registro
            const confirmar = confirm('¿Deseas eliminar este registro?');
            //si confirmar = true
            if ( confirmar ) {
                //llamamos a funcion para eliminar el registro de cliente
                //y pasamo como arguemnto el ID del cliente
                eliminarCliente(clienteId);
            }
        }
    }

})();