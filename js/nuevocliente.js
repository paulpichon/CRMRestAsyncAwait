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
            console.log("todos los campos son obligatorios");
            //retornamos para que no se siga ejecutando codigo
            return;
        }

        console.log('se se paso la validacion');
        

    }

    //funcion para validar los input
    function validar( obj ) {
        //leer los valores del objeto
        //.every() revisa una condicion en cada elemento
        //esta linea retorna true/false
        return !Object.values( obj ).every( input => input !== '' );


    }


})();