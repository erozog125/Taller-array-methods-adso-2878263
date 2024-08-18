//ejercicio 3
const arrayCharacters = [
    // {
    //   firstName: "juan sebastian",
    //   lastName: "restrepo",
    //   id: 1,
    //   age: 30,
    //   gender: "Masculino",
    //   blood: "B+",
    //   image: "",
    // },
  ];
  
  let idEnEdicion = null;
const container = document.getElementById("Characters");

function list() {
  arrayCharacters.forEach((Characters) => createCardCharacter(Characters));
}

function createCardCharacter(Characters) { //crear el div de cada personaje
  const divCard = document.createElement("div");
  divCard.classList.add("Character");
  divCard.id = Characters.id;

  const imgCard = document.createElement("img");
  imgCard.alt = Characters.firstName;
  imgCard.src = Characters.image;

  const nameCard = document.createElement("h3");
  nameCard.textContent = Characters.firstName;

  const ageCard = document.createElement("p");
  ageCard.textContent = "Edad: " + Characters.age;

  const genderCard = document.createElement("p");
  genderCard.textContent = "Genero: " + Characters.gender;

  const bloodCard = document.createElement("p");
  bloodCard.textContent = "Tipo de sangre: " + Characters.blood;

  divCard.appendChild(imgCard);
  divCard.appendChild(nameCard);
  divCard.appendChild(ageCard);
  divCard.appendChild(genderCard);
  divCard.appendChild(bloodCard);
  container.appendChild(divCard);
}


function generateId() {
  return arrayCharacters.length ? arrayCharacters[arrayCharacters.length - 1].id + 1 : 1;
}

function save() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const genero = document.getElementById("genero").value;
  const sangre = document.getElementById("tipoSangre").value;
  const imagen = document.getElementById("imagen").files[0] ? URL.createObjectURL(document.getElementById("imagen").files[0]) : "";

        const newCharacter = {
            firstName: nombre,
            lastName: apellido,
            id: generateId(),
            age: parseInt(edad),
            gender: genero,
            blood: sangre,
            image: imagen,
        };

  arrayCharacters.push(newCharacter);
  alert("Nuevo personaje agregado.");
  console.table(arrayCharacters);
}

function edit(){
const id = parseInt(prompt("Ingrese el ID del personaje que será actualizado: "));
    const character = arrayCharacters.find(character => character.id === id);
    if (character) {
        
        alert("Los datos del personaje han sido cargados en el formulario. Ahora puedes editarlos.");
        idEnEdicion = id;
        updateForm(character);
        document.getElementById("btnActualizar").style.display = "inline";
        document.getElementById("btnGuardar").style.display = "none";
    } else {
        alert("No se encontró un personaje con ese ID.");
    }
}

function update(){
    if (idEnEdicion !== null) {
        const character = arrayCharacters.find(p => p.id === idEnEdicion);

        if (character) {
            // Actualizar los datos del personaje
            character.firstName = document.getElementById("nombre").value;
            character.lastName = document.getElementById("apellido").value;
            character.age = parseInt(document.getElementById("edad").value);
            character.gender = document.getElementById("genero").value;
            character.blood = document.getElementById("tipoSangre").value;
            character.image = document.getElementById("imagen").files[0] ? URL.createObjectURL(document.getElementById("imagen").files[0]) : personaje.image;

            alert("Los datos del personaje han sido actualizados.");
            idEnEdicion = null; // Reiniciar la variable de edición
            document.getElementById("btnActualizar").style.display = "none";
            document.getElementById("btnGuardar").style.display = "inline";
        } else {
            alert("Error: No se encontró el personaje para actualizar.");
        }

        console.table(arrayCharacters);
    }
}


function updateForm(character) {
    document.getElementById("nombre").value = character.firstName;
    document.getElementById("apellido").value = character.lastName;
    document.getElementById("edad").value = character.age;
    document.getElementById("genero").value = character.gender;
    document.getElementById("tipoSangre").value = character.blood;
}