// 1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//  - единицы (в свойстве firstDigit)
//  - десятки (в свойстве secondDigit)
//  - сотни (в свойстве thirdDigit)
// Например, для числа 45 мы должны получить следующий объект:
//
// ```
// {
//   firstDigit: 5,
//   secondDigit: 4,
//   thirdDigit: 0,
// }
// ```
//
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
'use strict';

/**
 * Сonverts input number to object where property is a digit number
 * @param {string} num Number from 0 to set into function value
 * @return {object} Object from number
 */
function getObjFromNum(num) {
  const objFromNum = {};

  let namesOfDigits = ['first', 'second', 'third'];
  let maxNumLen = namesOfDigits.length;

  if (parseInt(num) == num && num.length <= maxNumLen) {
    for (let i = 1; i < maxNumLen + 1; i++) {
      if (num[num.length - i]) {
        objFromNum[namesOfDigits[i - 1] + 'Digit'] = parseInt(num[num.length - i])
      } else {
        objFromNum[namesOfDigits[i - 1] + 'Digit'] = 0
      }
    }
  } else {
    console.log(`Переданное число вне диапазона [0, ${10**maxNumLen - 1}], не целое число или вообще не число`)
  }

  return objFromNum
}

let userNum = prompt('Введите число в диапазоне [0, 999]: ');

getObjFromNum(userNum);