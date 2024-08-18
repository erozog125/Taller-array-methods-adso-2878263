const personArray = [];

const inputFirstName = document.getElementById('first-name');
const inputLastName = document.getElementById('last-name');
const inputAge = document.getElementById('age');
const inputGender = document.getElementById('gender');
const inputBloodType = document.getElementById('blood-type');
const inputImage = document.getElementById('image-upload');
const buttonSave = document.getElementById('save-btn');
const buttonEdit = document.getElementById('edit-btn');
const buttonList = document.getElementById('list-btn');

let currentEditId = null;

buttonSave.addEventListener('click', () => {
    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    const age = inputAge.value;
    const gender = inputGender.value;
    const bloodType = inputBloodType.value;
    const imageFile = inputImage.files[0];

    if (firstName && lastName && age && gender && bloodType && imageFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const newPerson = {
                id: currentEditId || personArray.length + 1,
                firstName,
                lastName,
                age: parseInt(age, 10),
                gender,
                bloodType,
                image: e.target.result
            };

            if (currentEditId) {
                const index = personArray.findIndex(p => p.id === currentEditId);
                personArray[index] = newPerson;
                currentEditId = null;
            } else {
                personArray.push(newPerson);
            }

            clearForm();
            displayCards();
        };
        reader.readAsDataURL(imageFile);
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Editar Información
buttonEdit.addEventListener('click', () => {
    const id = parseInt(prompt('Ingresa el ID del personaje a editar'), 10);
    const person = personArray.find(p => p.id === id);

    if (person) {
        currentEditId = person.id;
        inputFirstName.value = person.firstName;
        inputLastName.value = person.lastName;
        inputAge.value = person.age;
        inputGender.value = person.gender;
        inputBloodType.value = person.bloodType;
        // No se puede precargar una imagen en un input file por motivos de seguridad, se debe subir una nueva.
        alert('Por favor, selecciona una nueva imagen para el personaje.');
    } else {
        alert('El personaje con ese ID no existe.');
    }
});

// Listar Información
buttonList.addEventListener('click', () => {
    displayCards();
});

function displayCards() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    personArray.forEach(person => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${person.image}" alt="Imagen" style="width:100px;height:100px;">
            <div class="card-content">
                <h2>${person.firstName} ${person.lastName}</h2>
                <p>Edad: ${person.age}</p>
                <p>Género: ${person.gender}</p>
                <p>Tipo de sangre: ${person.bloodType}</p>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

function clearForm() {
    inputFirstName.value = '';
    inputLastName.value = '';
    inputAge.value = '';
    inputGender.value = '';
    inputBloodType.value = '';
    inputImage.value = '';
}
