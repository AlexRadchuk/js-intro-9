
console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 1');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-1
Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.

noSpace("")                 ->  ""
noSpace("Javascript")       ->  "Javascript"
noSpace("    Hello   ")     -> "Hello"
noSpace(" Hello World   ")  -> "HelloWorld"
noSpace("Tech Global")      -> "TechGlobal"
*/



const noSpace = (string) => string.trim().split(' ').join('');

console.log(noSpace(""));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global"));


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 2');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-2
Write a function named replaceFirstLast() which takes a string argument and returns
a new string with the first and last characters replaced.
    NOTE: If the length is less than 2, return an empty string.
    NOTE: Ignore extra spaces before and after the string.

replaceFirstLast("")                ->  ""
replaceFirstLast("Hello")           ->  "oellH"
replaceFirstLast("Tech Global")     -> "lech GlobaT"
replaceFirstLast("A")               -> ""
replaceFirstLast("    A      ")     -> ""
*/

const replaceFirstLast = (string) => string.trim().length < 2 ? '' : string.slice(-1) + string.slice(1, -1) + string.slice(0, 1);

console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      "));


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 3');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-3
Write a function named hasVowel() which takes a string argument and returns
true if the string has a vowel, returns false if the string doesn't contain any vowel letter.
    NOTE: Vowels are = a, e, o, u, i.
    NOTE: Ignore upper/lower cases.
*/

const hasVowel = (string) => string.toLowerCase().split('').filter(letter => 'aeoui'.includes(letter)).length > 0;

console.log(hasVowel(""));
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 4');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-4
Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth and returns
a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED""
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
    NOTE: Consider someone born in 2013 is 10 years old as of 2023.
*/

let Year = new Date().getFullYear();
const checkAge = (number) => Year - number > 120 || Year - number < 0 ? 'AGE IS NOT VALID' : Year - number < 16 ? 'AGE IS NOT ALLOWED' : 'AGE IS ALLOWED';


console.log(checkAge(2015));   // -> "AGE IS NOT ALLOWED"
console.log(checkAge(2007));   // -> "AGE IS ALLOWED"
console.log(checkAge(2050));   // -> "AGE IS NOT VALID"
console.log(checkAge(1920));   // -> "AGE IS ALLOWED"
console.log(checkAge(1800));   // -> "AGE IS NOT VALID"

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 5');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-5
Write a function named averageOfEdges() which takes three number arguments and will return 
average of min and max numbers​.

averageOfEdges(0, 0, 0)         -> 0
averageOfEdges(0, 0, 6)         -> 3
averageOfEdges(-2, -2, 10)      -> 4
averageOfEdges(-3, 15, -3)      -> 6
averageOfEdges(10, 13, 20)      -> 15
*/

const averageOfEdges = (n1, n2, n3) => ((Math.max(n1, n2, n3) + Math.min(n1, n2, n3)) / 2);

console.log(averageOfEdges(0, 0, 0));         //      -> 0
console.log(averageOfEdges(0, 0, 6));         //      -> 3
console.log(averageOfEdges(-2, -2, 10));      //      -> 4
console.log(averageOfEdges(-3, 15, -3));      //      -> 6
console.log(averageOfEdges(10, 13, 20));     //      -> 15




console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 6');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-6
Write a function named noA() which takes an array of strings as argument and will return 
a new array with all elements starting with "A" or "a" replaced with "###".

noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])   -> ["###", "###", "###", "###", "###"]
*/

const noA = (array) => array.map(string => string.toUpperCase().startsWith('A') ? '###' : string);

console.log(noA(["javascript", "hello", "123", "xyz"])); //	->  ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])); //	->  ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));  // -> ["###", "###", "###", "###", "###"]

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 7');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-7
Write a function named no3and5() which takes an array of integer numbers as argument and will return 
a new array with elements replaced by conditions below.
    If element can be divided by 5, replace it with 99
    If element can be divided by 3, replace it with 100
    If element can be divided by both 3 and 5, replace it with 101

no3and5([7, 4, 11, 23, 17])         -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])               -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])   -> [99, 11, 100, 13, 14, 101]
*/


const no3and5 = (array) => array.map(number => number % 5 === 0 && number % 3 === 0 ? 101 : number % 5 === 0 ? 99 : number % 3 === 0 ? 100 : number);

console.log(no3and5([7, 4, 11, 23, 17]));       //   -> [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6]));             //   -> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); //   -> [99, 11, 100, 13, 14, 101]

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 8');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-8
Write a function named countPrimes() which takes an array of integer numbers as argument and will return 
the number of the prime numbers in the given array.
    NOTE: Prime number is a number that can be divided only by 1 and itself​.
    NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.
    NOTE: Smallest prime number is 2.

countPrimes([-10, -3, 0, 1])        -> 0
countPrimes([7, 4, 11, 23, 17])     -> 4
countPrimes([41, 53, 19, 47, 67])   -> 5
*/

