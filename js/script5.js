"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello');
console.log(num);


function calc(a, b) {
    return(a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 7));


const logger = function() {
    console.log('Helloee');
};

logger();

const calc = (a, b) => { return a + b };

const calc = (a, b) => { 
    console.log('1');
    return a + b;
};