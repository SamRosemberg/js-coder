//Mostramos pedido en curso
let burrito = JSON.parse(localStorage.burrito);

burrito.map(b => {
    let fila = `
    <tr>
    <td>${b.nombre}</td>
    <td>$ ${b.precio}</td>
    </tr>
    `

    let elemento = document.createElement("TR");
    elemento.innerHTML = fila;
    document.getElementById("tablita").appendChild(elemento);
});

let total = 0;
burrito.map(b => total += b.precio)


let precioTotal = document.getElementById("precioTotal");
precioTotal.innerHTML = `<td>$ ${total}</td>`;

//Mostramos datos del envio
let direccion = localStorage.direccion;
let miDireccion = document.getElementById('miDireccion');
if (direccion === undefined) {
    miDireccion.innerHTML = `
    <td>
       Por favor cargue su direccion
    </td>
    <td>
        <a class="btn btn-danger" href='./cuenta.html'>Cargar</a>
    </td>
    `
} else {
    miDireccion.innerHTML = `
    <td>
       ${direccion}
    </td>
    <td>
    free
 </td>
    `
}

//Verifico si el pedido tiene todos los datos: 
// 1) que tenga 5 ingredientes seleccionados
// 2) que tenga una direcciona Cargada

let botonConfirmar = document.getElementById('botonConfirmar');
if (burrito.length < 5 || direccion === undefined) {
    botonConfirmar.innerHTML = `
    <div class="d-grid gap-2">
    <button class="btn btn-success" type="button" disabled>Confirmar Pedido</button>
  </div>`
} else {
    botonConfirmar.innerHTML = `
    <div class="d-grid gap-2">
    <button class="btn btn-success" type="button" onClick="ConfirmarPedido()">Confirmar Pedido</button>
  </div>`
}


// Funcion ConfirmarPedido
function ConfirmarPedido() {
    // me traigo la lista de pedidos
    let pedidos = [];
    if(localStorage.pedidos != undefined) {
        pedidos = JSON.parse(localStorage.pedidos);
    }
    // creo el nuevo pedido
    let nuevoPedido = {
        burrito,
        direccion,
        nombre: localStorage.nombre,
        fecha: new Date(), 
        precio: total
    }
    //guardo en storage el pedido
    pedidos.push(nuevoPedido)
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    let alertaCarrito = document.getElementById('alertCarrito');
    alertaCarrito.innerHTML = `
    <div class="alert alert-success mt-5" role="alert">
      Ya recibimos su pedido!
    </div>
    `;

    //limpio el storage del pedido en curso
    localStorage.setItem('burrito', [])
    botonConfirmar.innerHTML = `
    <div class="d-grid gap-2">
    <button class="btn btn-success" type="button" disabled>Confirmar Pedido</button>
  </div>`

}