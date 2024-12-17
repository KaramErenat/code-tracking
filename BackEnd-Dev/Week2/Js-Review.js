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


// let array = [1,2,3,5,6,9,8,4,5]

// function deepClone(arr) {
//     let clonedArr = []
//     for (let i = 0; i < arr.length; i++) {
//         clonedArr.push(arr[i])
//     }
//     return clonedArr;
// }

// console.log(deepClone(array));

