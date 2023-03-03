"use strict"
//////////TASK_1///////TASK_1///////TASK_1///////TASK_1///////TASK_1///////////
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необходимое количество
// и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необходимо увеличивать
// количество в существующей покупке,
// а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный

// let listShop = [
//   { nameProduct: "Груша", count: "10", isBuy: "Куплен" },
//   { nameProduct: "Яблоко", count: "6", isBuy: "Куплен" },
//   { nameProduct: "Помидор", count: "8", isBuy: "Куплен" },
//   { nameProduct: "Перец", count: "20", isBuy: "Куплен" },
//   { nameProduct: "Арбуз", count: "3", isBuy: "Не куплен" }
// ];
// let showProducts = function() {
//   listShop.sort(function(a, b) {
//     return b.isBuy - a.isBuy;
//   });
//   let i = 1;
//   console.log('......Список продуктов......')
//   for (let product of listShop) {
//     console.log(
//       `${[i]}: ${product.nameProduct} ${product.count} шт - ${product.isBuy}`
//     );
//     ++i;
//   }
//   console.log('............................')
// };
// let addProduct = function(product) {
//   let count = 0;
//   for (let i = 0; i < listShop.length; ++i) {
//     if (listShop[i].nameProduct === product) {
//       count = i;
//     }
//   }
//   if (count === 0) {
//     listShop[listShop.length] = {
//       nameProduct: product,
//       count: "1",
//       isBuy: "Не куплен",
//     };
//   }
//   else {
//     listShop[count].count = Number(listShop[count].count);
//     listShop[count].count += 1;
//   }
// };
// let buyProduct = function(myProduct) {
//   let count = 0;
//   myProduct = String(myProduct);
//   for (let i = 0; i < listShop.length; ++i) {
//     if (listShop[i].nameProduct === myProduct) {
//       count = i;
//     }
//   }
//   if (count === 0) {
//     console.log(`В списке нет продукта: ${myProduct}`);
//   }
//   else {
//     listShop[count].isBuy = "Куплен";
//   }
// };
//
// addProduct("Дыня");
// addProduct("Дыня");
// addProduct("Арбуз")
// buyProduct("Дыня");
// buyProduct("Помидор");
// showProducts(listShop);



//////////TASK_2///////TASK_2///////TASK_2///////TASK_2///////TASK_2///////////
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит
// из названия товара, количества и цены за единицу товара.
// Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке.

// let chequeShop = [
//   { productName: "Хлеб", count: 3, price: 43 },
//   { productName: "Молоко", count: 2, price: 98 },
//   { productName: "Сыр", count: 4, price: 256 },
//   { productName: "Килька БАРС в томатном соусе", count: 5, price: 86 },
//   { productName: "Шоколад", count: 5, price: 255 }
// ];
// let showCheque = function() {
//   console.log(".....................ЧЕК.....................");
//   for (let info of chequeShop) {
//     console.log(
//       `Продукт: ${info.productName} (${info.count} шт), `+
//                                         `цена: ${info.price * info.count} руб.`
//     );
//   }
//   console.log(".............................................");
// };
// let sumOfPurchase = function() {
//   let sum = 0;
//   for (let info of chequeShop) {
//     info.price = Number(info.price);
//     sum += info.price * info.count;
//   }
//   return sum;
// };
// let getExpensivePurchase = function() {
//   let minPrice = 0;
//   for (let info of chequeShop) {
//     info.price = Number(info.price * info.count);
//     if (info.price > minPrice) {
//       minPrice = info.price;
//     }
//   }
//   return minPrice;
// };
// let averagePriceOfProduct = function() {
//   let averagePrice = 0;
//   let count = 0;
//   for (let i = 0; i < chequeShop.length; ++i) {
//     chequeShop[i].price = Number(chequeShop[i].price);
//     averagePrice += chequeShop[i].price;
//     count++;
//   }
//   averagePrice /= count;
//   return averagePrice;
// };
//
// showCheque();
// let sum = sumOfPurchase();
// console.log(`Сумма всех продуктов: ${sum} руб.`);
//
// let maxPrice = getExpensivePurchase();
// console.log(`Самая дорогая покупка: ${maxPrice} руб.`);
//
// let averagePrise = averagePriceOfProduct();
// console.log(`Средняя цена в чеке: ${averagePrise} руб.`);



