function temperature(celsius, decimal){
    
    decimal = decimal || 1;
    const far = celsius * 1.8 * 32;
    return Number(far.toFixed(decimal))
}

const temp = (celsius, decimal) => {

    decimal = decimal || 1;
    const far = celsius * 1.8 * 32;
    return Number(far.toFixed(decimal))

};

console.log(temp(21, 1))