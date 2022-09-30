function temperature(celsius, decimal){
    
    decimal = decimal || 1;
    const far = celsius * 1.8 * 32;
    return Number(far.toFixed(decimal))
}

const caps = function(name){
    return `${name.charAt(0).toUpperCase()} ${name.slice(1)}`
}

const rate = (celsius, decimal) => {

    decimal = decimal || 1;
    const far = celsius * 1.8 * 32;
    return Number(far.toFixed(decimal))

};

console.log(rate(21, 1))


// const final = rate(celsius, callback => callback(rate(value, decimal)))

// console.log(final(21))