//
// // Переменные
//
// // let admin;
// // let name;
// //     name = 'Джон';
// //     admin = name;
// //
// // console.log(admin);
// //
// //
// // let ourPlanetName = 'Земля';
// //
// // let currentUserName = 'Джон';
// //
// //
// // const BIRTHDAY = '18.04.1982';
// //
// // const age = someCode(BIRTHDAY);
// //
// // console.log(age)
//
// // Типы данных
//
// let massege = "hello";
// massege = 12345;
//
//
// // NUMBER - Число
//
// let n = 123;
//
// n= 12.345;
//
//
// // alert('не число' / 2); // NaN
//
// // alert(NaN ** 0); // Исключение
//
// // BigInt
//
// const bigInt = 1234567890065452524664363745747436235254235345n;
//
// // alert(bigInt);
//
// // String - Строка
//
// let string = "Привет";
// let newString = "До свидания";
//
// let myName = 'Юрий';
//
//
//
//
// // Boolean - Булевый (логический) тип
//
// // let boolean = 4 < 1;
// //
// // alert(boolean);
// //
// // // null
// //
// // let age = null;
// //
// // alert(age);
// //
// // // Undefined
//
// let newAge;
//
//
//
// let yourAge = 123;
//
// yourAge = undefined;
//
//  // Но так делать не рекомендуется. Обычно null используется для присвоения переменной «пустого» или «неизвестного» значения, а undefined – для проверок, была ли переменная назначена.


// Объекты и символы

// let mySuper = null;
//
// alert(typeof mySuper);
//
// // alert, prompt, confirm
//
// let age = prompt('Ваш возраст', 100);
//
// alert(`Тебе ${age} лет!`);
//
// let yourNAme = prompt('Как тебя зовут?', 'Ваше имя');
//
// alert(`Тебя зовут ${yourNAme}.`);


// Преобразование типов


// let value = true;
//
// value = String(value);
//
// alert(value);
//
// alert("6" / "2")
//
//
// let str = "1234";
//
// alert(typeof str);
//
// let newStr = Number(str);
//
// alert(typeof newStr);

// Базовые операторы


// let xy = 1;
//
// xy = -xy; // унарный минус
//
//
// let x = 2, y = 5;
//
//
// let s = "моя " + "строка";
//
//
// x = 123456;
//
//
// x = String(x);
//
// x = Number(x);
//
//
// x = 5;
//
// x += 5;
//
//
//
// x = 10;
//
// x++;
//
// console.log();
//
// x--;
//
// console.log();
//
// let counter = 1;
//
// let a = counter++;


// a > b ; a < b/
//
//     a >= b; a <= b/;
//
//     a == b.
//
//         a != b;
//
//     true or false


// alert( 2 > 1); // true
// alert( 2 == 1); // false
// alert ( 2 != 1); // true

// let result = 5 > 4;
//
// alert(result); // true

// alert( 'Я' > 'А'); // true
// alert("Коты" > "Кода"); // true
// alert("Сонный" > "Сонные коты"); // true


// alert("2" > 1); // true, строка '2' становится числом 2
//
// alert("01" == 1); //true

// alert(true != 0); //true
// alert(true == 0); //false
// alert(true == 1); //true
// alert(false != 0); //false
// alert(false == 0); //true
// alert(false == 1); //false


// let a = 0;
//
// alert(Boolean(a)); // false
//
// let b = "0";
// alert(Boolean(b)); // true
//
// let c = "Коты";
//
// alert(Boolean(c)); // true
//
// alert (a == b); // true



// alert(0 === false); //false
//
// alert(0 !== false); //true
//
// alert(0 != false); //false


// alert(null === undefined); //false
//
// alert(null == undefined); //true

// alert(null > 0); //false
//
// alert(null == 0); //false
//
// alert(null >= 0); // true


// alert(undefined > 0); //false
//
// alert(undefined < 0); //false
//
// alert(undefined == 0); //false



