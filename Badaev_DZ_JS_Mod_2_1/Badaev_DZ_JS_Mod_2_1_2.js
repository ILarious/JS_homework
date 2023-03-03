"use strict"
//////////TASK_1///////TASK_1///////TASK_1///////TASK_1///////TASK_1///////////
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска,
// средняя скорость), и следующие функции для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного
// расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги
// водителю необходимо делать перерыв на 1 час.

// let car = {
//     manufacturer: "Dodge (Chrysler Corporation)",
//     model: "Challenger SRT Hellcat",
//     yearOfIssue: "2022",
//     averageSpeed: "261",
//     showInformation: function () {
//         console.log(`
//             Информация об автомобиле
// .....................................................
// Производитель: ${car.manufacturer},
// Модель: ${car.model},
// Год производства: ${car.yearOfIssue},
// Средняя скорость: ${car.averageSpeed} км/ч.
// .....................................................`);
//     },
//     countingTime: function (dist) {
//         let timeInWay = Math.floor(dist / this.averageSpeed);
//         let timeInRest = (timeInWay%4 == 0)? (timeInWay/4) - 1: timeInWay/4;
//         console.log(`
// .....................................................
// Время для преодоления дистанции в ${dist} км: ${timeInWay + timeInRest} ч.
// .....................................................`);
//     },
// };
// car.showInformation();
// car.countingTime(800);



//////////TASK_2///////TASK_2///////TASK_2///////TASK_2///////TASK_2///////////
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и
// следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.

// let fraction_1 = {
//   nominator: 24,
//   denominator: 30,
//   };
// let fraction_2 = {
//   nominator: 5,
//   denominator: 6,
//   };
// let fractionAction = {
//   addition: function() {
//     console.log(`Сумма: ${fraction_1.nominator / fraction_1.denominator +
//     fraction_2.nominator / fraction_2.denominator}`);
//   },
//   subtruction: function() {
//     console.log(`Вычитание: ${fraction_1.nominator / fraction_1.denominator -
//     fraction_2.nominator / fraction_2.denominator}`);
//   },
//   multiplication: function() {
//     console.log(`Умножение: ${(fraction_1.nominator / fraction_1.denominator) *
//     (fraction_2.nominator / fraction_2.denominator)}`);
//   },
//   division: function() {
//     console.log(`Деление: ${(fraction_1.nominator / fraction_1.denominator) /
//     (fraction_2.nominator / fraction_2.denominator)}`);
//   },
// };
// fractionAction.addition();
// fractionAction.subtruction();
// fractionAction.division();
// fractionAction.multiplication();



//////////TASK_3///////TASK_3///////TASK_3///////TASK_3///////TASK_3///////////
// Создать объект, описывающий время (часы, минуты, секунды), и следующие
// функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество
// минут.
// 4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».

// let time = {
//   hours: 15,
//   minutes: 25,
//   seconds: 45,
//   showTime: function() {
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//   },
//   addSeconds: function(seconds) {
//     if (seconds + this.seconds >= 60) {
//       let differenceMin = Math.floor((this.seconds + seconds) / 60);
//       this.seconds = (this.seconds + seconds) % 60;
//       this.addMinutes(differenceMin);
//     }
//     else {
//       this.seconds += seconds;
//     }
//   },
//   addMinutes: function(minutes) {
//     if (this.minutes + minutes >= 60) {
//       let differenceHours = Math.floor((this.minutes + minutes) / 60);
//       this.minutes = (this.minutes + minutes) % 60;
//       this.addHours(differenceHours);
//     }
//     else {
//       this.minutes += minutes;
//     }
//   },
//   addHours: function(hours) {
//     if (hours + this.hours >= 24) {
//       this.hours = (this.hours + hours) % 24;
//     }
//     else {
//       this.hours += hours;
//     }
//   }
// };
//
// time.showTime();
// time.addHours(25);
// time.showTime();
// time.addMinutes(232);
// time.showTime();
// time.addSeconds(3460);
// time.showTime();
