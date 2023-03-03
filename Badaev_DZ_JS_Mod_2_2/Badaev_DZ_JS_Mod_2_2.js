'use strict'
////////////////////////////////////TASK 1////////////////////////////////////
// Реализовать класс, описывающий простой маркер. В классе
// должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере (в процентах);
// ■ метод для печати (метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов.

// class Marker {
//     constructor(color, ink) {
//         this.color = color;
//         this.ink = ink;
//     }
//     print(line) {
//         let content = document.getElementById("content")
//         let info = document.getElementById("info")
//         for (let i = 0; i < line.length; i++) {
//             if (this.ink != 0) {
//                 if (line[i] == " ") {
//                     this.ink += 0.5;
//                 }
//                 content.innerHTML += line[i];
//                 content.style.color = this.color;
//                 info.innerHTML = `Чернил осталось: ${this.ink}<br>`;
//                 info.innerHTML += ` Цвет: ${this.color}<br><br>`;
//                 this.ink -= 0.5;
//             }
//             else {
//                 content.innerHTML += "<br><br>";
//                 break
//             }
//         }
//     }
// }
//
// class FilledMarker extends Marker {
//     fill(ink) {
//         if (ink > 100) {
//             this.ink = 100;
//         }
//         else {
//             this.ink += ink;
//         }
//     }
// }
//
// let marker = new FilledMarker( "blue", 30)
// marker.print("Мне этот код уже абсалютно понятен и я в нем ищу лишь " +
// "одного - покоя, умиротворения и вот этой гармонии от слияния без конфликтов")
// marker.fill(55)
// marker.print("Мне этот код уже абсалютно понятен и я в нем ищу лишь " +
// "одного - покоя, умиротворения и вот этой гармонии от слияния без конфликтов.")



////////////////////////////////////TASK 2////////////////////////////////////
// Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date
// и добавив следующие возможности:
// ■ метод для вывода даты (числа и месяца) текстом;
// ■ метод для проверки – это прошедшая дата или будущая
// (если прошедшая, то метод возвращает false;
// если будущая или текущая, то true);
// ■ метод для проверки – високосный год или нет;
// ■ метод, возвращающий следующую дату.
// Создайте объект класса ExtendedDate и выведите на экран
// результаты работы новых методов.

// class ExtendedDate extends Date {
//     dateGet(userdata) {
//         let options = {month: 'long', day: 'numeric'};
//         console.log(userdata.toLocaleDateString("ru", options));
//     }
//     pastOrFuture(userdata) {
//         let date1 = userdata;
//         let date2 = new Date()
//         return date1 > date2;
//     }
//     checkLeapYear(userdata) {
//         let y = userdata.getFullYear();
//         if (y % 400 === 0) return true;
//         return (y % 4 === 0 && y % 100 !== 0);
//     }
//     nextDate(userdata) {
//         userdata.setDate(userdata.getDate()+1);
//         return userdata.toLocaleDateString("ru");
//     }
// }
//
// let extData = new ExtendedDate();
// let userDay = new Date(prompt('Введите дату в формате "год-месяц-день"',
//     '2003-02-01'));
//
// extData.dateGet(userDay);
// console.log('Это будущая дата: ' + extData.pastOrFuture(userDay));
// console.log('Это високосный год: ' + extData.checkLeapYear(userDay));
// console.log('Следующая дата: ' + extData.nextDate(userDay));



////////////////////////////////////TASK 3////////////////////////////////////
// Реализовать класс Employee, описывающий работника, и со-
// здать массив работников банка.
// Реализовать класс EmpTable для генерации html кода таблицы
// со списком работников банка. Массив работников необходимо
// передавать через конструктор, а получать html код с помощью
// метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат
// работы метода getHtml().

// class Employee {
//     constructor(surname, name, age, experience, jobTitle) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.experience = experience;
//         this.jobTitle = jobTitle;
//     }
// }
// class EmpTable {
//     constructor(employees) {
//         this.employees = employees;
//     }
//     getHtml() {
//         document.write('<table>');
//         document.write('<tr>');
//         for (let keys in this.employees[2]) {
//             document.write('<th>' + keys +'</th>');
//         }
//         document.write('</tr>');
//         for (let i=0; i < employees.length; i++) {
//             document.write('<tr>');
//             for (let key in this.employees[i]) {
//                 document.write('<td>' + this.employees[i][key] + '</td>');
//             }
//             document.write('</tr>');
//         }
//         document.write('</table>');
//     }
// }
// const employees = [
//     new Employee('Муромец', 'Илья', 40, 5, 'Директор'),
//     new Employee('Никитич', 'Добрыня', 39, 5, 'Менеджер'),
//     new Employee('Конь', 'Юлий', 22, 2, 'Бариста'),
//     new Employee('Попович', 'Алеша', 30, 5,'Вышибала'),
//     new Employee('Волк', 'Серый', 35, 1, 'Голосовой помощник')
// ];
// const empTable = new EmpTable(employees);
// // empTable.getHtml();



////////////////////////////////////TASK 4////////////////////////////////////
// Реализовать класс StyledEmpTable, который наследуется от
// класса EmpTable. Добавить метод getStyles(), который возвращает
// строку со стилями для таблицы в тегах style. Переопределить
// метод getHtml(), который добавляет стили к тому, что возвращает
// метод getHtml() из родительского класса.
// Создать объект класса StyledEmpTable и вывести на экран
// результат работы метода getHtml().

// class StyledEmpTable extends EmpTable {
//     getStyles() {
//         let head = document.querySelector('head');
//         let newItem = document.createElement('style');
//         newItem.innerHTML = '        table {\n' +
//             '            border-collapse: collapse;\n' +
//             '            text-align: center;\n' +
//             '            width: 60%;\n' +
//             '        }\n' +
//             '        th, td {\n' +
//             '            background: #99cccc;\n' +
//             '            width: 100px;\n' +
//             '            height: 30px;\n' +
//             '            border: 1px solid black;\n' +
//             '        }\n' +
//             '        th {\n' +
//             '            background: #006666;\n' +
//             '        }';
//         head.appendChild(newItem);
//     }
//     getHtml() {
//         super.getHtml();
//         this.getStyles();
//     }
// }
// let styledEmpTable = new StyledEmpTable(employees);
// styledEmpTable.getHtml();