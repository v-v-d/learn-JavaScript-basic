// 5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости
// от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.

/**
 * Make one of the arithmetic operations with passed arguments depending on the passed operation value.
 * @param {number} arg1 1st operand
 * @param {number} arg2 2nd operand
 * @param {string} operation The name of the operation
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
        case 'сложение':
        case 'Сложение':
        case 'addition':
        case 'Addition':
            return myAddition(arg1, arg2);
        case '-':
        case 'вычитание':
        case 'Вычитание':
        case 'subtraction':
        case 'Subtraction':
            return mySubtraction(arg1, arg2);
        case '/':
        case ':':
        case 'деление':
        case 'Деление':
        case 'division':
        case 'Division':
            return myDivision(arg1, arg2);
        case '*':
        case 'умножение':
        case 'Умножение':
        case 'multiplication':
        case 'Multiplication':
            return myMultiplication(arg1, arg2);
    }
}

let numb1 = getRandInt(-100, 100);
let numb2 = getRandInt(-100, 100);

console.log(mathOperation(numb1, numb2, '+'));
console.log(mathOperation(numb1, numb2, 'вычитание'));
console.log(mathOperation(numb1, numb2, ':'));
console.log(mathOperation(numb1, numb2, 'Multiplication'));