// let year = prompt('когда я родился?', "");
//
// if (year < 1996) {
//     alert('рановато');
// } else if (year > 1996) {
//     alert('поздновато');
// } else {
//     alert('верно');
// }



// 0, "", null, undefined, nan становятся false. they are falsy.


// остальны стоновятся truthy.

// if (0) {
//     // 0 is falsy
// }
//
// if (1) {
//     // 1 is truthy
// }


//
// let accessAllowed;

// let age = prompt('Сколько вам лет?', '');
//
// // if (age > 18) {
// //     accessAllowed = true;
// // } else {
// //     accessAllowed = false;
// // }
// //
// // alert(accessAllowed);
//
//
//
// // let result = условие ? значение1 : значение2;
//
//
//
// let accessAllowed = (age > 18) ? "Много" : "Мало";
//
//
//
// alert(accessAllowed);





// let age = prompt('your age', 18);
//
//
// let message = (age < 3) ? 'Hi, baby' :
//     (age < 18) ? 'Hi' :
//         (age < 100) ? 'Hello' :
//             "wow, your age are unusual";
//
//
// alert(message);



// let company = prompt('What the company make JavaScript', '');
//
// (company == 'NetScape') ? alert('Right') : alert('Wrong');
//
//
// if("0") {
//     alert('Привет')
// }




// let official = prompt('What the official name is javascript','');
//
// if(official == 'ECMAscript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? ECMAscript!');
// }


// let value = prompt('your value', '');
//
// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }


// let result = (a + b < 4) ? 'Мало' : 'Много';



// let login = prompt('Добрый день. Ведите ваш логин', 'логин');
//
//
// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//         (login == '') ? 'Нет логина' :
//             '';
//
// alert(message);


// 4 logical operators  ||, &&, !, ??.


// result = a || b;
//
//
// alert(true || true); // true
//
// alert(false || true); // true
//
// alert(true || false); // true
//
// alert(false || false); // false


// if (1 || 0) {
//     // работает как if (true || false)
//     alert('truthy!');
// }



// let hour = 9;
//
// if (hour < 10 || hour > 18) {
//     alert('Офис закрыт.');
// }


// let hour = 12;
//
// let isWeekend = true;
//
// if (hour < 10 || hour > 18 || isWeekend) {
//     alert('Офис закрыт.') // Это выходной
// }

// result = value1 || value2 || value3;



// alert(1 || 0); //
//
// alert(true || 'no matter what'); // true
//
// alert(null || 1); // 1
//
// alert(null || 0 || 1); // 1
//
// alert(undefined || null || 0); // 0



// let currentUser = null;
//
// let defaulUser = 'John';
//
// let name = currentUser || defaulUser || "unnamed";
//
// alert(name); // john


// let x;
//
// true || (x = 1);
//
// alert(x); // undefined.



// result = a && b;

// alert(true && true); // true
//
// alert(true && false); // false
//
// alert(false && true); // false
//
// alert(false && true); // false


// let hour = 12;
//
// let minute = 30;
//
// if (hour == 12 && minute == 30) {
//     alert('the time is 12:30');
// }

// if (1 && 0) {
//     alert('не сработает')
// }

// Если первый операнд истинный,
// И возвращает второй:

// alert(1 && 0); // 0
// alert(1 && 5); // 5

// alert(null && 5); // null
//
// alert(0 && 'no matter'); // 0
//
//
// alert(1 && 2 && null && 3); // null
//
//
// alert(1 && 2 && 3); // 3
//
//
// a && b || c && d


// let x = 1;
//
// (x > 0) && alert('greater than zero!');


// let x = 1;
//
// if (x > 0) {
//     alert('greater than zero!');
// }


// result = !value;

// alert(!true); //false
//
// alert(!0); //true
//
// alert(!!"non-epty string"); //true
//
// alert(!!null); //false



// alert(Boolean("non-empty")); // true
//
// alert(Boolean(null)); //false

// alert(null || 2 || undefined); // 2

// if (age < 14 || 90 < age)
//
//     if (!(age >=14 && age <=90))


// -1, 0, 1


