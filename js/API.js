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