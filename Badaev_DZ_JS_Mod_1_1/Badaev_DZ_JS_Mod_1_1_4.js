"use strict"
//////////TASK_1///////TASK_1///////TASK_1///////TASK_1///////TASK_1///////////
// Написать функцию, которая принимает 2 числа и возврщает -1, если первое
// меньше, чем второе; 1 – если первое больше, чем второе;
// 0 – если числа равны

// let num1 = +prompt();
//         let num2 = +prompt();
//         compare()
//         function compare() {
//             if (num1 > num2) {
//                 alert(1);
//             }
//             else if (num1 < num2) {
//                 alert(-1);
//             }
//             else if (num1 == num2) {
//                 alert(0);
//             }
//         }



//////////TASK_2///////TASK_2///////TASK_2///////TASK_2///////TASK_2///////////
// писать функцию, которая вычисляет факториал переданного ей числа

// let num = +prompt('Введите число, факториал которого хотите узнать.');
// function factorial(num) {
//     return (num != 1) ? num * factorial(num - 1) : 1;
// }
// alert(`${num}! = ${factorial(num)}.`);



//////////TASK_3///////TASK_3///////TASK_3///////TASK_3///////TASK_3///////////
// Написать функцию, которая принимает три отдельные цифры и превращает их в
// одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// let numBig = [];
// function addNum() {
//     for (let i = 0; i < 3; i++) {
//         let num = prompt();
//         numBig += num;
//     }
//     alert(numBig);
// }
// addNum();



//////////TASK_4///////TASK_4///////TASK_4///////TASK_4///////TASK_4///////////
// Написать функцию, которая принимает длину и ширину прямоугольника и
// вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет
// площадь квадрата.

// let height = prompt('Введите высоту ');
// let width = prompt('Введите ширину ');
// function square(width, height) {
//     if(width != '' && height != '') {
//         return width * height;
//     }
//     else if(width != '' && height == '') {
//         return width * width ;
//     }
//     else if(width == '' && height != '') {
//         return height * height;
//     }
// }
// alert(square(width, height));



//////////TASK_5///////TASK_5///////TASK_5///////TASK_5///////TASK_5///////////
// Написать функцию, которая проверяет, является ли переданное ей число
// совершенным. Совершенное число – это число, равное сумме всех своих
// собственных делителей.

// let num = +prompt('Введите число, для проверки на совершенное число');
// function numIsPerfect(num) {
//     let dividerNum = 0;
//     for(let i = 1; i <= num / 2; i++) {
//         if( num % i === 0) {
//             dividerNum += i;
//         }
//     }
//     if((dividerNum === num) && (dividerNum !== 0)) {
//         alert("Это совершенное число.");
//     }
//     else {
//         alert("Это несовершенное число.");
//     }
// }
// numIsPerfect(num);



//////////TASK_6///////TASK_6///////TASK_6///////TASK_6///////TASK_6///////////
// Написать функцию, которая принимает минимальное и максимальное значения для
// диапазона, и выводит только те числа из диапазона, которые являются
// совершенными. Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.

// function numIsPerfect(num) {
//     let dividerNum = 0;
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             dividerNum += i;
//         }
//     }
//     if ((dividerNum === num) && (dividerNum !== 0)) {
//        return num;
//     }
// }
// function rangeNumsIsPerfect(num_min, num_max) {
//     let result = [];
//     for(let num = num_min; num != num_max; num++) {
//         if(numIsPerfect(num)) {
//             result.push(num);
//         }
//     }
//     alert(`Совершенные числа данного диапозона: ${result.join(', ')}`);
// }
// alert('Внимание!!!\n' +
//     'Необходимо ввести начало и конец диапозона, в котором нужно' +
//     'будет искать совершенные числа');
// rangeNumsIsPerfect(
//     +prompt('Начало диапозона'),
//     +prompt('Конец диапозона')
// );



//////////TASK_7///////TASK_7///////TASK_7///////TASK_7///////TASK_7///////////
// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит
// его на экран в формате «чч:мм:сс». Если при вызове функции минуты и/или
// секунды не были переданы, то выводить их как 00.

