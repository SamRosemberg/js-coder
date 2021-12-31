

//Funcion para elegir ingredientes
//Tortillas
function DisabledButton(id1, id2, id3, botonId) {
    if (botonId == id1) {
        $(`#${id2}`).addClass('disabled');
        $(`#${id3}`).addClass('disabled');
    } else if (botonId == id2) {
        $(`#${id1}`).addClass('disabled');
        $(`#${id3}`).addClass('disabled');
    } else if (botonId == id3) {
        $(`#${id1}`).addClass('disabled');
        $(`#${id2}`).addClass('disabled');
    }
}


//Carrito
var carrito = [];

function SumarAlCarrito(ingrediente) {
    carrito.push(ingrediente);
    localStorage.setItem("burrito", JSON.stringify(carrito));
}

let saldoTotal = 0;

function SumarTotal() {
    carrito.map(t => saldoTotal = saldoTotal + t.precio)
}


//Evento summit
let miFormulario = document.getElementById("formPedido");
miFormulario.addEventListener("submit", validarFormulario);


let miCuenta = document.getElementById("dataStorage");
miCuenta.innerHTML = `
<ul class="list-group">
<li class="list-group-item">Nombre: ${window.localStorage.nombre || 'Sin Datos. Actualice su perfil.'}</li>
<li class="list-group-item">Dirección: ${window.localStorage.direccion || 'Sin Datos. Actualice su perfil.'}</li>
<li class="list-group-item">Comentarios: ${window.localStorage.comentarios || 'Sin Datos. Actualice su perfil.'}</li>    
</ul>
`;


let alertCuenta = document.getElementById("alertCuenta");



//Validar el formulario
function validarFormulario(e) {
    e.preventDefault();
    var nombre = document.getElementById("formNombre").value;
    var direccion = document.getElementById("formDir").value;
    var comentarios = document.getElementById("formComent").value;

    if (nombre == "") {
        alertCuenta.innerHTML = `
            <div class="alert alert-danger mt-5" role="alert">
            Ingrese un Nombre en el campo nombre!
            </div>
            `;
        return false;
    }

    if (direccion == "") {
        alertCuenta.innerHTML = `
        <div class="alert alert-danger mt-5" role="alert">
        Ingrese su dirección en el campo dirección!
        </div>
        `;
        return false;
    }

    //Guardar datos
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("comentarios", comentarios);

    //window.location.reload();
    alertCuenta.innerHTML = `
        <div class="alert alert-success mt-5" role="alert">
        Se actualizaron sus datos con Exito!
        </div>
        `;

    miCuenta.innerHTML = `
        <ul class="list-group">
        <li class="list-group-item">Nombre: ${window.localStorage.nombre || 'Sin Datos. Actualice su perfil.'}</li>
        <li class="list-group-item">Dirección: ${window.localStorage.direccion || 'Sin Datos. Actualice su perfil.'}</li>
        <li class="list-group-item">Comentarios: ${window.localStorage.comentarios || 'Sin Datos. Actualice su perfil.'}</li>    
        </ul>
        `;
}
