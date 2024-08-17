let personas = [];

// Genera un ID único y corto
function generarId() {
    return Math.random().toString(36).substr(2, 6);
}

// Función para guardar una persona
function guardarPersona() {
    const id = document.getElementById('idPersona').value || generarId();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const tipoSangre = document.getElementById('tipoSangre').value;
    const imagen = document.getElementById('imagen').files[0];

    if (!nombre || !apellido || !edad || !genero || !tipoSangre || !imagen) {
        alert('Por favor, completa todos los campos');
        return;
    }

    const persona = {
        id,
        nombre,
        apellido,
        edad,
        genero,
        tipoSangre,
        imagen: URL.createObjectURL(imagen)
    };

    const personaIndex = personas.findIndex(p => p.id === id);
    if (personaIndex !== -1) {
        personas[personaIndex] = persona;
        alert('Persona actualizada');
    } else {
        personas.push(persona);
        alert('Persona guardada');
    }

    // Resetear el formulario después de guardar
    document.getElementById('personForm').reset();
    document.getElementById('idPersona').value = '';

    // Actualizar la lista de personas guardadas en localStorage
    localStorage.setItem('personas', JSON.stringify(personas));
}

// Función para listar las personas
function listarPersonas() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    // Cargar las personas desde localStorage
    personas = JSON.parse(localStorage.getItem('personas')) || [];

    if (personas.length === 0) {
        container.innerHTML = '<p>No hay personas registradas</p>';
        return;
    }

    personas.forEach(persona => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${persona.imagen}" alt="${persona.nombre}">
            <h3>${persona.nombre} ${persona.apellido}</h3>
            <p>Edad: ${persona.edad}</p>
            <p>Género: ${persona.genero}</p>
            <p>Tipo de Sangre: ${persona.tipoSangre}</p>
            <p><strong>ID: ${persona.id}</strong></p>
        `;
        container.appendChild(card);
    });
}

// Función para editar una persona
function editarPersona() {
    const id = prompt('Introduce el ID de la persona que quieres editar:');
    const persona = personas.find(p => p.id === id);

    if (persona) {
        document.getElementById('idPersona').value = persona.id;
        document.getElementById('nombre').value = persona.nombre;
        document.getElementById('apellido').value = persona.apellido;
        document.getElementById('edad').value = persona.edad;
        document.getElementById('genero').value = persona.genero;
        document.getElementById('tipoSangre').value = persona.tipoSangre;
        alert('Edita la información y guarda nuevamente');
    } else {
        alert('Persona no encontrada');
    }
}

// Asignar eventos a los botones
document.getElementById('guardarBtn').addEventListener('click', guardarPersona);
document.getElementById('listarBtn').addEventListener('click', listarPersonas);
document.getElementById('editarBtn').addEventListener('click', editarPersona);

// Cargar las personas almacenadas en localStorage al cargar la página
window.onload = function () {
    personas = JSON.parse(localStorage.getItem('personas')) || [];
};
