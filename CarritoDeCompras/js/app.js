const cursos = document.getElementById('lista-cursos');

const carrito = document.getElementById('carrito');

const carta = document.getElementById('card');

const agregar = document.getElementById('agregar-carrito');

const vaciar = document.getElementById('vaciar-carrito');

let arr = [];

agregar.addEventListener('click', function(){
    arr = arr + carta.img, carta.h4, carta.className('precio');
})

vaciar.addEventListener('click', function() {
    arr = [];
});
