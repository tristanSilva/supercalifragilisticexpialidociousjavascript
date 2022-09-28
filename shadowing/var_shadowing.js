'use strict'

// variables declaration
var rates = 20;
var rateStandard = 18;

// view value
console.log('rates before > ',rates)
console.log('rates before > ',rateStandard)

if(rateStandard < rates){
    var rates = rates - rateStandard;
    console.log('rates :', rates)
}

console.log('rates after > ',rates)


if(rateStandard < rates){
    let rateStandard = rateStandard - 10;
    console.log('rateStandard :', rateStandard)
}

console.log('rateStandard after > ',rateStandard)