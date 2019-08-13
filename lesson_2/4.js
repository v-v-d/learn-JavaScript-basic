// 4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами.
// Обязательно использовать оператор return.
'use strict';

/**
 * Adds the num1 and num2
 * @param {number} num1 1st operand
 * @param {number} num2 2nd operand
 * @returns {number}
 */
function myAddition(num1, num2) {
    return num1 + num2
}

/**
 * Subtracts num1 from num2
 * @param {number} num1 1st operand
 * @param {number} num2 2nd operand
 * @returns {number}
 */
function mySubtraction(num1, num2) {
    return num1 - num2
}

/**
 * Divides the num1 by the num2
 * @param {number} num1 1st operand
 * @param {number} num2 2nd operand
 * @returns {number}
 */
function myDivision(num1, num2) {
    return num1 / num2
}

/**
 * Multiplies the num1 by the num2
 * @param {number} num1 1st operand
 * @param {number} num2 2nd operand
 * @returns {number}
 */
function myMultiplication(num1, num2) {
    return num1 * num2
}

let number1 = getRandInt(-100, 100);
let number2 = getRandInt(-100, 100);

let smthng1 = myAddition(number1, number2);
let smthng2 = mySubtraction(number1, number2);
let smthng3 = myDivision(number1, number2);
let smthng4 = myMultiplication(number1, number2);

console.log(smthng1, smthng2, smthng3, smthng4);