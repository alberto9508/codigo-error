const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Corregido el selector .name
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {  // Se agrega async para poder usar await
  $n.textContent = 'cargando...';
  try {   // se agrega try,se utiliza para rodear el código que puede generar una excepción.
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // Se espera la respuesta y luego se convierte a JSON
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
  }   catch (err) {  // se grega catch ,se utiliza para manejar esa excepción si ocurre.
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`// Se le agrega $ y  asigna el mensaje de error al elemento $n 
}

displayUser('stolinski'); // No se necesita 'catch' aquí