console.log((3 == "3" || 2 + 5 === "7") && !(5 < 10 || !false)) //false
console.log((!true && !false) || 5 * 2 === true * 10) //true
console.log("3" * "5" >= 15 && true == 1 && " " == false && "" === 0) //false
console.log(!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5))//false
console.log(!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1")//true
console.log((true && false) || (10 + 5 === "15" && "apple" !== "orange")) //false
console.log(!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false)) //true
console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false)) //true
console.log((4 >= 3 && 5 * 2 === "10") || !(7 !== "7" && "dog" === "cat")) //true
console.log((20 % 6 !== 0 && "apple" === "orange") || !(2 + 2 === 4 && true)) //false
console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10))//false
console.log((5 + 3 >= "8" && 2 ** 3 === "8") || !(false || true)) //false
console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true)) //true
console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0)) //true
console.log((5 * 2 === 9 || true) && !(10 - 5 !== 5 && 10 % 3 === 1)) //true
console.log(7!=='7')

let r1 = Math.floor(Math.random() * (10-1+1)+1);
console.log(r1)
console.log(r1 % 2 === 0);

r1 = Math.floor(Math.random() * (10-1+1)+1);
r2 = Math.floor(Math.random() * (10-1+1)+1);
r3 = Math.floor(Math.random() * (10-1+1)+1);
console.log(r1, r2, r3);
console.log(Math.min(r1, r2, r3));

function concat(str1, str2) {
    return console.log(str1+str2);
    }
    concat("Tech", "Global");
    
/*
 * Find if a number is even or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true. 
Otherwise, print false. 
Examples: 
1 -> false 
2 -> true 
5 -> false 
10 -> true 
*/
let num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(`random number is ${num} ${num % 2 === 0}`);
/*
Find if a number is odd or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is odd, print true. 
Otherwise, print false. 
Examples: 
1 -> true 
2 -> false 
5 -> true 
10 -> false 
*/
let n1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(`random is ${n1}`, n1 % 2 !== 0);
/*
Find if a number is positive or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is positive, print true. 
Otherwise, print false. 
Examples: 
-5 -> false 
-1 -> false 
0 -> false 
1 -> true 
5 -> true 
 */
n2 = Math.floor(Math.random() * (5 + 5 + 1)) - 5;
console.log(`random is ${n2}`, n2 + n2 > 0);

let n3 = Math.floor(Math.random() * (5 + 5 + 1) - 5);
console.log(n3);
console.log(n3 + n3 <= 0);

let n4 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
console.log(`generated random number is ${n4},`, n4 % 5 === 0);


let n5 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
console.log(`generated random number is ${n5},`, n5 % 7 === 0);

let n6 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n7 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random numbers is ${n6}, ${n7}, the sum of the numbers is =`, n6 + n7);

let n8 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n9 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random numbers is ${n8}, ${n9}, the absolute difference of the numbers is =`, Math.abs(n8 - n9));

let n10 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n11 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random numbers is ${n10}, ${n11}, the products of the numbers is =`, n10 * n11);

let n12 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random number is ${n12}, the square of the number is =`, n12 ** 2);

let n13 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random number is ${n13}, the cube of the number is =`, n13 ** 3);

let miles = Math.floor(Math.random() * (10 - 1 + 1) + 1); // mile unit
console.log(`Miles ${miles} = kilometers`, miles * 1.6);

let kilograms = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(`kilograms ${kilograms} = pounds`, kilograms * 2.2);

function kgToPound(kg) {
    return console.log(kg * 2.2);
}

kgToPound(Math.floor(Math.random() * (100 - 1 + 1) + 1));



let n14 = Math.floor(Math.random() * (3 - 1 + 1) + 1);
let n15 = Math.floor(Math.random() * (3 - 1 + 1) + 1);
console.log(`generated random numbers is ${n14}, ${n15}, the numbers is equal -`, n14 === n15);


let age = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(`The generated age is ${age}, `, age >= 16);

let n16 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n17 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random numbers is ${n16}, ${n17}, the greatest numbers is`, Math.max(n16, n17));

let n18 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n19 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n20 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random numbers is ${n18}, ${n19}, ${n20}, the greatest numbers is`, Math.max(n18, n19, n20));


let n21 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n22 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random numbers is ${n21}, ${n22}, the smallest numbers is`, Math.min(n21, n22));

let n23 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n24 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n25 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random numbers is ${n23}, ${n24}, ${n25}, the smallest numbers is`, Math.min(n23, n24, n25));

let n26 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n27 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n28 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random numbers is ${n26}, ${n27}, ${n28}, the average =`, (n26 + n27 + n28) / 3);

