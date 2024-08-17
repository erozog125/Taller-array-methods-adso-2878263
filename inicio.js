const btnColores = document.getElementById('btnColores');
const btnFrutas = document.getElementById('btnFrutas');
const btnFormulario = document.getElementById('btnFormulario');

btnColores.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que quieres ir a la página de colores?')) {
        window.location.href = 'colores.html';
    }
});

btnFrutas.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que quieres ir a la página de frutas?')) {
        window.location.href = 'frutas.html';
    }
});

btnFormulario.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que quieres ir al formulario?')) {
        window.location.href = 'formularios.html';
    }
});