const countPrimes = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 2) continue;
        if (array[i] === 2 || array[i] === 3 || array[i] === 5 || array[i] === 7) sum++;
        if (array[i] % 2 === 0 || array[i] % 3 === 0 || array[i] % 5 === 0 || array[i] % 7 === 0) continue;
        sum++;
    }
    return sum
}

console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));


console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 9');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-9
Write a function named removeDuplicates() which takes an array argument and returns 
a new array with all the duplicates removed.

removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])              -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3])                               -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])                           -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])     -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])                     -> ["1", "2", "3"]
*/

const removeDuplicates = (array) => {
    const noDuplicatesArray = [];
    for (const value of array) {
        if (!noDuplicatesArray.includes(value)) noDuplicatesArray.push(value)
    }
    return noDuplicatesArray;
}


console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));            //              -> [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3]));                             //              -> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1]));                         //              -> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));   //              -> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));                   //              -> ["1", "2", "3"]

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 10');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-10
Write a method named isDateFormatValid() that takes a string as an argument and returns 
true if the given date is valid or returns false otherwise.
    Expected Format: nn/nn/nnnn
    So, it must be presented as <2digits>/<2digits>/<4digits>

isDateFormatValid("")                   -> false
isDateFormatValid("15/30/2020")         -> false
isDateFormatValid("10-30-2020 ")        -> false
isDateFormatValid("10.30.2020")         -> false
isDateFormatValid("5/30/2020")          -> false
isDateFormatValid("05/30/2020 ")        -> true
isDateFormatValid("10/2/2020")          -> false
isDateFormatValid("10/02/2020 ")        -> true
*/



const isDateFormatValid = (string) => {
    if (!string.includes('/') && string.length !== 10) return false;
    const [month, day, year] = string.trim().split('/');
    if (month > 12 || day > 31) return false;
    if (month.length !== 2 || day.length !== 2 || year.length !== 4) return false;
    return true;
}


console.log(isDateFormatValid("")); //                   -> false
console.log(isDateFormatValid("15/30/2020")); //         -> false
console.log(isDateFormatValid("10-30-2020 ")); //        -> false
console.log(isDateFormatValid("10.30.2020")); //         -> false
console.log(isDateFormatValid("5/30/2020")); //          -> false
console.log(isDateFormatValid("05/30/2020 ")); //        -> true
console.log(isDateFormatValid("10/2/2020")); //          -> false
console.log(isDateFormatValid("10/02/2020 ")); //        -> true



console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 11');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-11 (try doing with 1 loop and w/out sort method)
Write a method named secondMax() takes an array argument and returns the second max number from the array.
    NOTE: Assume that you will not be given empty array and if the array has only 1 element, 
    it will be returned as second max number.
    NOTE: Be careful when there is multiple max numbers.

secondMax([7, 4, 4, 4, 23, 23, 23])     -> 7
secondMax([3, 4, 5, 6])                 -> 5
secondMax([10])                         -> 10
*/

const secondMax = (array) => {
    if (array.length === 1) return array[0]
    return Math.max(...array.filter(num => num !== Math.max(...array)));
}


console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); //     -> 7
console.log(secondMax([3, 4, 5, 6])); //                 -> 5
console.log(secondMax([10])); //                         -> 10

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 12');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-12 (try doing with 1 loop and w/out sort method)
Write a method named secondMin() takes an array argument and returns the second min number from the array.
    NOTE: Assume that you will not be given empty array and if the array has only 1 element, 
    it will be returned as second min number.
    NOTE: Be careful when there is multiple min numbers.

secondMax([7, 4, 4, 4, 23, 23, 23])     -> 7
secondMax([3, 4, 5, 6])                 -> 4
secondMax([10])                         -> 10
*/

const secondMin = (array) => array.length === 1 ? array[0] : Math.min(...array.filter(num => num !== Math.min(...array)));



console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); //     -> 7
console.log(secondMin([3, 4, 5, 6])); //                 -> 5
console.log(secondMin([10])); //                         -> 10

console.log('\n-------------------------------------------------------------------------------\n');
console.log('Task - 13');
console.log('\n-------------------------------------------------------------------------------\n');

/* Task-13
Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.
    NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.

mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])                               -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])   -> "pen"
mostRepeated([10])                                                      -> 10
mostRepeated(["TechGlobal"])                                            -> "TechGlobal"
*/


const mostRepeated = (array) => {
    let counter = 0;
    let maxRepeated;
    if (array.length === 1) return array[0];
    for (i = 0; i < array.length; i++) {
        let counter2 = 0;
        for (j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) counter2++;
            if (counter2 > counter) counter = counter2
            maxRepeated = array[i];
        }
        return maxRepeated;
    }
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));                              //   -> 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));  //   -> "pen"
console.log(mostRepeated([10]));                                                     //   -> 10
console.log(mostRepeated(["TechGlobal"]));                                           //   -> "TechGlobal"
