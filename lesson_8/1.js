// 1. Для практикума из занятия 7 продумать, где можно применить замыкания.
// Можно обернуть всё в замыкающую функцию, которая вернет объект, в котором будет метод init объекта game, который
// необходим для переопределения параметров игры

// 2. Не выполняя кода, ответить, что выведет браузер и почему:

// if (!("a" in window)) {
//     var a = 1;
// }
// alert(a);

// var b = function a(x) {
//     x && a(--x);
// };
// alert(a);

// function a(x) {
//     return x * 2;
// }
// var a;
// alert(a);

// function b(x, y, a) {
//     arguments[2] = 10;
//     alert(a);
// }
// b(1, 2, 3);

// function a() {
//     alert(this);
// }
// a.call(null);

//2.1 Переменная a объявлена через var, она попадает в объект document. Значение переменной пока не присовено, поэтому
// вернется undefined

//2.2 undefined, т.к. в алерт передана просто ссылка на функцию a

//2.3 undefined, т.к. сначала была объявлена функция а, потом объявлена переменная а, но ей еще не присовено значение
//UPD алерт выдаст описнаие функции a, а после вернется undefined

//2.4 Алерт выдаст 3, т.к. функция b принимает 3 аргумента, 3ий аргемент называется a, функция отображает через alert
// этот аргумент. С другой стороны в функции меняется 3ий элемент массива arguments на 10, но этот массив не объявлен,
// так что скорее всего вызов этой функции вернет сообщение о том, что массив arguments не объявлен.
//UPD Алерт отобразит 10, т.к. arguments это объект в области вилимости функции, с помощью которого можно обращаться
// к аргументам и менять их значения.

//2.5 Вернется null, т.к. при вызове функции a используется метод call, в который передается null и call подменяет this.
//UPD Алерт отобразит объект window, т.к. метод call попытается подменить this, но т.к. мы передаем в него null у него
// ничего не получается, т.к. у null нету this