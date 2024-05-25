alert("Bienvenido al juego de Piedra, Papel o Tijeras");

let nombre = prompt("Ingrese su nombre aquí, por favor.").toLowerCase();

alert("¡Hola " + nombre + "!, es hora de jugar.");

const OPCIONES = ["piedra", "papel", "tijeras"];
let rondas_ganadas = 0;
let rondas_perdidas = 0;

function jugar() {
  let rondas;
  do {
    rondas = Number(prompt("Ingrese la cantidad de rondas que desea jugar (entre 1 y 10):"));
  } while (isNaN(rondas) || rondas <= 0 || rondas > 10);

  for (let i = 0; i < rondas; i++) {
    let computadora = OPCIONES[Math.floor(Math.random() * 3)];
    let eleccion = prompt("Escribe piedra, papel o tijeras para jugar.").toLowerCase();

    while (eleccion !== "piedra" && eleccion !== "papel" && eleccion !== "tijeras") {
      alert("Por favor, ingrese piedra, papel o tijeras");
      eleccion = prompt("Escribe piedra, papel o tijeras para jugar.").toLowerCase();
    }

    if (eleccion === computadora) {
      alert("Empate, intentalo nuevamente");
    } else if ((eleccion === "piedra" && computadora === "tijeras") || (eleccion === "papel" && computadora === "piedra") || (eleccion === "tijeras" && computadora === "papel")) {
      alert("Felicidades " + nombre + ", has ganado esta ronda.");
      rondas_ganadas++;
    } else {
      alert("Lastima " + nombre + ", has perdido esta ronda.");
      rondas_perdidas++;
    }
  }

  if (rondas_ganadas > rondas_perdidas) {
    alert("¡Ganaste!. Tu puntaje fue de " + rondas_ganadas + " rondas ganadas y " + rondas_perdidas + " rondas perdidas");
  } else if (rondas_ganadas < rondas_perdidas) {
    alert("Perdiste. Tu puntaje fue de " + rondas_perdidas + " rondas perdidas y " + rondas_ganadas + " rondas ganadas");
  } else {
    alert("¡Empate!. El puntaje fue " + rondas_ganadas + " a " + rondas_perdidas);
  }

  let rejugar = confirm("¿Desea jugar nuevamente?");
  if (rejugar) {
    rondas_ganadas = 0;
    rondas_perdidas = 0;
    jugar();
  } else {
    alert("¡Gracias por jugar " + nombre + "!. Nos vemos la proxima");
  }
}

jugar();