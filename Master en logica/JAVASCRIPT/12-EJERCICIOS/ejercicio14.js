let genero = prompt('que genero de musica prefieres? (rock,pop,rap)');

switch (genero) {
  case 'rock':
    alert('esta sonando , tengo la camisa negra');
    break;
  case 'pop':
    alert('esta sonando , tengo smooth criminal');
    break;
  case 'rap':
    alert('esta sonando , tengo 8 mile');
    break;
  default:
    alert('no existe el genero');
    break;
}
