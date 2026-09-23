/* BOM - Browser Object Model */

/* Alertas y Dialogos */

/* alert('Hola soy una alerta');

prompt('Como se llama tu abuelita');

confirm('Tu abuela tiene mas de 56 años?'); */

/* Window */

console.log(window);

console.log(window.innerWidth);

console.log(window.innerHeight);

console.log(window.outerWidth);

console.log(window.outerHeight);

console.log(window.closed, window.document);

console.log(window.navigator.userAgent);

/* window.setInterval(() => {
  console.log('hola');
}, 10000);
 */
console.log(window.scrollX, window.scrollY);

/* Navigator */

console.log(navigator.appName);

console.log(navigator.appVersion);

/* 
if (!navigator.onLine) {
  alert('no hay internet');
} else {
  alert('con internet');
} */

/* Location */

console.log(location.href);

console.log(location.hostname);

// location.href = 'https://www.udemy.com/';

// history.back();

/* screen */

console.log(screen.width, screen.height);

/* Ventanas Emergentes o Pop ups */

let miWeb = window.open('https://chatgpt.com/', 'Chat GPT', 'width = 750,height= 550, left = 550,top=500');
