// => 
// concise way for creating function
// easier working with this keyword in objects / classes

const user = {
    name: 'tristan',
    age: '30'
}

// common function
function uppercasing(name){
    return `${name.charAt(0).toUpperCase()} ${name.slice(1)}`
}

console.log(uppercasing(user.name))

// function with assigned variable
const caps = function(name){
    return `${name.charAt(0).toUpperCase()} ${name.slice(1)}`
}

console.log(caps("camille"))

// arrow functions => function expressions
// all arrow functions are anonymous
const capsArrow = name => {
    return `${name.charAt(0).toUpperCase()} ${name.slice(1)}`
}

console.log(capsArrow("cyrus"))

// arrow function without return
const arrows = name => `${name.charAt(0).toUpperCase()} ${name.slice(1)}`;

console.log(arrows("thomas"))

// callback - a function call after a function
// passing a function to another function - high-order function
function allCaps(name, callback){
    return callback(arrows(name))
}

const result = allCaps(user.name, (names)=>{
    return `Hi! there, ${names}`
});

console.log(result)

//removed return
const results = allCaps(user.name, names => `Hi! there, ${names}`);

console.log(results)