// 1. Write a JavaScript function to calculate the sum of two numbers. 
function sum(num1,num2){
    return num1+num2;
}

//2. Write a JavaScript function to check if a given string is a palindrome.
//3. Write a JavaScript program to reverse a given string. 
function reverseString(userString){

    let splitedString = userString.split("")
    let reverseString = [];

    for(i = splitedString.length-1; i>=0;i--){
        reverseString.push(splitedString[i])
    }

    let finalString =reverseString.join("")
    
    return finalString;
}

function CheckIfPalindrome(userString) {

    if(userString === reverseString(userString))
        return true;
    else
        return false;
    
}

//4. Write a JavaScript function that takes an array of numbers and returns a
//new array with only the even numbers. 

function onlyEven(arr){
    let onlyEven = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2 === 0 )
            onlyEven.push(arr[i])
    }

    return onlyEven;

    //The test is here
    // console.log(onlyEven([1,2,3,4,5,6,7,8]));
}


// 5. Implement a deep clone function in JavaScript that creates a copy of a
// nested object or array without any reference to the original.

//let array = [1,2,3,5,6,9,8,4,5]

function deepClone(arr) {
    let clonedArr = []
    for (let i = 0; i < arr.length; i++) {
        clonedArr.push(arr[i])
    }
    return clonedArr;
    //The test is here
    // console.log(deepClone(array));
}

//7. Implement a function to find the sum of all the numbers in an array. 

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i]
    }
    return sum;

    // The test is here
    // console.log(sumOfArray([1,2,3,5,6,9,8,4,5]));
}


// 8. Write a function that accepts a number and returns its factorial (e.g.,
//     factorial of 5 is 5 x 4 x 3 x 2 x 1).

function factorial(number) {
    let factorial =1;
    while(number>1){
        factorial = number*factorial;
        number--;
    }
    return factorial;

    // The test is here
    // console.log(factorial(5));
}

// 9. Implement a function that returns the average value of numbers in an array. 

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum / arr.length;
    // The test is here
    // console.log(average([1,2,3,5,6,9,8,4,5]));
}

// 10. Implement a function that finds the index of a specific element in an array. 
// If the element is not found, the function should return false.
function findIndex(ele,arr) {
    
    for (let i = 0; i< arr.length; i++) {
      if(arr[i] === ele)
        return i;
    }
    
    return false;
    // The test is here
    // console.log(findIndex(4,[1,2,4,5,6,9,8,4,5]));
    // console.log(findIndex(10,[1,2,3,5,6,9,8,4,5]));

    // This is the easy way of doing it
    // console.log([1,2,4,5,6,9,8,4,5].indexOf(4));
}

// 11. How would you check if a number is an integer?

function isInteger(num){
    // if(num === Math.floor(num))
    //     return true
    // else
    //     return false

    return num === Math.floor(num);

    // The test is here
    // console.log(isInteger(5.3));
    // console.log(isInteger(5));
}

// 12. Create a function that takes the age in years and returns the age in days.

function ageInDays(age) {
    return age*365;
    // The test is here
    // console.log(ageInDays(22));
}




