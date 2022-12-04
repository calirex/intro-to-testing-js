// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    return `Hello, ${input}!`;
}

// isFive function
function isFive(input){
    return input === 5;
}

// isEven function
function isEven(input) {
    return input % 2 == 0;
}

// isVowel function
function isVowel(input) {
    if (typeof input !== 'string') {
        return false;
    } else if (input.toLowerCase() === "a" ||
        input.toLowerCase() === "e" ||
        input.toLowerCase() === "i" ||
        input.toLowerCase() === "o" ||
        input.toLowerCase() === "u") {
        return true;
    } else {
        return false;
    }
}

// add function
function add(input1, input2) {
    if (isNaN(input1) || isNaN(input2)) {
        return NaN;
    } else {
        return Number(input1) + Number(input2);
    }
}


// function add(input1, input2) {
//     if (Number(input1) === false || Number(input1) === false) {
//         return NaN;
//     } else {
//         return Number(input1) + Number(input2);
//     }
// }