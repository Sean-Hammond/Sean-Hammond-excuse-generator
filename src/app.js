import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomPhrase() {
  
}

let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'Dave'];
let action = ['ate', 'lost', 'crushed', 'broke', 'stole'];
let what = ['my homework', 'my phone', 'the car', 'my glasses'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector('#excuse').innerHTML = who[Math.floor(Math.random() * 5)]
   + " " + action[Math.floor(Math.random() * 5)] + " " + what[Math.floor(Math.random() * 4)] + " " + when[Math.floor(Math.random() * 5)] + "."
};

