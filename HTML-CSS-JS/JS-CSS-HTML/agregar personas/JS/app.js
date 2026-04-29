const personasArray = [new Persona('Juan', 'Perez'), new Persona('Karla', 'Lara'), new Persona('Maria', 'Juarez')];

function mostrarPersonas() {
  console.log('Mostar personas...');
  let texto = '';
  for (let personaItera of personasArray) {
    console.log(personaItera);
    texto += `<li>${personaItera.nombre} ${personaItera.apellido}</li>`;
  }
  document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
  const forma = document.getElementById('forma');
  const nombre = forma['nombre'];
  const apellido = forma['apellido'];

  if (nombre.value != '' && apellido.value != '') {
    const personaVar = new Persona(nombre.value, apellido.value);
    console.log(personaVar);
    personasArray.push(personaVar);
    mostrarPersonas();
    nombre.value = '';
    apellido.value = '';
  } else {
    console.log('no hay informaciuon que agregar');
  }
}
