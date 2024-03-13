console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 1');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	    -> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		        -> 0
*/


function countPos(array) {
    let count = 0;
    for (const number of array) {
        if (number > 0) count++;
    }
    return count;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 2');
console.log('\n-------------------------------------------------------------------------------\n');

/*Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp") 	    -> 4
countA("QA stands for Quality Assurance")   -> 5
countA("Cypress") 			                -> 0
*/

function countA(string) {
    let countA = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase().includes('a')) countA++;
    }
    return countA;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 3');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		           -> 2
countVowels("Hello World") 		       -> 3
countVowels("JavaScript is fun") 	   -> 5
countVowels("") 			           -> 0
*/

function countVowels(stringWord) {
    let countVovel = 0;
    for (const letter of stringWord) {
        if ('aeoui'.includes(letter.toLowerCase())) countVovel++;
    }
    return countVovel;
}


console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 4');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") 		            -> 3
countConsonants("Hello World") 		        -> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			            -> 0
*/

function countConsonants(stringWord) {
    let counterConsonants = 0;
    for (const letter of stringWord) {
        if ('aeoui'.includes(letter.toLowerCase()));
        else counterConsonants++;
    }
    return counterConsonants;
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 5');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		    -> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 
countWords("1 2 3 4") 				                    -> 4
*/

function countWords(string) {
    let countWords = 0;
    let stringWithoutSpace = string.trim().split(' ');
    for (const word of stringWithoutSpace) {
        if (word.length > 0) countWords++;
    }
    return countWords;
}
console.log(countWords("    Javascript is fun      "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 6');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/

function factorial(number) {
    let factorialOfNumber = 1;
    for (let i = 1; i <= number; i++) {
        factorialOfNumber *= i;
    }
    return factorialOfNumber;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 7');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity

Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true
*/

function isPalindrome(stringWord) {
    let reversedStringWord = '';
    for (let i = stringWord.length - 1; i >= 0; i--) {
        reversedStringWord += stringWord[i]
    }
    return (stringWord.toLowerCase() === reversedStringWord.toLowerCase());
}
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 8');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named as countMultipleWords() which takes an array as an argument and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ])                                                 -> 0 	
*/

function countMultipleWords(array) {
    let counter = 0;
    for (const word of array) {
        if (word.trim().split(' ').length > 1) counter++;
    }
    return counter;
}


console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "]));
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "]));
console.log(countMultipleWords([]));

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 9');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			    -> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 	-> 2
count3OrLess("My name is John Doe") -> 3
count3OrLess("") 			        -> 0
*/

function count3OrLess(stringWord) {
    let separateStringWord = stringWord.split(' ');
    let count3OrLessWord = 0;
    
    for(const word of separateStringWord) {
        if(word.length === 0) return count3OrLessWord;
        else if(word.length <= 3) count3OrLessWord++;
    }
    return count3OrLessWord;
}

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 10');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named as isPrime() which takes a number as an argument and returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. 
The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 	-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false
*/

function isPrime(number) {
for(let i = 2; i <= 7; i++) {
    if(number < 2) return false;
    else if(number === 2 || number === 3 || number === 5 || number === 7) return true;
    else if(number % i === 0) return false;
} return true
}



console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 11');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]
*/

function add(array1, array2){
    const newArray = [];
    const longArray = array1.length > array2.length ? array1 : array2;
    const shortArray = array1.length < array2.length ? array1 : array2;
    for(let i = 0; i < shortArray.length; i++) {
        newArray.push(array1[i] + array2[i]);
    }
    return newArray.concat(longArray.slice(shortArray.length));
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 12');
console.log('\n-------------------------------------------------------------------------------\n');

/*
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> "" 
*/



// function removeExtraSpaces(stringWord) {
//     let separateStringWordArray = "      Hello    World     ".trim().split(' ');
//     let arrayWithoutSpaces = [];
//     for(const word of separateStringWordArray) 
//     if(word !== '') arrayWithoutSpaces.push(word)
//     arrayWithoutSpaces = arrayWithoutSpaces.join().replaceAll(',', ' ');
//     return arrayWithoutSpaces;


   
// }  




console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 13');
console.log('\n-------------------------------------------------------------------------------\n');
        
/*
Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0
*/

function findClosestTo10(arrayOfNumbers) {
let newArray = [];
if(arrayOfNumbers.length > 0) {
for(let i = 0; i < arrayOfNumbers.length; i++ ) {
    if(arrayOfNumbers[i] === 0) newArray.push(0);
    else if(arrayOfNumbers[i] != 10) newArray.push(Math.abs(10 - arrayOfNumbers[i]));
}
}
return (Math.min(...newArray)); 
}
console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));    
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));    
console.log(findClosestTo10([0, -1, -2]));    



