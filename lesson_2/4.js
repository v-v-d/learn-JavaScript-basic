// 4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами.
// Обязательно использовать оператор return.
'use strict';

/**
 * Adds the num1 and num2
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function myAddition(num1, num2) {
    return num1 + num2
}

/**
 * Subtracts num1 from num2
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function mySubtraction(num1, num2) {
    return num1 - num2
}

/**
 * Divides the num1 by the num2
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function myDivision(num1, num2) {
    return num1 / num2
}

/**
 * Multiplies the num1 by the num2
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function myMultiplication(num1, num2) {
    return num1 * num2
}

let smthng1 = myAddition(10, 20);
let smthng2 = mySubtraction(10, 20);
let smthng3 = myDivision(10, 20);
let smthng4 = myMultiplication(10, 20);

console.log(smthng1, smthng2, smthng3, smthng4);