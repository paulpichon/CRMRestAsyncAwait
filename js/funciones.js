//exportar funcion para mostrar alertas
export function mostrarAlerta( mensaje ) {
    //verificar si hay una alerta previa
    //variable que representa alertas previas
    const alerta = document.querySelector('.bg-red-100');
    //con un if() verificamos si hay una laerta previa
    if ( !alerta ) {
        //construir el html
        const alerta = document.createElement('p');
        //añadir estilos
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        //innerhtml
        alerta.innerHTML = `
            <strong class="font-bold">¡ERROR!</strong>
            <span class="block sm:inline">${ mensaje }</span>
        `;
        //variable donde se renderizara
        const formulario = document.querySelector('#formulario');
        //renderizar
        formulario.appendChild( alerta );

        //quitar alerta despues de 4 segundos
        setTimeout(() => {
            //remover alerta
            alerta.remove();
        }, 4000);

    }

}

//funcion para validar los input
export function validar( obj ) {
    //leer los valores del objeto
    //.every() revisa una condicion en cada elemento
    //esta linea retorna true/false
    return !Object.values( obj ).every( input => input !== '' );


}