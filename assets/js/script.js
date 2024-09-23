let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];

// esta funcion se invoca al momento en que el usuario hace clic en el 
//boton

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionesGastos.push(descripcionGasto);

    console.log(listaNombresGastos);    
    console.log(listaValoresGastos);


    //alert('Click de usuario');
    actualizarListaGastos();

}

function actualizarListaGastos(){
   const listaElementos = document.getElementById('listaDeGastos');
   const totalElementos = document.getElementById('totalGastos');

    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number (listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionesGastos[posicion];
        htmlLista += `<li>${elemento} - USD $ ${valorGasto}  ${descripcionGasto}
        <button onclick="eliminarGasto(${posicion});"> Eliminar</button> 
        <button onclick="modificarGasto(${posicion});">Modificar</button>
        </li>`;
       //Calculando el Total de Gastos
       totalGastos += Number(valorGasto);
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);

    console.log(htmlLista);
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}


function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1,);
    listaValoresGastos.splice(posicion, 1,);
    actualizarListaGastos();

}

function modificarGasto(posicion) {
    let nombreGasto = listaNombresGastos[posicion];
    let valorGasto = listaValoresGastos[posicion];
    let descripcionGasto = listaDescripcionesGastos[posicion];

    document.getElementById('nombreGasto').value = nombreGasto;
    document.getElementById('valorGasto').value = valorGasto;
    document.getElementById('descripcionGasto').value = descripcionGasto;

    document.getElementById('botonFormulario').innerHTML = 'Guardar Cambios';
    document.getElementById('botonFormulario').onclick = function() {
        guardarCambios(posicion);
    };
}

function guardarCambios(posicion) {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    listaNombresGastos[posicion] = nombreGasto;
    listaValoresGastos[posicion] = valorGasto;
    listaDescripcionesGastos[posicion] = descripcionGasto;
    
   
   

    actualizarListaGastos();
    limpiar();
    
    document.getElementById('botonFormulario').innerHTML = 'Agregar Gasto';
    document.getElementById('botonFormulario').onclick = function() {
        clickBoton();
    };
}