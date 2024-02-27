// Task-1

/*
Requirement:
Convert given Strings below to number data types and find their sum, product, division, subtraction, remainder and exponentiation.
let str1 = "5", str2 = "2";
Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25
NOTE: expected results should exactly match!!!
*/

let str1 = "5", str2 = "2";
let sum = Number(str1) + Number(str2);
let product = Number(str1) * Number(str2);
let division = Number(str1) / Number(str2);
let subtraction = Number(str1) - Number(str2);
let remainder = Number(str1) % Number(str2);
let exponentiation = Number(str1) ** Number(str2);
console.log(`The sum of ${str1} and ${str2} is =`, sum);
console.log(`The product of ${str1} and ${str2} is =`, product);
console.log(`The division of ${str1} and ${str2} is =`, division);
console.log(`The subtraction of ${str1} and ${str2} is =`, subtraction);
console.log(`The remainder of ${str1} and ${str2} is =`, remainder);
console.log(`The exponentiation of ${str1} and ${str2} is =`, exponentiation);


// Task-2

/*
Requirement:
Convert given Strings below to number data types and find the greatest and smallest values and find the average and absolute difference of them.
let s1 = "200", s2 = "-50";
Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250
NOTE: expected results should exactly match!!!
*/

let s1 = "200", s2 = "-50";
let greatest = Math.max(Number(s1), Number(s2));
let smallest = Math.min(Number(s1), Number(s2));
let average = (Number(s1) + Number(s2))/2;
let absDiff = Math.abs(Number(s1) - Number(s2));

console.log(`The greatest value is = ${greatest}`);
console.log(`The smallest value is = ${smallest}`);
console.log(`The average is = ${average}`);
console.log(`The absolute difference is = ${absDiff}`);

// Task-3

/*
Requirement:
Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included). Then, find the absolute difference of these numbers.
Test Data:5, 27
Expected Output:
The absolute difference between numbers is = 22
*/

let rNum1 = Math.floor(Math.random() * (50-1+1))+1;
let rNum2 = Math.floor(Math.random() * (50-1+1))+1;
let absDif = Math.abs(rNum1 - rNum2);

console.log (rNum1, rNum2); // Test Data
console.log(`The absolute difference between numbers is = ${absDif}`);

// Task-4

/*
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included).
Then, find the max and min of these numbers.
Test Data:3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/

let r1 = Math.floor(Math.random() * (50-1+1)) + 1;
let r2 = Math.floor(Math.random() * (50-1+1)) + 1;
let r3 = Math.floor(Math.random() * (50-1+1)) + 1;
let r4 = Math.floor(Math.random() * (50-1+1)) + 1;
let r5 = Math.floor(Math.random() * (50-1+1)) + 1;

console.log(r1, r2, r3, r4, r5); // Test Data

let rMax = Math.max(r1, r2, r3, r4, r5);
let rMin = Math.min(r1, r2, r3, r4, r5);

console.log(`The max value = ${rMax}`);
console.log(`The min value = ${rMin}`);

// Task-5

/*
Write a program that generates 3 random numbers between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/

let rand1 = Math.floor(Math.random() * (100-50+1)) + 50;
let rand2 = Math.floor(Math.random() * (100-50+1)) + 50;
let rand3 = Math.floor(Math.random() * (100-50+1)) + 50;

console.log(`The number 1 = ${rand1}
The number 2 = ${rand2}
The number 3 = ${rand3}
The sum of numbers is = ${rand1+rand2+rand3}`);

// Task-6

/*
Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) 
and find if all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.
*/

let random1 = Math.floor(Math.random() * (100-1+1)) + 1;
let random2 = Math.floor(Math.random() * (100-1+1)) + 1;
let random3 = Math.floor(Math.random() * (100-1+1)) + 1;

console.log(random1, random2, random3); // Test Data
console.log((random1 > 25) && (random2 > 25) && (random3 > 25));

// Task-7

/*
Assume you are given a name let name = "David"; 
Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them

Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/

let name = "David"; 
console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name.at(-1)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`);









// Task-1
/*
Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25

NOTE: expected results should exactly match!!
*/
let str1 = "5", str2 = "2";
let num1 = Number(str1), num2 = Number(str2)
//let num1 = parseInt(str1), num2 = parseInt(str2)
//let num1 = str1 * 1, num2 = str2 * 1

console.log(`The sum of ${num1} and ${num2} is = ${num1 + num2}`);
console.log(`The product of ${num1} and ${num2} is = ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is = ${num1 / num2}`);
console.log(`The subtraction of ${num1} and ${num2} is = ${num1 - num2}`);
console.log(`The remainder of ${num1} and ${num2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${num1} and ${num2} is = ${num1 ** num2}`);


// Task-2
/*
Requirement:
Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!
*/
console.log("\n------------Task-2------------\n");
let s1 = "200", s2 = "-50";
let n1 = Number(s1), n2 = Number(s2);

console.log(`The greatest value is = ${Math.max(num1, num2)}`)
console.log(`The smallest value is = ${Math.min(num1, num2)}`)
console.log(`The average is = ${(num1 + num2) / 2}`)
console.log(`The absolute difference is = ${Math.abs(num1 - num2)}`)


// Task-3
/*
Requirement:
Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included)
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22
*/
console.log("\n------------Task-3------------\n");

let rand1 = Math.ceil(Math.random() * 50);
let rand2 = Math.ceil(Math.random() * 50);

console.log(rand1)
console.log(rand2)

console.log(`The absolute difference between numbers is = ${Math.abs(rand1 - rand2)}`)


