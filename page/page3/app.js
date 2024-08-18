const CharacterManager = class {
    constructor() {
        this.characters = [];
        this.currentId = 0;

        const saveButton = document.getElementById('saveButton');
        const editButton = document.getElementById('editButton');
        const listButton = document.getElementById('listButton');

        saveButton.addEventListener('click', () => this.saveCharacter());
        editButton.addEventListener('click', () => this.editCharacter());
        listButton.addEventListener('click', () => this.listCharacters());
    }

    getCharacterData() {
        const id = ++this.currentId;
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const bloodType = document.getElementById('bloodType').value;
        const image = document.getElementById('image').files[0];

        return { id, name, surname, age, gender, bloodType, image };
    }

    saveCharacter() {
        const characterData = this.getCharacterData();
        const reader = new FileReader();

        reader.onloadend = () => {
            characterData.image = reader.result;
            this.characters.push(characterData);
            alert('Personaje guardado exitosamente.');
            this.clearForm();
        };

        if (characterData.image) {
            reader.readAsDataURL(characterData.image);
        }
    }

    listCharacters() {
        const charactersList = document.getElementById('charactersList');
        charactersList.innerHTML = '';

        this.characters.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <div>
                    <h3>${character.name} ${character.surname}</h3>
                    <p>Edad: ${character.age}</p>
                    <p>Género: ${character.gender}</p>
                    <p>Tipo de Sangre: ${character.bloodType}</p>
                </div>
            `;
            charactersList.appendChild(card);
        });
    }

    editCharacter() {
        const id = prompt('Ingresa el ID del personaje que quieres editar:');
        const character = this.characters.find(char => char.id == id);

        if (character) {
            const nameField = document.getElementById('name');
            const surnameField = document.getElementById('surname');
            const ageField = document.getElementById('age');
            const genderField = document.getElementById('gender');
            const bloodTypeField = document.getElementById('bloodType');

            nameField.value = character.name;
            surnameField.value = character.surname;
            ageField.value = character.age;
            genderField.value = character.gender;
            bloodTypeField.value = character.bloodType;

            const saveButton = document.getElementById('saveButton');
            saveButton.removeEventListener('click', () => this.saveCharacter());
            saveButton.addEventListener('click', () => this.updateCharacter(character.id), { once: true });
        } else {
            alert('Personaje no encontrado.');
        }
    }

    updateCharacter(id) {
        const character = this.characters.find(char => char.id == id);
        if (character) {
            const nameField = document.getElementById('name');
            const surnameField = document.getElementById('surname');
            const ageField = document.getElementById('age');
            const genderField = document.getElementById('gender');
            const bloodTypeField = document.getElementById('bloodType');
            const imageField = document.getElementById('image').files[0];

            character.name = nameField.value;
            character.surname = surnameField.value;
            character.age = ageField.value;
            character.gender = genderField.value;
            character.bloodType = bloodTypeField.value;

            if (imageField) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    character.image = reader.result;
                    alert('Personaje actualizado exitosamente.');
                    this.clearForm();
                    const saveButton = document.getElementById('saveButton');
                    saveButton.addEventListener('click', () => this.saveCharacter());
                };
                reader.readAsDataURL(imageField);
            } else {
                alert('Personaje actualizado exitosamente.');
                this.clearForm();
                const saveButton = document.getElementById('saveButton');
                saveButton.addEventListener('click', () => this.saveCharacter());
            }
        } else {
            alert('Personaje no encontrado.');
        }
    }

    clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('age').value = '';
        document.getElementById('gender').value = 'Male';
        document.getElementById('bloodType').value = '';
        document.getElementById('image').value = '';
    }
};

const characterManager = new CharacterManager();
