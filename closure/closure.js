"use strict"

// Closure are property of a JS function
function handle(value){
    let count = 0;

    return function hold(){
        count += value;
        return count;
    }

}

const handled = handle(2)

console.log(handled())
console.log(handled())
console.log(handled())