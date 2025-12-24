
import superheroes from "superheroes";

const randomIndex = Math.floor(Math.random() * superheroes.length);
const name = superheroes[randomIndex];

console.log(`I am ${name}!`);