// Task-4
/*
Requirement:
Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included)
 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/
console.log("\n------------Task-4------------\n");


let randNum3 = Math.ceil(Math.random() * 50);
let randNum4 = Math.ceil(Math.random() * 50);
let randNum5 = Math.ceil(Math.random() * 50);
let randNum6 = Math.ceil(Math.random() * 50);
let randNum7 = Math.ceil(Math.random() * 50);

console.log(`The max value = ${Math.max(randNum3, randNum4, randNum5, randNum6, randNum7)}`);
console.log(`The min value = ${Math.min(randNum3, randNum4, randNum5, randNum6, randNum7)}`);


// Task-5
/*
Requirement:
Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/
console.log("\n------------Task-5------------\n");

let randNum8 = (Math.floor(Math.random() * 51) + 50); 
let randNum9 = (Math.floor(Math.random() * 51) + 50); 
let randNum10 = (Math.floor(Math.random() * 51) + 50); 

console.log(`The number 1 = ${randNum8}`);
console.log(`The number 2 = ${randNum9}`);
console.log(`The number 3 = ${randNum10}`);
console.log(`The sum of numbers is = ${randNum8 + randNum9 + randNum10}`);


// Task-6
/*
Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25.
*/
console.log("\n------------Task-6------------\n");

let randomNum1 = Math.ceil(Math.random() * 100);
let randomNum2 = Math.ceil(Math.random() * 100);
let randomNum3 = Math.ceil(Math.random() * 100);

console.log(randomNum1 > 25 && randomNum2 > 25 && randomNum3 > 25);



// Task-7
/*
Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/
console.log("\n------------Task-7------------\n");

let name = "David";

console.log(`The length of the name is = ${name.length}`)
console.log(`The first character in the name is = ${name[0]}`)
console.log(`The last character in the name is = ${name[name.length - 1]}`)
console.log(`The first 3 characters in the name are = ${name.slice(0,3)}`)

console.log(`The last 3 characters in the name are = ${name.slice(name.length - 3)}`)



// Task-1
/*
Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25

NOTE: expected results should exactly match!!
*/
let str1 = "5", str2 = "2";
let num1 = Number(str1), num2 = Number(str2)
//let num1 = parseInt(str1), num2 = parseInt(str2)
//let num1 = str1 * 1, num2 = str2 * 1

console.log(`The sum of ${num1} and ${num2} is = ${num1 + num2}`);
console.log(`The product of ${num1} and ${num2} is = ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is = ${num1 / num2}`);
console.log(`The subtraction of ${num1} and ${num2} is = ${num1 - num2}`);
console.log(`The remainder of ${num1} and ${num2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${num1} and ${num2} is = ${num1 ** num2}`);


// Task-2
/*
Requirement:
Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!
*/
console.log("\n------------Task-2------------\n");
let s1 = "200", s2 = "-50";
let n1 = Number(s1), n2 = Number(s2);

console.log(`The greatest value is = ${Math.max(num1, num2)}`)
console.log(`The smallest value is = ${Math.min(num1, num2)}`)
console.log(`The average is = ${(num1 + num2) / 2}`)
console.log(`The absolute difference is = ${Math.abs(num1 - num2)}`)


// Task-3
/*
Requirement:
Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included)
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22
*/
console.log("\n------------Task-3------------\n");

let rand1 = Math.ceil(Math.random() * 50);
let rand2 = Math.ceil(Math.random() * 50);

console.log(rand1)
console.log(rand2)

console.log(`The absolute difference between numbers is = ${Math.abs(rand1 - rand2)}`)


// Task-4
/*
Requirement:
Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included)
 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/
console.log("\n------------Task-4------------\n");


let randNum3 = Math.ceil(Math.random() * 50);
let randNum4 = Math.ceil(Math.random() * 50);
let randNum5 = Math.ceil(Math.random() * 50);
let randNum6 = Math.ceil(Math.random() * 50);
let randNum7 = Math.ceil(Math.random() * 50);

console.log(`The max value = ${Math.max(randNum3, randNum4, randNum5, randNum6, randNum7)}`);
console.log(`The min value = ${Math.min(randNum3, randNum4, randNum5, randNum6, randNum7)}`);


// Task-5
/*
Requirement:
Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/
console.log("\n------------Task-5------------\n");

let randNum8 = (Math.floor(Math.random() * 51) + 50); 
let randNum9 = (Math.floor(Math.random() * 51) + 50); 
let randNum10 = (Math.floor(Math.random() * 51) + 50); 

console.log(`The number 1 = ${randNum8}`);
console.log(`The number 2 = ${randNum9}`);
console.log(`The number 3 = ${randNum10}`);
console.log(`The sum of numbers is = ${randNum8 + randNum9 + randNum10}`);


// Task-6
/*
Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25.
*/
console.log("\n------------Task-6------------\n");

let randomNum1 = Math.ceil(Math.random() * 100);
let randomNum2 = Math.ceil(Math.random() * 100);
let randomNum3 = Math.ceil(Math.random() * 100);

console.log(randomNum1 > 25 && randomNum2 > 25 && randomNum3 > 25);



// Task-7
/*
Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/
console.log("\n------------Task-7------------\n");

let name = "David";

console.log(`The length of the name is = ${name.length}`)
console.log(`The first character in the name is = ${name[0]}`)
console.log(`The last character in the name is = ${name[name.length - 1]}`)
console.log(`The first 3 characters in the name are = ${name.slice(0,3)}`)

console.log(`The last 3 characters in the name are = ${name.slice(name.length - 3)}`)

