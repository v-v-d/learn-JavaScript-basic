'use strict';

// Программа спрашивает у пользователя температуру в градусах по Цельсию (используем prompt чтобы ее получить).
// Используя alert программа выводит данную температуру в градусах по Фаренгейту.
// Подсказка, расчёт идёт по формуле:
// Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию.

let tempC = parseFloat(prompt('Input celsius temperature:'));
let tempF = (9 / 5) * tempC + 32;

alert(`Fahrenheit temperature is ${tempF.toFixed(2)}`);