//////////TASK_3///////TASK_3///////TASK_3///////TASK_3///////TASK_3///////////
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание
// и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств:
// название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми стилями,
// перечисленными в массиве.

// let listCssStyle = [
//   { nameCssStyle: "color", meaning: "red"},
//   { nameCssStyle: "font-size", meaning: "18 px"},
//   { nameCssStyle: "text-align", meaning: "center"},
//   { nameCssStyle: "decoration", meaning: " underline"},
// ];
// let useStyle = function (){
//    let list = '';
//    function cssStyle() {
//        for (let info of listCssStyle) {
//             list += info.nameCssStyle +": " + info.meaning + "; "
//        }
//        return list;
//    }
//    document.write('<p style="' + cssStyle() + '"> ' +
//                                     prompt("Введит текст.") + '</p>');
// }
// useStyle();



//////////TASK_4///////TASK_4///////TASK_4///////TASK_4///////TASK_4///////////
// Создать массив аудиторий академии. Объект-аудитория состоит из названия,
// количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфавиту).

// let arrAuditorium = [
//     { nameGroup: "Экофак-22", direction: "Фармокология", faculty: "Биологический", amount: 18 },
//     { nameGroup: "Физфак-22", direction: "Ядерная физика", faculty: "Физический", amount: 13 },
//     { nameGroup: "Матфак-22", direction: "Кибернетика", faculty: "Математический", amount: 11 },
//     { nameGroup: "Экофак-22", direction: "Менеджмент", faculty: "Экономический", amount: 18 },
//     { nameGroup: "Экофак-22", direction: "Маркетинг", faculty: "Экономический", amount: 18 },
// ];
// function academiaList() {
//     console.log('.......СПИСОК ВСЕХ АУДИТОРИЙ.......');
//     for (let i in arrAuditorium) {
//        console.log(`
//        Название: ${arrAuditorium[i].direction}
//        Факультет: ${arrAuditorium[i].faculty}
//        Места: ${arrAuditorium[i].amount}`)
//     }
//     console.log('..................................');
// }
// function yourFaculty() {
//    let nameFaculty = prompt("Введите факультет: " +
//        "\n(Биологический, Физический, Математический, Экономический)");
//    for (let i in arrAuditorium){
//        if(nameFaculty == arrAuditorium[i].faculty) {
//            console.log(`${arrAuditorium[i].direction}`);
//        }
//    }
// }
// function academiaGroup() {
//    let name = prompt("Введите название группы:");
//    for(let i in arrAuditorium) {
//        if(name == arrAuditorium[i].nameGroup) {
//            console.log(`
// Название группы: ${arrAuditorium[i].nameGroup}
// Название: ${arrAuditorium[i].direction}
// Факультет: ${arrAuditorium[i].faculty}
// Места: ${arrAuditorium[i].amount}`);
//            return true;
//       }
//    }
//    console.log("Группы с такими параметрами нет");
// }
// function sortAcademiaNumber() {
//    function sortNumber(a,b) {
//        if (a.amount > b.amount) {
//            return 1;
//        }
//        if (a.amount < b.amount) {
//            return -1;
//        }
//        return 0;
//    }
//    arrAuditorium.sort(sortNumber);
//    academiaList();
// }
// function sortAcademiaName() {
//    function sortName(a,b) {
//        if (a.direction > b.direction) {
//            return 1;
//        }
//        if (a.direction < b.direction) {
//            return -1;
//        }
//        return 0;
//    }
//    arrAuditorium.sort(sortName);
//    academiaList();
// }
// academiaList()
// yourFaculty()
// academiaGroup()
// sortAcademiaNumber()
// sortAcademiaName()