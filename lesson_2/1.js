// 1 Объясните почему код даёт именно такие результаты?
// let a = 1, b = 1, c, d;
// c = ++a;
// alert(c); // 2
// d = b++;
// alert(d); // 1
// c = 2 + ++a;
// alert(c); // 5
// d = 2 + b++;
// alert(d); // 4
// alert(a); // 3
// alert(b); // 3

// c = ++a; - ++ - инкремент, прибавляет к предыдущему значению 1. в данном случае он префиксный, т.е. сначала к
// переменной а прибавляется 1, а потом это значение записывается в переменную с
// d = b++; - ++ - инкремент, прибавляет к предыдущему значению 1. в данном случае он постфиксный, т.е. сначала значение
// а записывается в переменную d, а потом к переменной а прибавляется 1
// c = 2 + ++a; - значение переменной а после операции c = ++a равно 2. затем снова применяется префиксный инкремент и
// далее к этому значению прибавляется 2
// d = 2 + b++; - сначала к переменной b, которая после операции d = b++ равна 2 прибавляется 2 и записывается в
// переменную d, а потом к переменной b прибавляется 1 постфиксным инкрементом
// a = 3 - выполнялись 2 операции с префиксным инкрементом
// b = 3 - выполнялись 2 операции с постфиксным инкрементом