// let user = prompt('Кто там?','');
//
// if(user === "Админ") {
//
//     let password = prompt('Пароль?', '')
//
//     if (password === 'Я главный') {
//         alert('Здравствуйте');
//     } else if (password === '' || password === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }
//
// } else if (user === '' || user === null) {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// }




// result = a ?? b;

// result = (a !== null && a !== undefined) ? a : b;


// let user;
//
// alert(user ?? "Anonime"); // Anonime
//
// let user = "Ivan";
//
// alert(user ?? "Anonime"); // Ivan


// let firstName = null;
// let lastName = null;
// let nickName = "SuperCoder";
//
// alert(firstName ?? lastName ?? nickName ?? "Anonime");

// let firstName = null;
// let lastName = null;
// let nickName = "SuperCoder";
//
// alert(firstName || lastName || nickName || "Anonime");



// let height = 0;
//
// alert(height || 100); // 100
//
// alert(height ?? 100); // 0


// let height = null;
// let width = null;
//
// let area = (height ?? 100) * (width ?? 50);
//
// alert(area); // 5000


// let x = (1 && 2) ?? 3;
//
// alert(x);


// height = height ?? 100;


// Циклы

// While (condition) {
//     // код
//     // также называемый "телом цикла"
// }

// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++;
// }

// одно выполнение тела цикла называется ИТЕРАЦИЯ.
// while (i) - более короткий вариант while (i != 0);

// let i = 3;
// while (i) {
//     alert(i);
//     i--;
// }

// brecket don't need for 1 string;
//
// let a = 3;
// while (a) alert(a--);

// do {
//     // тело цикла
// } while (condition);

// let i = 0;
//
// do {
//     alert(i);
//     i++;
// } while (i < 3);



// i - <Встроенное> Объявление переменной. Такие переменные существуют только внутри цикла
// for (let i = 0; i < 3; i++) {
//     alert(i);
// }
// начало let i = 0 - Выполняется один раз при входе в цикл
// условие i < 3 - Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
// тело alert(i) - Выполняется снова и снова, пока условие вычисляется в true.
// шаг i++ - Выполняется после тела цикла на каждой итерации перед проверкой условия.

// Алгоритм работы цикла:
// 1. Выполнить начало
// 2. → (Если условие == true → Выполнить тело, Выполнить шаг)
// 3. → (Если условие == true → Выполнить тело, Выполнить шаг)
// 4. → (Если условие == true → Выполнить тело, Выполнить шаг)
// 5. → ...


// let a = 0;
//
// for (a = 0; a < 3; a++) {
//     alert(a);
// }
// alert(a);


// let i = 0;
//
// for (; i < 3; i++) {
//     alert(i); // 0, 1, 2
// }


// let i = 0;
//
// for (; i < 3;) {
//     alert(i++);
// }


// for (;;) {
//     // Будет выполняться вечно
// }

// !!! точки с запятой обязательно должны присутствовать иначе будет ошибка синтаксиса.

// let sum = 0;
//
// while (true) {
//     let value = +prompt("Введите число", "");
//
//     if (!value) break; // (*)
//
//     sum += value;
//
// }
// alert('Сумма: ' + sum);


// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue;
//
//     alert(i);
// }




// if (i > 5) {
//     alert(i);
// } else {
//     continue;
// }
//
// (i > 5) ? alert(i) : continue; //



// outer:
//     for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Значение на координатах (${i}, ${j})`, '');
//         if (!input) break outer;
//     }
// }
// alert('Готово');



// let i = 0;
// while (i++ < 5) alert(i);



// for (i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }



// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

// let num;
//
// do {
//     num = prompt("Введите число больше 100!", '');
// } while (num <= 100 && num);




// let n = 10;
//
// nextPrime:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     alert(i);
// }


// let i = 0;
// while (++i < 5) alert(i);
//
// 1, 2, 3, 4
//
//
// let i = 0;
// while (i++ < 5) alert(i);
//
// 1, 2, 3, 4, 5


