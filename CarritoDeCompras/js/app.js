const carrito = [];
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

// Agregar producto al carrito
function agregarProducto(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

// Mostrar carrito en el HTML
function mostrarCarrito() {
    // Limpiar HTML previo
    listaCarrito.innerHTML = '';

    // Generar HTML para cada producto en el carrito
    carrito.forEach((producto, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.imagen}" width="100"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
                <a href="#" class="borrar-producto" data-index="${index}">X</a>
            </td>
        `;
        listaCarrito.appendChild(row);
    });

    // Añadir funcionalidad de eliminar productos
    document.querySelectorAll('.borrar-producto').forEach(boton => {
        boton.addEventListener('click', eliminarProducto);
    });
}

// Eliminar producto del carrito
function eliminarProducto(event) {
    const index = event.target.getAttribute('data-index');
    carrito.splice(index, 1);
    mostrarCarrito();
}

// Vaciar carrito
vaciarCarritoBtn.addEventListener('click', () => {
    carrito.length = 0; // Limpia el array
    mostrarCarrito(); // Actualiza el HTML
});

// Ejemplo de producto
document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const producto = {
            imagen: card.querySelector('img').src,
            nombre: e.target.parentElement.querySelector('h4').textContent,
            precio: e.target.parentElement.querySelector('.precio span').textContent,
            cantidad: 1
        };
        agregarProducto(producto);
    });
});