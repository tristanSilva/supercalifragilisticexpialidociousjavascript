const authorizedCenter = false;

// shorten  - conditionals with ternaries
const isisAuthorized = authorizedCenter ? true : false;
console.log(isisAuthorized)

// multiple conditions - 
// instead of doing this use the if...else if ...  else statement
// that will be easy to read and understand
const givemeaNumber = 20;
const numberResponse = givemeaNumber < 10 ? "'<10'":  givemeaNumber > 18 ? "'18'" : givemeaNumber > 10 ? "'>10'":"older";
console.log(numberResponse)