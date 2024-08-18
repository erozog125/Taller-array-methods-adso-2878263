// Arreglo para almacenar las personas
const people = [];
let currentEditIndex = null;

// Elementos del DOM
const personForm = document.getElementById('personForm');
const personIdInput = document.getElementById('personId');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');
const bloodTypeInput = document.getElementById('bloodType');
const imageInput = document.getElementById('image');
const previewImage = document.getElementById('previewImage');
const saveButton = document.getElementById('saveButton');
const editButton = document.getElementById('editButton');
const listButton = document.getElementById('listButton');
const personContainer = document.getElementById('personContainer');

// Función para mostrar una imagen previa
imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            previewImage.src = reader.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        previewImage.style.display = 'none';
    }
});

// Función para guardar una persona
saveButton.addEventListener('click', () => {
    const id = parseInt(personIdInput.value);
    const person = {
        id: isNaN(id) ? people.length ? people[people.length - 1].id + 1 : 1 : id,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        age: parseInt(ageInput.value),
        gender: genderInput.value,
        bloodType: bloodTypeInput.value,
        image: previewImage.src
    };
    
    if (currentEditIndex !== null) {
        // Actualiza la persona existente
        people[currentEditIndex] = person;
        currentEditIndex = null;
    } else {
        // Agrega una nueva persona
        people.push(person);
    }
    
    clearForm();
    alert('Persona guardada con éxito!');
    listButton.click();  // Actualiza la lista de personas
});

// Función para listar las personas
listButton.addEventListener('click', () => {
    personContainer.innerHTML = '';
    people.forEach(person => {
        const personCard = document.createElement('div');
        personCard.className = 'person-card';
        personCard.innerHTML = `
            <img src="${person.image}" alt="${person.firstName}">
            <h3>${person.firstName} ${person.lastName}</h3>
            <p>Edad: ${person.age}</p>
            <p>Género: ${person.gender}</p>
            <p>Tipo de Sangre: ${person.bloodType}</p>
        `;
        personContainer.appendChild(personCard);
    });
});

// Función para editar una persona
editButton.addEventListener('click', () => {
    const id = parseInt(prompt('Introduce el ID de la persona que deseas editar:'));
    const index = people.findIndex(person => person.id === id);
    
    if (index === -1) {
        alert('Persona no encontrada');
        return;
    }
    
    const person = people[index];
    personIdInput.value = person.id;
    firstNameInput.value = person.firstName;
    lastNameInput.value = person.lastName;
    ageInput.value = person.age;
    genderInput.value = person.gender;
    bloodTypeInput.value = person.bloodType;
    previewImage.src = person.image;
    previewImage.style.display = 'block';
    
    currentEditIndex = index;
});

// Función para limpiar el formulario
function clearForm() {
    personIdInput.value = '';
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    genderInput.value = 'Masculino';
    bloodTypeInput.value = 'A+';
    imageInput.value = '';
    previewImage.src = '#';
    previewImage.style.display = 'none';
}