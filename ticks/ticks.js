// prompt is a method of the Global window object found in browsers. 
// It's not part of the JavaScript language. 
// This is an  alternative, use of library to run on cli

const prompt = require("prompt-sync")();

let age = prompt("What's your age? ")

const response = "You're " + age + ", old."
console.log(response)

// use ticks
const ticksResponse = `You're ${age}, old.`
console.log(ticksResponse)