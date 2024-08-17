let persons = [];
        let currentEditId = null;

        function savePerson() {
            const name = document.getElementById('name').value.trim();
            const surname = document.getElementById('surname').value.trim();
            const age = document.getElementById('age').value.trim();
            const gender = document.getElementById('gender').value;
            const bloodType = document.getElementById('bloodType').value.trim();
            const imageInput = document.getElementById('image');


            if (!name || !surname || !age || !gender || !bloodType) {
                alert('Por favor, complete todos los campos obligatorios.');
                return;
            }

            let image;
            if (imageInput.files.length > 0) {
                image = URL.createObjectURL(imageInput.files[0]);
            }

            if (currentEditId) {

                const personIndex = persons.findIndex(p => p.id === currentEditId);
                if (personIndex !== -1) {
                    persons[personIndex] = {
                        id: currentEditId,
                        name,
                        surname,
                        age,
                        gender,
                        bloodType,
                        image: image || persons[personIndex].image
                    };
                    alert('Persona actualizada con éxito');
                }
                currentEditId = null;
            } else {
                const person = {
                    id: persons.length + 1,
                    name,
                    surname,
                    age,
                    gender,
                    bloodType,
                    image
                };
                persons.push(person);
                alert('Persona guardada con éxito');
            }

            clearForm();
            listPersons();
        }

        function listPersons() {
            const container = document.getElementById('persons-container');
            container.innerHTML = '';
            persons.forEach(person => {
                const personCard = document.createElement('div');
                personCard.className = 'card';
                personCard.innerHTML = `
                    <img src="${person.image}" alt="${person.name}">
                    <div>
                        <strong>${person.name} ${person.surname}</strong><br>
                        Edad: ${person.age}<br>
                        Género: ${person.gender}<br>
                        Tipo de Sangre: ${person.bloodType}<br>
                        ID: ${person.id}
                    </div>
                `;
                container.appendChild(personCard);
            });
        }

        function editPerson() {
            const id = prompt('Ingrese el ID de la persona que desea editar:');
            const person = persons.find(p => p.id == id);

            if (person) {
                document.getElementById('name').value = person.name;
                document.getElementById('surname').value = person.surname;
                document.getElementById('age').value = person.age;
                document.getElementById('gender').value = person.gender;
                document.getElementById('bloodType').value = person.bloodType;
                currentEditId = person.id;
                alert('Los campos han sido llenados. Realice los cambios y presione "Guardar" para actualizar.');
            } else {
                alert('Persona no existe');
            }
        }

        function clearForm() {
            document.getElementById('name').value = '';
            document.getElementById('surname').value = '';
            document.getElementById('age').value = '';
            document.getElementById('gender').value = '';
            document.getElementById('bloodType').value = '';
            document.getElementById('image').value = '';
        }