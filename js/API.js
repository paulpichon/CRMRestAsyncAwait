//consultar nuestra API
const url = 'http://localhost:4000/clientes';

//ASYNC AWAIT
//para crear un nuevo cliente
export const nuevoCliente = async cliente => {
    //consultar la API con ASYNC AWAIT
    try {
        //por default FETCH() usa GET
        //pero opdemos crear un objeto para poder configurar el FETCH()
        await fetch( url, {
            //el metodo POST para poder mandar datos al servidor
            method: 'POST',
            //en body solo podemos pasar STRINGS u OBJETOS
            //en esta caso usamos JSON.stringify para convertir cliente en STRING y lo mandamos a la URL con metodo POST
            body: JSON.stringify( cliente ),
            //HEADERS: es informacion de quie tipo de datos estamos enviando
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //redirigir al usuario una vez que se haya cumplido el fetch
        window.location.href = 'index.html';

    } catch (error) {
        console.log( error );
    }

}
//funcion para obtener informacion de todos los cleintes
export const obtenerClientes = async () => {
    //try cath
    try {
        //fetch
        //await
        const resultado = await fetch( url );
        //await
        const clientes = await resultado.json();
        //retornamos los clientes
        return clientes;


    } catch (error) {
        console.log( error );
    }
}
//elimina un cliente
//async await
export const eliminarCliente = async id => {
    try {
        //await
        //template strings concatenamos la url con el id del cliente
        await fetch(`${ url }/${id}`, {
            //especificamos el mthod: DELETE
            method: 'DELETE',
        });

    } catch (error) {
        console.log( error );
    }
}
//funcion para obtener cliente por su ID
export const obtenerCliente = async id => {
    //try catch
    try {
        //resultado 
        const resultado = await fetch( `${ url }/${id}` );
        //
        const cliente = await resultado.json();
        //retornamos el cliente
        return cliente;

    } catch (error) {
        console.log( error );
    }
}

//funcion para actualizar un registro
//viene con un parametro cliente
//async await
export const editarCliente = async cliente => {
    try {
        await fetch( `${url}/${cliente.id}`, {
            //PUT es el metodo para editar
            method: 'PUT',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        //redireccionar
        window.location.href = 'index.html';
        
    } catch (error) {
        console.log( error );
    }
}