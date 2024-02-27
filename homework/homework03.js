const { generateRandomNumber } = require('../utils/MathHelper.js');

console.log('Task -1');
/*
TASK - 1
Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.
*/

let r1 = generateRandomNumber(1, 100);
let r2 = generateRandomNumber(1, 100);
let r3 = generateRandomNumber(1, 100);
let avg = (r1 + r2 + r3) / 3

console.log(`Randomly generated number is = ${r1}, ${r2}, ${r3}`);
if (avg >= 50) {
    console.log('true');
}
else {
    console.log('false');
}

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task -2');
/* 
Task - 2
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print “DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
*/

let ran1 = generateRandomNumber(1, 3);
let ran2 = generateRandomNumber(1, 3);
let ran3 = generateRandomNumber(1, 3);

console.log(`Randomly generated number is = ${ran1}, ${ran2}, ${ran3}`);
if (ran1 === ran2 && ran2 === ran3) {
    console.log('TRIPLE MATCH');
}
else if (ran1 === ran2 || ran2 === ran3 || ran1 === ran3) {
    console.log('DOUBLE MATCH');
}
else {
    console.log('NO MATCH');
}
console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 3');
/*
TASK - 3
Requirement:
Write a function named as hasA() which takes a string word as an argument 
and returns true if given string has a character "a" or "A", 
and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech") 	-> false
hasA("Global") 	-> true
hasA("") 		-> false
hasA("Apple") 	-> true
*/
function hasA(strWord) {
    return console.log(strWord.toUpperCase().includes('A'));
}
hasA('Tech');
hasA('Global');
hasA('');
hasA('Apple');


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task -4');
/*
Task - 4
Requirement:
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.

Examples:
doubleOrTripleWord("Tech") 	-> "TechTechTech"
doubleOrTripleWord("Apple") 	-> "AppleApple”
doubleOrTripleWord("") 		-> ""
doubleOrTripleWord(" ") 		-> " "
doubleOrTripleWord("1") 	-> "11"
doubleOrTripleWord("22") 	-> "222222"

*/
function doubleOrTripleWord(strWord2) {
    if (strWord2.length % 2 === 0) {
        console.log(strWord2 + strWord2 + strWord2);
    }
    else {
        console.log(strWord2 + strWord2);
    }
}
doubleOrTripleWord("Tech")
doubleOrTripleWord("Apple")
doubleOrTripleWord("")
doubleOrTripleWord(" ")
doubleOrTripleWord("1")
doubleOrTripleWord("22")


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task -5');
/*
Task - 5
Requirement:
Write a function named as firstWord() which takes a string word as an argument and returns the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World") 		-> "Hello"
firstWord("I like JavaScript") 	-> "I"
firstWord("Hello") 		        -> "Hello"
firstWord("") 		            -> ""
firstWord("    ") 		        -> ""

*/
function firstWord(strWord3) {
    strWord3 = strWord3.trim().split(' ');
    if (strWord3.length > 0) return console.log(strWord3[0]);
    else return console.log('');
    }
firstWord("Hello World");
firstWord("I like JavaScript");
firstWord("Hello");
firstWord("");
firstWord("    ");
console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task -6');

/*
Task - 6
Requirement:
Write a function named as lastWord() which takes a string word as an argument and returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World") 		-> "World"
lastWord("I like JavaScript") 	-> "JavaScript”
lastWord("Hello") 		-> "Hello"
lastWord("") 		-> ""
lastWord("    ") 		-> ""
*/
/*
function fword(str) {
    trim = str.trim()
    if(str.includes(" ")){
        return str.slice(0, str.indexOf(" ")); 
    }
    else {
        return str.slice(0);
    }
}  
console.log(fword("Hello World"));
console.log(fword("I like JavaScript"));
console.log(fword("Hello"));
console.log(fword(""));
console.log(fword("    "));
*/
function lastWord(strWord4) {
    return console.log(strWord4.trim().slice(strWord4.trim().lastIndexOf(' ') + 1));
}
lastWord("Hello World");
lastWord("I like JavaScript");
lastWord("Hello");
lastWord("");
lastWord("    ");

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task -7');
/*
Task - 7
Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") 	-> "HelloWorld"
firstLastWord("I like JavaScript") 	-> "IJavaScript”
firstLastWord("Hello") 		-> "HelloHello"
firstLastWord("") 		-> ""
firstLastWord("    ") 		-> ""
*/

function firstLastWord(strWord5) {
    return console.log((strWord5.trim().split(' ')[0]) + (strWord5.trim().slice(strWord5.trim().lastIndexOf(' ') + 1)));
}
firstLastWord("Hello World");
firstLastWord("I like JavaScript");
firstLastWord("Hello");
firstLastWord("");
firstLastWord("    ");

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task -8');
/*
Task - 8
Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello") 	-> false
startVowel("Apple") 	-> true
startVowel("orange") 	-> true
startVowel("") 	-> false
startVowel("    ") 	-> false
startVowel("123") 	-> false
*/
function startVowel(strWord6) {
    let fLet = strWord6.at(0);
    console.log('aeiouAEOUI'.includes(fLet));
}

startVowel("Hello");
startVowel("Apple");
startVowel("orange");
startVowel("");
startVowel("    ");
startVowel("123");

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task -9');
/*
Task - 9
Write a function named as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc") 	-> ""
swap4("JavaScript") 	-> "riptScJava"
swap4("TechGlobal") 	-> "obalGlTech"
swap4("") 		-> ""
swap4("    ") 		-> ""
swap4("Apple") 	-> ""
*/

function swap4(strWord6) {
    if (strWord6.length < 8) console.log('');
    else console.log(strWord6.slice(-4) + strWord6.slice(4, -4) + strWord6.slice(0, 4));
}

