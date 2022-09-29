const prompt = require("prompt-sync")();

const nameOfPerson = prompt("What is your name ? ");

const response = nameOfPerson || "guest";
console.log(response)