let personajes = [];
let idEdicion = null;

document.getElementById('guardarBtn').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const tipoSangre = document.getElementById('tipoSangre').value;
    const imagen = document.getElementById('imagen').files[0];

    if (idEdicion !== null) {
        personajes[idEdicion] = { nombre, apellidos, edad, genero, tipoSangre, imagen };
        idEdicion = null;
    } else {
        personajes.push({ nombre, apellidos, edad, genero, tipoSangre, imagen });
    }

    alert('Personaje guardado exitosamente');
    document.getElementById('personajeForm').reset();
});

document.getElementById('listarBtn').addEventListener('click', function() {
    const container = document.getElementById('personajesContainer');
    container.innerHTML = '';

    personajes.forEach((personaje, index) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${e.target.result}" alt="Imagen del personaje">
                <div class="card-content">
                    <span><strong>ID:</strong> ${index}</span>
                    <span><strong>Nombre:</strong> ${personaje.nombre}</span>
                    <span><strong>Apellidos:</strong> ${personaje.apellidos}</span>
                    <span><strong>Edad:</strong> ${personaje.edad}</span>
                    <span><strong>Género:</strong> ${personaje.genero}</span>
                    <span><strong>Tipo de Sangre:</strong> ${personaje.tipoSangre}</span>
                </div>
            `;
            container.appendChild(card);
        }
        reader.readAsDataURL(personaje.imagen);
    });
});

document.getElementById('editarBtn').addEventListener('click', function() {
    document.getElementById('editarForm').style.display = 'block';
});

document.getElementById('buscarBtn').addEventListener('click', function() {
    const id = parseInt(document.getElementById('idPersonaje').value);

    if (id >= 0 && id < personajes.length) {
        const personaje = personajes[id];
        document.getElementById('nombre').value = personaje.nombre;
        document.getElementById('apellidos').value = personaje.apellidos;
        document.getElementById('edad').value = personaje.edad;
        document.getElementById('genero').value = personaje.genero;
        document.getElementById('tipoSangre').value = personaje.tipoSangre;
        idEdicion = id;
        document.getElementById('editarForm').style.display = 'none';
    } else {
        alert('Personaje no encontrado');
    }
});
