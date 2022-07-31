const score$$ = document.querySelector(".score");
const game$$ = document.querySelector(".game");
const hoyos$$ = document.querySelectorAll(".hole");
const topos$$ = document.querySelectorAll(".mole");
const button$$ = document.querySelector("button");
let score = 0;
let lastRandom = -1; //un valor que al estar fuera del rango  no puede suceder
let playing = false;

function startGame() {
  playing = true; //var para no contear el score cuando no se juega
  button$$.disabled = true; //desactivo el boton
  lastRandom = -1; //
  score = 0;
  score$$.textContent = score;
  moveHans();
  let intId = setInterval(() => { //guardas el intervalo en una variable                                     
    moveHans();
  }, 600);
  setTimeout(() => {             //microondas, vete a hacerte el cafe // aqui se para el juego de alghuna forma
    
    topos$$[lastRandom].style.top = "100%";
    clearInterval(intId);
    button$$.disabled = false;
    playing = false;
  }, 15000); //dp de 15s ejecuta lo de arriba
}
function getRandomNumber() {
  let randomHole = Math.floor(Math.random() * 6); //mathrandom tiene 16 decimales y cualquier numero en js tb llega a 16 decimales (Math.random() * (max-min))+ min
  if (randomHole === lastRandom) {
    return getRandomNumber();
  }
  lastRandom = randomHole;
  return randomHole;
}
function moveHans() {
  if (lastRandom !== -1) {
    // generamos condicion para que al iniciar la partida el valor del topo no se -1, pues peta...
    topos$$[lastRandom].style.top = '100%';
  }
  let holeIndex = getRandomNumber();
  topos$$[holeIndex].style.top = '0px';
}
function hammer(holeIndex) {
  // funcion convocada con onclick de html
  if (!playing) {
    return;
  }
  if (holeIndex === lastRandom) {
    score += 10;
  } else {
    score -= 5;
  }
  score$$.textContent = score;
}
let sfx =document.querySelector('audio');

topos$$.addEventListener("click", () => {
   sfx.play()
})