"use strict"
//////////TASK_1///////TASK_1///////TASK_1///////TASK_1///////TASK_1///////////
// Написать функцию, которая принимает строку и выводит статистику о ней:
// количество букв, количество цифр и количество других знаков.

// function textInfo(str) {
//     let sumNumbers = str.match(/\d/g)
//     let sumLetters = str.match(/[a-z]/gi)
//     let sumOtherSigns = str.match(/[\S][\W]/g)
//     sumNumbers != null ? sumNumbers = sumNumbers.length : sumNumbers = "0";
//     sumLetters != null ? sumLetters = sumLetters.length : sumLetters = "0";
//     sumOtherSigns != null ? sumOtherSigns = sumOtherSigns.length :
//                                                         sumOtherSigns = "0";
//     alert(`Кол-во цифр: ${sumNumbers}
// Кол-во букв: ${sumLetters}
// Кол-во других знаков: ${sumOtherSigns}`);
// }
// textInfo(prompt('Введите текст'));



//////////TASK_2///////TASK_2///////TASK_2///////TASK_2///////TASK_2///////////
// Написать функцию, которая принимает двузначное число и возвращает его
// в текстовом виде. Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.

// function textNumber(number) {
//   let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть',
//       'Семь', 'Восемь', 'Девять'];
//   let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать',
//       'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать',
//       'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
//   let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят',
//       'Семьдесят', 'Восемьдесят', 'Девяносто'];
//   if (number > 0 && number <= 9) {
//     return first[number - 1];
//   }
//   if (number >= 10 && number <= 20) {
//     return second[number - 10];
//   }
//   if (number > 20 && number <= 99) {
//     let str = `${number}`;
//     str = str.split('');
//     let firstNumber = str[0];
//     let secondNumber = str[1];
//     return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
//   }
// }
// alert(textNumber(+prompt('Введите двухзначное число')));



//////////TASK_3///////TASK_3///////TASK_3///////TASK_3///////TASK_3///////////
// Написать функцию, которая заменяет в полученной строке большие буквы
// на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.

// function replaceLetter(text) {
//     let letter = text.toUpperCase().split('');
//     for (let i = 0; i < letter.length; i++) {
//       if (letter[i] == text[i])
//         letter[i] = letter[i].toLowerCase();
//     }
//     return letter.join("");
//   }
// alert(replaceLetter(prompt("Введите текст")))



//////////TASK_4///////TASK_4///////TASK_4///////TASK_4///////TASK_4///////////
// Написать функцию, которая преобразует названия cssстилей с дефисом в название
// в СamelСase стиле: font-size в fontSize, background-color в backgroundColor,
// textalign в textAlign.

// function CamelCase(str) {
//   if (str in document.body.style) {
//     return str.replace(/-(\w)/g, function (s,l) {
//       return l.toUpperCase();
//     });
//   }
//   else {
//     throw new TypeError("Переданное название не является CSS-стилем");
//   }
// }
// alert(CamelCase(prompt("Введите назание CSS-стиля с дефисом")));



//////////TASK_5///////TASK_5///////TASK_5///////TASK_5///////TASK_5///////////
// Написать функцию, которая принимает словосочетание и превращает его в
// аббревиатуру. Например: cascading style sheets в CSS, объектноориентированное
// программирование в ООП.

// function abbreviation() {
//    let str = prompt("Введите словосочетание");
//    let result = "";
//    if (str[0] != " ") {
//        result += str[0].toUpperCase();}
//    for(let i = 0;i <= str.length;i++) {
//        if (str[i] == " " && str[i + 1] != " ") {
//               result += str[i + 1].toUpperCase();
//        }
//    }
//    console.log(result);
// }
// abbreviation();



//////////TASK_6///////TASK_6///////TASK_6///////TASK_6///////TASK_6///////////
// Написать функцию, которая принимает любое количество строк, объединяет их
// в одну длинную строку и возвращает ее.

// let monoString = function(...strings) {
//     return [...strings].join("");
// }
// alert(monoString("Димон", "IT", "Кореш", "!"));



//////////TASK_7///////TASK_7///////TASK_7///////TASK_7///////TASK_7///////////
// Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.

// let calculator = function(str) {
//     str = str.split(' ');
//     switch (true) {
//         case str[1] === '+': return Number(str[0]) + Number(str[2]);
//         case str[1] === '-': return Number(str[0]) - Number(str[2]);
//         case str[1] === '/': return Number(str[0]) / Number(str[2]);
//         case str[1] === '*': return Number(str[0]) * Number(str[2]);
//     }
// }
// console.log(calculator('2 * 2'));
// console.log(calculator('2 - 2'));
// console.log(calculator('2 / 2'));
// console.log(calculator('2 + 2'));



//////////TASK_8///////TASK_8///////TASK_8///////TASK_8///////TASK_8///////////
// Написать функцию, которая получает url и выводит подробную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
// “протокол: https, домен: itstep.org, путь: /ua/about”

// function urlInfo() {
//    let url = prompt("Введите url");
//    let protocol = "";
//    let domain = "";
//    let patch = "";
//    console.log(url);
//    for (let i = 0; i < url.length; i++) {
//        if (url[i] == ":" && url[i + 1] == "/") {
//            protocol = url.substring(0,i);
//            url = url.substring(i + 3);
//        }
//    }
//    for (let i = 0; i < url.length; i++) {
//        if(url[i] == "/" && url[i + 1] != "/") {
//            domain = url.substring(0,i);
//            url = url.substring(i);
//            break;
//        }
//    }
//    patch = url.substring(1)
//    console.log("Протокол : " + protocol);
//    console.log("Домен : " + domain);
//    console.log("Путь : " + patch);
// }
// urlInfo();



//////////TASK_9///////TASK_9///////TASK_9///////TASK_9///////TASK_9///////////
// Написать функцию, которая принимает строку и разделитель и возвращает массив
// подстрок, разбитых с помощью указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат:“10”, “08”, “2020”.

// let separator = function (str){
//     return str.split('/')
// }
// console.log(separator("10/08/2020"));



/////////TASK_10//////TASK_10//////TASK_10//////TASK_10//////TASK_10///////////
// Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % указывается индекс входного
// параметра. При выводе вместо % индекс необходимо вывести значение
// соответствующего входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
// 8, 2020) должна вывести “Today is Monday 10.8.2020”

// let print = function (temp, ...values) {
//   return temp.replace(/%(\d+)/g, function (str, num) {
//      return [...values][num - 1];
//   });
// }
// console.log(print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020));