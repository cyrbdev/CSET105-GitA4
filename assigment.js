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
function string(){
    let result = 'I am a student';
    let finaltext = '';
    for (let i = 0; i < result.length; i++){
        let code = result.charCodeAt(i);
        if (code >= 97 && code <= 122){
            let upperCode = code - 32;
            let upperleter = String.fromCharCode(upperCode);
            finaltext = finaltext + upperleter;
        }
        else{
            finaltext = finaltext + result[i];
        }
    }
    return finaltext;
}
console.log(string());

// Exercise 4 :v
function invertCase(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        if (letter === letter.toUpperCase()) {
            result = result + letter.toLowerCase();
        } else {
            result = result + letter.toUpperCase();
        }
    }
    return result;
}
console.log(invertCase("BanANa"));