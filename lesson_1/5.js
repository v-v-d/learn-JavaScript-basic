'use strict';

// Пользователь, с помощью команды prompt, вводит номер билета - 6 цифр. Программа определяет является ли счастливым
// данный билетик и выводит соответстующее сообщение в консоль. Счастливый билет - билет, у которого сумма первых трех
// цифр равна сумме последних трех цифр номера билета.
// Для выполнения задания необходимо использовать оператор % и ветвление.
// Чтобы сравнить два значения, можно использовать if и else (курс основ программирования), например:

// ```
// const a = 1;
// const b = 1;
// if (a === b) {
//   console.log('Две переменные a и b равны.');
// }
// ```

let ticketNumber = parseInt(prompt('Input ticket number:'));

let ticketNumberSum1 = null;
let ticketNumberSum2 = null;

while (ticketNumber) {
    if (ticketNumber.toString().length > 3) {
        ticketNumberSum2 += ticketNumber % 10;
        ticketNumber -= ticketNumber % 10;
        ticketNumber /= 10;
    } else {
        ticketNumberSum1 += ticketNumber % 10;
        ticketNumber -= ticketNumber % 10;
        ticketNumber /= 10;
    }
}

if (ticketNumberSum1 === ticketNumberSum2) {
    console.log('Билет счастливый')
} else {
    console.log('Билет не счастливый')
}