swap4("abc");
swap4("JavaScript");
swap4("TechGlobal");
swap4("");
swap4("    ");
swap4("Apple");

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task -10');
/*
Task - 10
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World") 	-> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") 	-> "bar bar foo foo"
swapFirstLastWord("") 		-> ""
swapFirstLastWord("    ") 		-> ""
swapFirstLastWord("Hello") 	-> ""
swapFirstLastWord("Hello   ") 	-> ""
*/

function swapFirstLastWord(strWord7) {
    firstWord7 = strWord7.trim().split(' ')[0];
    lastWord7 = strWord7.trim().slice(strWord7.trim().lastIndexOf(' ') + 1);
    middleWord7 = strWord7.trim().slice(strWord7.trim().indexOf(' '), strWord7.trim().lastIndexOf(' ') + 1);
    if (strWord7.trim().split(' ').length < 2) console.log('');
    else console.log(lastWord7 + middleWord7 + firstWord7);
}
    swapFirstLastWord("Hello World");
    swapFirstLastWord("I like JavaScript");
    swapFirstLastWord("foo bar foo bar");
    swapFirstLastWord("");
    swapFirstLastWord("    ");
    swapFirstLastWord("Hello");
    swapFirstLastWord("Hello   ");

    console.log('\n---------------------------------------THE END----------------------------------------\n');


    //Task 1
/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.

Test data 1:
20, 70, 25

Expected Output 1:
false

Test data 2:
65, 80, 90

Expected Output 2: 
true
*/
let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let num3 = Math.floor(Math.random() * 100) + 1;

let average = Math.floor((num1 + num2 + num3) / 3);
console.log(average >= 50 ? true : false);


//Task 2
/*
Requirement:
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print "NO MATCH"
-If any of those 2 numbers are equal, then print 
"DOUBLE MATCH"
-If all 3 numbers are equal, then print "TRIPLE MATCH"

Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH

Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH

Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH

Test data 4:
1, 1, 2
Expected Output 4: 
DOUBLE MATCH
*/
let rand1 = Math.floor((Math.random() * 3) + 1);
let rand2 = Math.floor((Math.random() * 3) + 1);
let rand3 = Math.floor((Math.random() * 3) + 1);

console.log(`${rand1} ${rand2} ${rand3} `)

if(rand1 === rand2 && rand2 === rand3) console.log('TRIPLE MATCH');
else if(rand1 !== rand2 && rand2 !== rand3) console.log('NO MATCH')
else console.log('DOUBLE MATCH');


//Task 3
/*
Requirement:
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.

Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
*/

function hasA(str) {
    return str.includes('a') || str.includes('A')
}

console.log(hasA("Tech")) //false
console.log(hasA("Global")) //true
console.log(hasA("")) //false
console.log(hasA("Apple")) //true


//Task 4
/*
Requirement:
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple"
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"
*/
const doubleOrTripleWord = (str) => {
  if(str.length % 2 === 0) return `${str}${str}${str}`
  else return `${str}${str}`
  /*
    WAY2: 
    if(str.length % 2 === 0) return str.padStart(str.length * 3, str)
    else return str.padStart(str.length * 2, str)
*/
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));


//Task 5
/*
Requirement:
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""
*/
function firstWord(str){
    str = str.trim()
    if(str.includes(' ')) return str.slice(0, str.indexOf(' '))
    else return str;
// return str.trim().split(' ')[0]
}
console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord("   "));


//Task 6
/*
Requirement:
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript"
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""
*/

function lastWord(str){
    str = str.trim().split(' ');
    return str[str.length - 1]
    // str = str.trim();
    // if(str.includes(' ')) return str.slice(str.lastIndexOf(' ') + 1)
    // else return str;

}

console.log(lastWord("Hello World"));// [hello, world]
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));// [Hello]
console.log(lastWord(""));
console.log(lastWord("   "));


//Task 7
/*
Requirement: 
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.

Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript"
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""
*/

function firstlastWord(str){
    //  str = str.trim().split(' ');
    //  return str[0] + str[str.length - 1];

    str = str.trim();
    if(str.includes(' ')) return str.slice(0, str.indexOf(' ')) + str.slice(str.lastIndexOf(' ') + 1)
    else return str + str;
}

console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord("   "));


//Task 8
/*
Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/

function startVowel(str){
    // str = str.toLowerCase()
    // if(str.startsWith('a')) return true;
    // else if(str.startsWith('e'))return true;
    // else if(str.startsWith('i'))return true;
    // else if(str.startsWith('o'))return true;
    // else if(str.startsWith('u'))return true;
    // return false;

    return 'aeiouAEIOU'.includes(str[0])
    
}

console.log(startVowel("Hello"));// false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange"));// true
console.log(startVowel("")); //false
console.log(startVowel("    "));//false
console.log(startVowel("123") );//false


//Task 9
/*
Requirement: 
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.

Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""
*/

function swap4(str){
    if(str.length < 8) return "";
    
    let first4 = str.slice(0, 4);
    let middle = str.slice(4 , -4);
    let last4 = str.slice(-4); 

    return last4 + middle + first4
}

console.log(swap4("abc"));
console.log(swap4("Javascript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("   "));
console.log(swap4("Apple"));


//Task 10
/*
Requirement: 
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.
NOTE: Return empty string if the given string does not 
have 2 or more words.

Examples:
swapFirstLastWord("Hello World")  -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""
*/

const swapFirstLastWord = (str) => {
    str = str.trim();

    if(str.includes(' ')){
        let firstWord = str.slice(0, str.indexOf(' '));
        let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
        let lastWord = str.slice(str.lastIndexOf(' ') + 1);

        return lastWord + middle + firstWord
    }

    return "";

}

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("    "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello  "));  