// alert('Внимание!!!\n' +
//  'Необходимо ввести время по очереди (часы, минуты, секунды) в формате 24 ч.');
// function time() {
//     let hour = +prompt('Часы');
//     let minute = +prompt('Минуты');
//     let second = +prompt('Секунды');
//     let result = [];
//     if((hour > -1 && hour < 24) && (minute > -1 && minute < 60) &&
//         (second > -1 && second < 60)) {
//             hour == 0 ? result.push('00') : result.push(hour);
//             minute == 0 ? result.push('00') : result.push(minute);
//             second == 0 ? result.push('00') : result.push(second);
//             alert(result.join(':'));
//     }
//     else {
//         alert('Внимание!!!\n' +
//  'Необходимо ввести время по очереди (часы, минуты, секунды) в формате 24 ч.');
//         time();
//     }
// }
// time();



//////////TASK_8///////TASK_8///////TASK_8///////TASK_8///////TASK_8///////////
// Написать функцию, которая принимает часы, минуты и секунды и возвращает
// это время в секундах.

// alert('Внимание!!!\n' +
//  'Необходимо ввести время по очереди (часы, минуты, секунды) в формате 24 ч.');
// function time() {
//     let hour = +prompt('Часы');
//     let minute = +prompt('Минуты');
//     let second = +prompt('Секунды');
//     let result = [];
//     if((hour > -1 && hour < 24) && (minute > -1 && minute < 60) &&
//         (second > -1 && second < 60)) {
//             hour == 0 ? result.push('00') : result.push(hour);
//             minute == 0 ? result.push('00') : result.push(minute);
//             second == 0 ? result.push('00') : result.push(second);
//             alert(`${result.join(':')} ` +
//                 `= ${(hour * 3600) + (minute * 60) + second} секунд`);
//
//     }
//     else {
//         alert('Внимание!!!\n' +
//  'Необходимо ввести время по очереди (часы, минуты, секунды) в формате 24 ч.');
//         time();
//     }
// }
// time();



//////////TASK_9///////TASK_9///////TASK_9///////TASK_9///////TASK_9///////////
// Написать функцию, которая принимает количество секунд, переводит их в часы,
// минуты и секунды и возвращает в виде строки «чч:мм:сс».

// alert('Внимание!!!\n' +
//  'Необходимо ввести количество секунд');
// function time() {
//     let hour;
//     let minute;
//     let sec;
//     let second = +prompt('Секунды');
//     let result = [];
//     if (second > -1) {
//         result.push(hour = second / 3600);
//         result.push(minute = ((second - hour * 3600) / 60));
//         result.push(sec = second - hour * 3600 - minute * 60);
//         alert(result.join(':'));
//     }
//     else {
//         alert('Внимание!!!\n' +
//  'Необходимо ввести время по очереди (часы, минуты, секунды) в формате 24 ч.');
//         time();
//     }
// }
// time();



/////////TASK_10//////TASK_10//////TASK_10//////TASK_10//////TASK_10///////////
// Написать функцию, которая считает разницу между датами. Функция принимает 6
// параметров, которые описывают 2 даты, и возвращает результат в виде строки
// «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х
// заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах,
// а потом разницу переведите обратно в «чч:мм:сс».

// function time() {
//     let date_1 = prompt('Введите первую дату в формате ' +
//         '«дд:мм:гг»').split(':');
//     let date_2 = prompt('Введите вторую дату в формате ' +
//         '«дд:мм:гг»').split(':');
//     let formatDate = {
//         year: 'numeric',
//         month: 'numeric',
//         day: 'numeric',
//     };
//     if (date_1[0] > 0 && date_1[0] < 32 && date_1[1] > 0 && date_1[1] < 13
//     && date_2[0] > 0 && date_2[0] < 32 && date_2[1] > 0 && date_2[1] < 13) {
//         date_1 = new Date(date_1[2], date_1[1]-1,
//                            date_1[0]).toLocaleString("ru", formatDate);
//         date_2 = new Date(date_2[2], date_2[1]-1,
//                            date_2[0]).toLocaleString("ru", formatDate);
//         let diffInSec = (Date.parse(date_1) - Date.parse(date_2)) * 0.001
//         let hours = Math.floor(diffInSec/3600);
//         let min = Math.floor((diffInSec - (hours * 3600))/60);
//         let sec = (diffInSec - (hours * 3600))-(min * 60);
//         hours > 0 ? hours : hours *= -1;
//         min === 0 ? min = '00' : min;
//         sec === 0 ? sec = '00' : sec;
//         alert(`Разница между датами в «чч:мм:сс» - ${hours}:${min}:${sec}`);
//     }
//     else {
//         alert('Даты нужно ввести в формате «дд:мм:гг»')
//     }
// }
// time()