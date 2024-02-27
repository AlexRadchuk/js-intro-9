let var1 = 5;
let var2 = '5';
let var3 = 'five';
let var4 = true;
let var5 = null;
let var6 = undefined;

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);
console.log(typeof var6);


console.log(var1 * var3);
console.log(var1 * var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);


console.log(typeof var3);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);
console.log(typeof var6);


console.log(isNaN(var1)); //false
console.log(isNaN(var2)); //true
console.log(isNaN(var1*var2)); //false
console.log(isNaN(var1)); //false
console.log(isNaN(var4)); //true
console.log(isNaN(var1*var2)); //false
console.log(isNaN(var1)); //false
console.log(isNaN(var2)); //true
console.log(isNaN(var1*var2)); //false