let n29 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n30 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n31 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(`generated random numbers is ${n29}, ${n30}, ${n31}, the absolute difference between max and min numbers is`, Math.abs(Math.max(n29, n30, n31) - Math.min(n29, n30, n31)));

console.log('example1');
let n32 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(n32);
if (n32 <= 25) return console.log('1st quarter');
else if (n32 <= 50) return console.log('2nd quarter');
else if (n32 <= 75) return console.log('3rd quarter');
else console.log('4th quarter');

console.log('example2');
let n33 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(n33);
quarter = n33 <= 25 ? console.log('1st quarter') : n33 <= 50 ? console.log('2nd quarter') : n33 <= 75 ? console.log('3rd quarter') : console.log('4th quarter');


let n34 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let n35 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(n34, n35);
if (console.log(n34 * n35 % 2 !== 0));


function rectangleArea(x, y) {
    return console.log(x * y);
}

rectangleArea(5, 4);
rectangleArea(3, 7);
rectangleArea(6, 10);

function perimetrOfRectangle(a, b) {
    return console.log(2 * (a + b));
}

perimetrOfRectangle(5, 4);
perimetrOfRectangle(3, 7);
perimetrOfRectangle(6, 10);

function squareArea(x) {
    return console.log(x * x);
}
squareArea(5);
squareArea(3);
squareArea(6);

function perimetrOfSquare(x) {
    return console.log(4 * x);
}

perimetrOfSquare(5);
perimetrOfSquare(3);
perimetrOfSquare(6);

function doubleWord(word) {
    return console.log(word + word);
}

doubleWord('Tech');
doubleWord('Global');

function firstCharacter(word) {
    return console.log(word.at(0));
}

firstCharacter('Tech');
firstCharacter('Global');


function firstTwoCharacter(word) {
    if (word.length < 2) {
        console.log(word);
    }
    else {
        console.log(word.slice(0, 2));
    }
}

firstTwoCharacter("Tech");
firstTwoCharacter("Global");
firstTwoCharacter("");
firstTwoCharacter(" ");
firstTwoCharacter("1");


function LastCharacter(word) {
    return console.log(word.slice(-1));
    }

LastCharacter("Tech");
LastCharacter("Global");
LastCharacter("");
LastCharacter(" ");
LastCharacter("123");



function LastCharacter(word) {
    return console.log(word.slice(-1));
    }

LastCharacter("Tech");
LastCharacter("Global");
LastCharacter("");
LastCharacter(" ");
LastCharacter("123");



function LastTwoCharacters(word) {
    if (word.length < 2) {
        console.log(word);
    }
    else {
    console.log(word.slice(-2));
    }
}
LastTwoCharacters("Tech");
LastTwoCharacters("Global");
LastTwoCharacters("");
LastTwoCharacters(" ");
LastTwoCharacters("1");


function firstLast(word) {
    if (word.length < 2) {
        console.log(word);
    }
    else {
        console.log(word.at(0) + word.slice(-1));
    }
}
firstLast('TechGlobal');
firstLast('');
firstLast(' ');
firstLast('1');
firstLast('abcde');


function hasFive(word) {
    return console.log((word.length >= 5));
    }

hasFive("Tech");
hasFive("Global");
hasFive('');
hasFive("12345");
hasFive("hello");

function middle(word) {
    if (word.length === 0){
        console.log(word);
        }
    else if (word.length % 2 === 0) {
        console.log(word.slice(word.length / 2 - 1, word.length / 2 + 1));
    }   
    else {
        console.log(word.at(word.length / 2));
    }
}

middle("Tech");
middle("Global");
middle('abcde');
middle("1");
middle("abc");
middle("1234");

function longer(str1, str2) {
    if (str1.length >= str2.length) {
        console.log(str1);
    }
    else {
        console.log(str2);
    }
}

longer("Tech", "Global");
longer("Hello", "Hi");
longer("Hello", "World");


function shorter(str1, str2) {
    if (str1.length < str2.length) {
        console.log(str1);
    }
    else {
        console.log(str2);
    }
}

shorter("Tech", "Global");
shorter("Hello", "Hi");
shorter("Hello", "World");


function concat(str1, str2) {
    console.log(str1+str2)
}

concat("Tech", "Global");
concat("Hello", "World");
concat("", "abc");
concat("Tech", "Global");
concat("123", "1234");

function startsWithVovel(word) {
    return console.log('AEIOUaeiou'.includes(word.at(0)));
}

startsWithVovel("Tech");
startsWithVovel("Apple");
startsWithVovel("abc");

