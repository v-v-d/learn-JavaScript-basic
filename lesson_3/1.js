// 1 С помощью цикла do…while написать алгоритм для вывода чисел от 0 до 10
// включительно, чтобы результат выглядел так:
// ```
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
// ```
'use strict';

let i = 0;
do {
    let condition = 'нечетное число';

    if (i === 0) {
        condition = 'это ноль'
    } else if (i % 2 === 0) {
        condition = 'четное число'
    }

    console.log(`${i} - ${condition}`);

    i++;
} while (i <= 10);