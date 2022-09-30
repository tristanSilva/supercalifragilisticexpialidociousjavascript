// => 
// concise way for creating function
// easier working with this keyword in objects / classes

const user = {
    name: 'tristan',
    age: '30'
}

function uppercasing(name){
    return `${name.charAt(0).toUpperCase()} ${name.slice(1)}`
}

console.log(uppercasing(user.name))

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

const arrows = name => 
    `${name.charAt(0).toUpperCase()} ${name.slice(1)}`;

console.log(arrows("thomas"))
