// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.

// function reverseString(str){
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("abcd"));



// Count Characters: Create a function that counts the number of characters in a string.

// function countChar(str){
//   return str.length;
// }
// console.log(countChar("Hello there"));



// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

// function capitalizeWords(str){
//   str=str.split(" ");
//   for(let i=0;i<str.length;i++){
//     str[i]= str[i][0].toUpperCase()+ str[i].slice(1);
//   }
//   return str.join(" ")
// }
// console.log(capitalizeWords("go my code"));





// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

// function maxMin(arr){
//   return `Maximum: ${Math.max(...arr)} Minimum: ${Math.min(...arr)}`;
// }
// console.log(maxMin([56,5,8,123,79,1]));



// Sum of Array: Create a function that calculates the sum of all elements in an array.

// function sumArray(arr){
//   let sum=0;
//   for(let i=0; i<arr.length;i++){
//     sum+=arr[i];
//   }
//   return sum;
// }
// console.log(sumArray([1,2,3]))



// Filter Array: Implement a function that filters out elements from an array based on a given condition.

// function filterArray(arr, condition){
//   return arr.filter(condition);
// }
// console.log(filterArray([1,-2,0,9,10,2,48,3], i=>i>5))




// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.

// function factorial(num){
//   let fact = 1
//   for(let i=num;i>=1;i--){
//     fact*=i;
//   }
//   return fact;
// }
// console.log(factorial(4))



// Prime Number Check: Create a function to check if a number is prime or not.

// function checkPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   if (num === 2) {
//     return true;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkPrime(2));



// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

// function Fibonacci(n){
//   if (n===0){
//     return 0 ;
//   }
//   else{
//     let x=0;
//     let y=1 ;
//     for(let i=1;i<n;i++){
//       let z = x + y;
//       x=y;
//       y=z;
//     }
//     return y;
//   }
// }
// console.log(Fibonacci(10))