const {CharacterHelper} = require('../utils/CharacterHelper.js');
const {generateRandomNumber} = require('../utils/MathHelper.js');

// Task-1

let num1 = Math.floor(Math.random()*(100-1+1)+1);
console.log(`The random number is =` + num1);
if (num1 <= 50) console.log(`${num1} is in the 1st half`);
else console.log(`${num1} is in the 2nd half`);
if (num1 <= 25) console.log(`${num1} is in the 1st quater`);
    else if(num1 <= 50) console.log(`${num1} is in the 2nd quater`);
    else if(num1 <= 75) console.log(`${num1} is in the 3rd quater`);
    else console.log(`${num1} is in the 4th quater`);

    console.log('\n-------------------------------------------------------------------------------\n');
    console.log('Task - 2');
    // Task - 2
    let num2 = Math.floor(Math.random()*(100-1+1)+1);
    let num3 = Math.floor(Math.random()*(100-1+1)+1);
    let num4 = Math.floor(Math.random()*(100-1+1)+1);
    console.log(`The random numbers is = ` + num2 + ' ' + num3 + ' ' + num4);
    if (num2 % 2 === 0 && num3 % 2 === 0 && num4 % 2 === 0) console.log('true');
    else console.log ('false');


    console.log('\n-------------------------------------------------------------------------------\n');
    console.log('Task - 3');
    // Task - 3
    let str = 't';
if (CharacterHelper.isDigit(str)) console.log(`"${str}" is a digit`);
else if(CharacterHelper.isLetter(str)) console.log(`"${str}" is a letter`); 
else if(CharacterHelper.isSpace(str)) console.log(`" " is a whitespace`);
else console.log(`"${str}" is a special character`);
console.log('\n-------------------------------------------------------------------------------\n');
    console.log('Task - 4');
    // Task - 4
function hasBlue(string) {
    return string.toLowerCase().includes('blue') 
}

    console.log(hasBlue("Hello World"));
    console.log(hasBlue("Javabluescript"));
    console.log(hasBlue("Tech Blue Global"));
    console.log(hasBlue("1234"));
    console.log(hasBlue("ABLUEC"));

    console.log('\n-------------------------------------------------------------------------------\n');
    console.log('Task - 5');
    
    function startT(string) {
        return string.toLowerCase().startsWith('t')
    }
    console.log(startT("Hello World"));
    console.log(startT("typescript"));
    console.log(startT("TechGlobal"));
    console.log(startT("1234"));
    console.log(startT("ABC"));