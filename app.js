const btnBackground = document.getElementById('btn-background');
const btnFiltro = document.getElementById('btn-filtro');
const btnFormulario = document.getElementById('btn-formulario');

btnBackground.addEventListener('click', () => {
    window.location.href = 'page/page1/index.html'; 
});

btnFiltro.addEventListener('click', () => {
    window.location.href = 'page/page2/index.html'; 
});

btnFormulario.addEventListener('click', () => {
    window.location.href = 'page/page3/index.html';
});
