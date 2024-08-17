let personas = [];

document.getElementById('guardarBtn').addEventListener('click', () => {
    const id = document.getElementById('idPersona').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const tipoSangre = document.getElementById('tipoSangre').value;
    const imagen = document.getElementById('imagen').files[0];

    if (!nombre || !apellido || !edad || !genero || !tipoSangre || (!imagen && !id)) {
        alert('Por favor, completa todos los campos');
        return;
    }

    if (id) {
        // Editar persona existente
        const personaIndex = personas.findIndex(p => p.id == id);
        if (personaIndex !== -1) {
            personas[personaIndex] = {
                id,
                nombre,
                apellido,
                edad,
                genero,
                tipoSangre,
                imagen: imagen ? URL.createObjectURL(imagen) : personas[personaIndex].imagen
            };
            alert('Persona actualizada');
        }
    } else {
        // Crear nueva persona
        const persona = {
            id: Date.now().toString(),
            nombre,
            apellido,
            edad,
            genero,
            tipoSangre,
            imagen: URL.createObjectURL(imagen)
        };
        personas.push(persona);
        alert(`Persona guardada con ID: ${persona.id}`);
    }

    document.getElementById('personForm').reset();
    document.getElementById('idPersona').value = ''; // Resetear ID después de guardar o actualizar
});

document.getElementById('listarBtn').addEventListener('click', () => {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

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
            <p>ID: ${persona.id}</p>
        `;
        container.appendChild(card);
    });
});

document.getElementById('editarBtn').addEventListener('click', () => {
    const id = prompt('Introduce el ID de la persona que quieres editar:');
    const persona = personas.find(p => p.id == id);

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
});
