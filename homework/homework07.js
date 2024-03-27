console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 1');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-1
Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	-> false
hasUpperCase("") 		-> false
*/

// Filter method
const hasUpperCase = string => string.split('').filter(letter => 65 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 90).length > 0;



/* String method
 const hasUpperCase = string => {
    let uperCase = 0;
    for(let i = 0; i < string.length; i++) {
        if(string.length > 0); 
        if(string[i] !== string[i].toLowerCase()) uperCase++;
        }
        return uperCase > 0;
}
*/

console.log(hasUpperCase("javascript"));// 	-> false
console.log(hasUpperCase("John"));// 		-> true
console.log(hasUpperCase("$125.0"));// 	-> false
console.log(hasUpperCase(""));// 		-> false

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 2');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-2
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string​.
Examples:
noDigit("") 			-> ""
noDigit("Javascript") 		-> "Javascript"
noDigit("123Hello") 		-> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"
*/

const noDigit = string => string.split('').filter(char => char === ' ' || !(char >= 0)).join('');


console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 3');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-3
Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from the original string​.
Examples:
noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	-> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	-> ""
noVowel("125$") 	-> "125$"
*/

const noVowel = string => string.split('').filter(el => !('AEIOUaeiou'.includes(el))).join('');

console.log(noVowel("TechGlobal"));     // 	-> "TchGlbl"
console.log(noVowel("AEOxyz"));         // 	-> "xyz"
console.log(noVowel("Javascript"));     // 	-> "Jvscrpt"
console.log(noVowel(""));               // 	-> ""
console.log(noVowel("125$"));           // 	-> "125$"

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 4');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-4
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s. ​
Examples:
no13([1, 2, 3 ,4]) 		-> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		-> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 			-> []

*/

const no13 = array => array.map(num => num === 13 ? num = 0 : num);

console.log(no13([1, 2, 3, 4]));            // 	-> [1, 2, 3 ,4] 
console.log(no13([13, 2, 3]));              // 	-> [0, 2, 3]
console.log(no13([13, 13, 13, 13, 13]));   //	-> [0, 0, 0, 0, 0]
console.log(no13([]));                      // 	-> []

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 5');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-5
Write a function named middleInt() which takes three number arguments and return the middle number. ​
Examples:
middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10
*/
const middleInt = (num1, num2, num3) => num1 + num2 + num3 - Math.min(num1, num2, num3) - Math.max(num1, num2, num3);

console.log(middleInt(1, 2, 2));     // 	-> 2
console.log(middleInt(5, 5, 8));     // 	-> 5
console.log(middleInt(5, 3, 5));     // 	-> 5
console.log(middleInt(1, 1, 1));     // 	-> 1
console.log(middleInt(-1, 25, 10));  // 	-> 10

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 6');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-6
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​
Examples:
sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0
*/

const sumOfDigits = string => {
    let sum = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] >= 0) sum += Number(string[i]);
    }
    return sum;
}

/* Reduce method
const sumOfDigits = string => string.split('').reduce((sum, elem) => (elem >= 0) ? sum + Number(elem) : sum, 0);
*/


console.log(sumOfDigits("Javascript"));         // 	-> 0
console.log(sumOfDigits("John's age is 29"));   // 	-> 11
console.log(sumOfDigits("$125.0"));             // 	-> 8
console.log(sumOfDigits(""));                   // 	-> 0

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 7');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-7
Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []
*/

const arrFactorial = array => {
    return array.map(num => {
        let total = 1;
        for (let i = 2; i <= num; i++) {
            total *= i;
        }
        return total;
    })
}



console.log(arrFactorial([1, 2, 3, 4]));    // 		->  [1, 2, 6, 24]
console.log(arrFactorial([0, 5]));          // 		-> [1,120]
console.log(arrFactorial([5, 0, 6]));      // 		-> [120, 1, 720]
console.log(arrFactorial([]));              // 		-> []

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 8');
console.log('\n-------------------------------------------------------------------------------\n');
/* Task-8
Write a function named categorizeCharacters() which takes a string word as argument 
and return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]
*/



const categorizeCharacters = (string) => {
    let letters = '';
    let digits = '';
    let specials = '';
        for(let i = 0; i < string.length;i++) {
        if(65 <= string.charCodeAt(i) && string.charCodeAt(i) <= 90 || 97 <= string.charCodeAt(i) && string.charCodeAt(i) <= 122) letters = letters.concat(string[i]);
        else if(string[i] >= 0) digits = digits.concat(string[i]);
        else specials = specials.concat(string[i]);
     };
     let result = [letters, digits, specials];
     return result;
}

console.log(categorizeCharacters("1234"));          // 	-> [ '' , '1234', '' ] 
console.log(categorizeCharacters("abc123$#%"));     // 	-> [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%"));     // 	-> [ 'abc', '123', '$%%' ]

