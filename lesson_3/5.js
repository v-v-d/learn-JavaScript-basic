// 5*. Дан массив (создать такой же, с такими же значениями):
// ```
// const arr = [
// [2, 4, 6],
// [1, 5, 10],
// [7, 4, 1],
// ];
// ```
// Задания:
// 1 Найти массив, у которого сумма всех чисел максимальна, вывести в console.log
// индекс этого массива.
// 2 Получить и вывести в console.log минимальное значение найденное в массиве,
// который мы получили в первом пункте.
'use strict';

const arr = [
  [2, 4, 6],
  [1, 5, 10],
  [7, 4, 1],
];

console.log(arr);

let maxSum = 0;
let maxAmountArr;

for (let i = 0; i < arr.length; i++) {
  let arrSum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    arrSum += arr[i][j]
  }
  if (arrSum > maxSum) {
    maxSum = arrSum;
    maxAmountArr = i;
  }
}

console.log(`Максимальная сумма чисел равная ${maxSum} у массива ${arr[maxAmountArr]}`);

let minNum = arr[maxAmountArr][0];

for (let i = 0; i < arr[maxAmountArr].length; i++) {
  if (arr[maxAmountArr][i] < minNum) {
    minNum = arr[maxAmountArr][i]
  }
}

console.log(`Минимальное значение в массиве ${arr[maxAmountArr]} это ${minNum}`);