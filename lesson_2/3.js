// 3 Объявить две переменные a и b и задать им целочисленные произвольные начальные
// значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным
// числом);
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;
'use strict';

/**
 * Get random integer ranging from a min number to max number
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let a = getRandInt(-100, 100);
let b = getRandInt(-100, 100);

if (a >= 0 && b >= 0) {
    console.log(a - b)
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
    console.log(a + b)
}