//Mostramos todos los pedidos realizados
let pedidos = JSON.parse(localStorage.pedidos);

pedidos.map(p => {
    let burritoName = []
    p.burrito.map(b => burritoName.push(b.nombre))
    let fila = `
    <tr>
    <td>${p.nombre}</td>
    <td>${burritoName}</td>
    <td>${p.direccion}</td>
    <td>${p.fecha}</td>
    <td>$ ${p.precio}</td>
    </tr>
    `

    let elemento = document.createElement("TR");
    elemento.innerHTML = fila;
    document.getElementById("tablita").appendChild(elemento);
});