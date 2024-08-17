const botones = document.querySelectorAll('button');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const textoBoton = boton.textContent;

    switch (textoBoton) {
      case 'Colores':
        window.location.href = 'colores.html';
        break;
      case 'Frutas':
        window.location.href = 'frutas.html';
        break;
      case 'Formularios':
        window.location.href = 'formularios.html';
        break;
      default:
        console.log('Opción no válida');
    }
  });
});