// for (let i = 0; i < 5; i++) alert(i);
//
// 0, 1, 2, 3, 4
//
// for (let i = 0; i < 5; ++i) alert(i);
//
// 0, 1, 2, 3 ,4



// let i = 2;
//
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }



// let i = 0
// while (i < 3) {
//     alert(`number ${i}`);
//     i++;
// }


// let num;
//
// do {
//     num = prompt('Введите число больше 100', '');
// } while (num <= 100 && num);

// let n = 10
// nextPrime:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     alert(i);
// }


// construction switch

// let a = 2 + 2;
//
// switch (a) {
//     case 3:
//         alert('malo');
//         break;
//     case 4:
//     case 5:
//         alert('перебор');
//         alert('неправильно');
//         break;
//     default:
//         alert('Нет таких значений');
// }


// let browser = prompt('What do you use browser');
//
// if(browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }


// const number = +prompt('Введите число между 0 и 3', '');
//     switch (number) {
//         case 0:
//             alert('Вы ввели число 0');
//             break;
//         case 1:
//             alert('Вы ввели число 1');
//             break;
//         case 2:
//         case 3:
//             alert('Вы ввели число 2, а может  и 3');
//             break;
//     }
//




// function showMessage() {
//     alert('Всем привет!');
// }
//
//
// showMessage();
// showMessage();


// function showMessage() {
//     let messge = "привет, я JavaScript";
//     alert(messge);
// }
//
// // showMessage(); // Привет я джаваскрипт
// alert(message); // ошибка переменная видна только внутри функции





// let userName = "yuriy";
//
// function showMessage() {
//     let message = "Привет, " + userName;
//     alert(message);
// }
//
// showMessage();

// let userName = "Vlad";
//
// function showMessage() {
//     userName = "Yuriy";
//
//     let message = 'Hello, ' + userName;
//
//     alert(message);
// }
//
// alert(userName);
//
//
// showMessage();
//
// alert(userName);




// let userName = 'Vlad';
//
//
// function showMessage() {
//     let userName = 'Rouse';
//
//     let message = 'Hello, ' + userName;
//     alert(message);
// }
//
// showMessage();
//
// alert(userName);

// function showMessage(from, text) {
//     alert(from + ': ' + text);
// }
//
// showMessage('Vlad', 'Hello there!');
//
// showMessage('Vlad', 'How are you?');


// function showMassege(from = 'без имени', text = 'текст не добавлен') {
//     from = '*' + from + '*';
//
//     alert(from + ': ' + text);
// }
//
// let from = 'Syu';
//
// showMassege(from, 'Hello');
//
//
// alert(from);
//
//
// showMassege(from);
//
//
// showMassege();



//
// function anotherFunction(){
//
// }
// function showMessage(from, text = anotherFunction()){
//
// }



// function showMessage(from, text) {
//     if(text === undefined) {
//         text = 'without text';
//     }
//     alert(from + ': ' + text);
// }
//
// showMessage('vlad');




//
// function showMessage(from, text) {
//     text = text || 'without text';
// }


// function showMessage(text) {
//     if (text === undefined) {
//         text = 'without message';
//     }
//     alert(text);
// }
//
// showMessage();



// function showMessage(text) {
//     text = text || 'zero';
//     alert(text);
// }
//
// showMessage();


// лучшая практика оператор нулевого слияния


// function showCount(count) {
//     alert(count ?? "unknown");
// }
//
// showCount(0);
// showCount(null);
// showCount();
//


// function sum(a, b) {
//     return a / b;
// }
//
// let result = Math.floor(sum(55,2));
//
// alert(result);

// let age = prompt('Сколько вам лет', 18);
//
// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else if (age < 18){
//         return false + confirm('А родители точно разрешили');
//     }
// }
//
// if (checkAge(age)) {
//     alert('Доступ получен');
// } else {
//     alert('Доступ закрыт');
// }
//
//
// function showMovie(age) {
//     if (!checkAge(age)) {
//         return;
//     }
//     alert('Вам показывается кино');
// }


