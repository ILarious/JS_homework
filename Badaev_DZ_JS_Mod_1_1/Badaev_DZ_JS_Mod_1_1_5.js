"use strict"
//////////TASK_1///////TASK_1///////TASK_1///////TASK_1///////TASK_1///////////
// Написать функцию возведения числа в степень.

// function exp_num(num, exp) {
//     if (exp != 1) {
//         return num *= exp_num(num, exp - 1);
//     }
//     else {
//         return num;
//     }
// }
// alert(exp_num(prompt('Введите число, которое нужно возвести в степень'),
//         prompt('Введите сстепень возведения числа')));



//////////TASK_2///////TASK_2///////TASK_2///////TASK_2///////TASK_2///////////
// Написать функцию поиска наибольшего общего делителя.

// function gcd(x1, x2) {
//     x1 > x2 || ([x1, x2] = [x2, x1]);
//   let length = x2/2, count = 1;
//   for (let i = 2; i <= length; ) {
//       if(!(x2 % i) && !(x1 % i) ) {
//       x2 /= i;
//       x1 /= i;
//       count *= i;
//       }
//       else i++
//   }
//   return count
// }
// alert(`Наибольший общий делитель равен: ` +
//     `${gcd(+prompt('Введите первое число'),
//     +prompt('Введите второе число'))}`);



//////////TASK_3///////TASK_3///////TASK_3///////TASK_3///////TASK_3///////////
// Написать функцию для поиска максимальной цифры в числе.

// function maxDigit(num, digit = 0) {
//     num = String(num);
//     return num.length > 1 ?
//         maxDigit(num.slice(1), Math.max(num[0], digit)) :
//         +Math.max(num[0], digit);
// }
// alert(`Маскмильная цифра в числе: ${maxDigit(+prompt('Введите число'))}`);



//////////TASK_4///////TASK_4///////TASK_4///////TASK_4///////TASK_4///////////
// Написать функцию, которая определяет простое ли переданное число.

// function isPrime(num, divider ) {
//     divider = divider || Math.floor(num / 2);
//     return num % divider == 0 ? false :
//         divider == 2 ? true : isPrime(num,  divider - 1);
// }
// if(isPrime(+prompt('Введите число'))) {
//     alert(`Число простое`);
// }
// else {
//     alert(`Число не простое`);
// }



//////////TASK_5///////TASK_5///////TASK_5///////TASK_5///////TASK_5///////////
// Написать функцию для вывода всех множителей переданного числа в возрастающем
// порядке. Например: число 18 – множители 2 * 3 * 3.

// function factors(num, arr = [],  divider= 2) {
//   if (divider > Math.sqrt(num)) {
//     arr.push(num);
//     return arr;
//   }
//   else if (num % divider == 0) {
//     arr.push(divider);
//     factors(num / divider, arr, divider);
//   }
//   else {
//     factors(num, arr, ++divider);
//   }
//   return arr.join("*");
// }
// alert(`Множители числа: ${factors(+prompt('Введите число'))}`);



//////////TASK_6///////TASK_6///////TASK_6///////TASK_6///////TASK_6///////////
// Написать функцию, которая возвращает число Фибоначчи по переданному
// порядковому номеру. Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается
// на том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8.

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// alert(fib(+prompt('Введите порядковый номер числа Фибоначчи')));