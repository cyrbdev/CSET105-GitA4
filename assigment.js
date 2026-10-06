const prompt = require('prompt-sync')();
// Code starts here
// First Exercise :v
function number(...num){
    let max = num[0];
    for (let i = 0; i < num.length; i++){
        if (num[i] > max){
            max = num[i];
        } 
    }
    return max;
}
console.log(number(12, 45, 4, 5));

// Second Exercise :v

let userInput = prompt('Enter a number: ');

function invert(){
    if (userInput[0] === '-'){
        userInput = userInput.slice(1);
        inv = userInput.split('').reverse().join('')
        inv = '-' + inv;
    }
    else{
        inv = userInput.split('').reverse().join('')
    }
    
    return inv;
}
console.log(invert());

// Exercise 3 :v
function string(upper){
    
}