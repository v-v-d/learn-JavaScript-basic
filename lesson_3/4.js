// 4*. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
// (можно без оптимизаций).
'use strict';

function isPrimeNumber(num) {
    for (let i = 2; i <= Math.round(num ** 0.5 + 1.2); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function getPrimeNumber(toNumber) {
    if (toNumber <= 1) {
        return
    }

    if (toNumber === 2) {
        console.log(2);
        return;
    }

    console.log(2);
    console.log(3);

    for (let i = 5; i <= toNumber; i++) {
        if (isPrimeNumber(i)) {
            console.log(i)
        }
    }
}

getPrimeNumber(100);