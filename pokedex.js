let offset = 0;
const baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=151`;
const id = 1;

const div$$ = document.querySelector(".container");

let sfx= document.querySelector('.flip');
let sfxOut = document.querySelector('.flop')

const init = () => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {pinta(data); console.log(data)});
};
init();


const pinta = (pokemons) => {
  for (let i = 0; i < pokemons.results.length; i++) {
    const pokemon = pokemons.results[i];
    console.log(pokemon);

    fetch(pokemon.url)
      .then((res) => res.json())
      .then((poke) => {
        pintaimg(poke)
      });
  }
};

const pintaimg = (poke) => {
  const divPapa$$ = document.createElement("div");
  
  const divPokeB$$ = document.createElement("div");
  const divPokeA$$ = document.createElement("div");
  const divHijo$$ = document.createElement("div"); //como pintar 1 div con 2 divs dentro, todos de scope locales, sobre uno global??pintando todos en local!!
  divPapa$$.classList.add("papa");
  divHijo$$.classList.add("hijo");
  
  divPokeA$$.classList.add("pokemonA");
  divPokeB$$.classList.add("pokemonB");
  divPokeA$$.innerHTML = `<p>${poke.name.toUpperCase()}</p><h3># ${poke.id}</h3><img height= 180px class="pokemonBack" src="${poke.sprites.versions["generation-v"]["black-white"].animated.back_shiny}"/>`;
  divPokeB$$.innerHTML = `<img  width=250px src="${poke.sprites.other["official-artwork"].front_default}"/><h2>${poke.name.toUpperCase()}</h2><h3>Clase: ${poke.types[0].type.name}</h3><img width=120px class="pokegif" src="${poke.sprites.versions["generation-v"]["black-white"].animated.front_shiny}"/><img class="pokeball" src="https://www.nicepng.com/png/full/891-8912776_poke-great-ultra-master-ball-pokeball-pixel-png.png"/>`;
  divHijo$$.appendChild(divPokeA$$);
  divHijo$$.appendChild(divPokeB$$);
  divPapa$$.appendChild(divHijo$$);
  div$$.appendChild(divPapa$$);
  divPokeA$$.addEventListener('mouseenter',() => {
    sfx.play(1)
  })
  divPokeB$$.addEventListener('mouseleave', () => {
    sfxOut.play()
  })
  console.log(poke);
  tipos(divPokeB$$, poke);
};
  
//let tipos = {veneno:"poison",fuego:"fire",hierba:"grass",normal:"normal",hielo:"ice",psiquico:"psychic","rock","bug","water","ground","electric","fairy","fighting"}
// 


const tipos = (divPokeB$$,poke) => {
    const tipo = poke.types[0].type.name;
    if (tipo === "poison") {
        divPokeB$$.style.backgroundImage = 'url("https://thumbs.gfycat.com/SlightWellgroomedAlaskanhusky-max-1mb.gif")';
        divPokeB$$.style.backgroundColor = "purple";
        
    }
    if (tipo === "fire"){
        divPokeB$$.style.backgroundColor = "red";
        divPokeB$$.style.backgroundImage = 'url("https://i.gifer.com/5Mz4.gif")';
    }
    if (tipo === "grass") {
      divPokeB$$.style.backgroundColor = "green";
      divPokeB$$.style.backgroundImage = 'url("https://images.squarespace-cdn.com/content/v1/5ba8fb957fdcb8cb9075d8d8/1538600228947-7AAXMVCL22TXVZEECX2X/juoksupuu.gif")';      
    }
    if (tipo === "normal") {
      divPokeB$$.style.backgroundColor = 'grey';
      divPokeB$$.style.backgroundImage = 'url("https://hatersandgoblins.files.wordpress.com/2015/10/dff7d-tumblr_lvwmhde0ln1qg0dcvo1_500.gif")';
    } 
    if (tipo === "ice") {
      divPokeB$$.style.backgroundColor = 'rgb(67, 189, 255)';
      divPokeB$$.style.backgroundImage = 'url("https://thumbs.gfycat.com/WelloffCooperativeAsiaticmouflon-size_restricted.gif")';      
    } 
    if (tipo === "psychic") {
      divPokeB$$.style.backgroundColor = 'rgb(78, 33, 81)';
      divPokeB$$.style.backgroundImage = 'url("https://thumbs.gfycat.com/ObviousBountifulAnole-max-1mb.gif")';
    }
    if (tipo === "rock") {
       divPokeB$$.style.backgroundColor = 'rgb(41, 40, 40)';
       divPokeB$$.style.backgroundImage = 'url("https://images.squarespace-cdn.com/content/v1/55a0e13ce4b00afc9ff06220/1458987790247-0N3HMV6N4Z6XX1D7F3C5/image-asset.gif")';
    }
    if (tipo === "bug") {
      divPokeB$$.style.backgroundColor = 'black';
       divPokeB$$.style.backgroundImage = 'url("https://i.redd.it/yfvhg4tb4mu61.gif")';
    }
    if (tipo ==="water") {
      divPokeB$$.style.backgroundColor = 'rgb(15, 10, 89)';
       divPokeB$$.style.backgroundImage = 'url("https://thumbs.gfycat.com/SecondBlankIbisbill-max-1mb.gif")';
    }
    if (tipo === "ground") {
      divPokeB$$.style.backgroundColor = 'rgb(89, 47, 10)';
       divPokeB$$.style.backgroundImage = 'url("https://thumbs.gfycat.com/AccuratePointlessIndiancow-max-1mb.gif")';
    }
    if (tipo === "electric") {
      divPokeB$$.style.backgroundColor = 'rgb(161, 179, 3)';
       divPokeB$$.style.backgroundImage = 'url("https://i.pinimg.com/originals/4b/d3/4f/4bd34f7f187e929d073182dfebb03fde.gif")';
    }
    if (tipo === "fairy") {
      divPokeB$$.style.backgroundColor = 'rgb(179, 3, 158)';
       divPokeB$$.style.backgroundImage = 'url("https://img.itch.zone/aW1hZ2UvODYyNjY2LzU5MzQ1MzMuZ2lm/original/C%2FrEMc.gif")';
    }
    if (tipo === "fighting") {
      divPokeB$$.style.backgroundColor = 'white';
       divPokeB$$.style.backgroundImage = 'url("https://thumbs.gfycat.com/LeanKaleidoscopicLacewing-max-1mb.gif")';
    }
    if (tipo === "dragon") {
      divPokeB$$.style.backgroundColor = 'rgb(216, 145, 2)';
      divPokeB$$.style.backgroundImage = 'url("http://pa1.narvii.com/6149/a01bcd302366216689b3011ffe8b04d39f5468de_00.gif")';
    }
    if (tipo === "ghost") {
      divPokeB$$.style.backgroundColor = 'rgb(6, 30, 22)';
      divPokeB$$.style.backgroundImage = 'url("http://38.media.tumblr.com/d30fe069cc48e11eeb31ae08293a159e/tumblr_nbtdxg9d6n1szf0nzo1_250.gif")';
      divPokeB$$.style.zIndex= '2'
    }

};
