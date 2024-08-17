const personArray = []

const inputFirstName = document.getElementById('first-name')
const inputLastName = document.getElementById('last-name')
const inputAge = document.getElementById('age')
const inputGender = document.getElementById('gender')
const inputBloodType = document.getElementById('blood-type')
const inputImage = document.getElementById('image-upload')
const buttonSave = document.getElementById('save-btn')
const buttonEdit = document.getElementById('edit-btn')
const buttonList = document.getElementById('list-btn')

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
                id: personArray.length + 1,
                firstName,
                lastName,
                age: parseInt(age, 10),
                gender,
                bloodType,
                image: e.target.result
            };
            personArray.push(newPerson);
            displayCards(); 
        };
        reader.readAsDataURL(imageFile);
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// // Editar Información
// buttonEdit.addEventListener('click', () => {
//     const id = prompt('Ingresa el ID del personaje a editar');
//     const person = personArray.find(p => p.id === parseInt(id, 10));
// }); no se como hacer eso

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


// - Crea un personaje
    
//     Dada la siguiente información: Nombre, apellido, edad, género, tipo de sangre, imagen; crea un formulario, de tal modo que, se pueda agregar una imagen desde el computador,  que haya un boton de guardar, editar y otro de listar, cuando de click en botón guardar se guarde el objeto en un array de personas, cuando de click en listar pinte una card con esta información en el main, y cuando de click en editar me pida el id del personaje que quiera editar, lo busque en el array, si existe que habilite un formulario para editar los datos, si no existe que arroje una alerta donde diga que ese personaje no existe.