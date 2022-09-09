// 1 Переменные
// camelCase
// const fistName = 'Yuriy'

// const age = 26    // number
// const isProgrammer = true   // boolean

// const _private = 'private'
// const $ = 'some value'

// // const if = 'mkef' // err
// const withNum5 = '5'
// // const 5withNum = 5 // err

// 2 Мутирование
// console.log('Имя человека: ' + fistName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + fistName + ', а возраст человека: ' + age)
// const lastName = prompt('Введите фамилию')
// alert(fistName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2020
// const birthYear = 1996
//
// //const age = currentYear - birthYear
//
// const a = 10
// const b = 5
//
// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)


// 4 Типы данных

// const isProgrammer = true
// const name = 'Yriy'
// const age = 26
// let x
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 27 >= 26 => true

// console.log(isFullAge)

// 6 Условные операторы

// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }
//
// const isReady = true
//
// // if (isReady) {
// //     console.log('Все готово')
// // } else {
// //     console.log('Все не готово')
// // }
//
// // Тернарное выражение
// isReady ? console.log('Все готово') : console.log('Все не готово')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

//7 Булевая логика

//8 Функции

// function calculateAge(year) {
//     return 2020 - year
// }
//
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0){
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее')
//     }
// }
//
// logInfoAbout('Владилен', 2000)
// logInfoAbout('Владилен', 2022)


// 9 Массивы

// const cars = ['мазда', 'мерседес', 'форд']
// // console.log(cars)
//
// // const cars = new Array(['мазда', 'мерседес', 'форд'])
// console.log(cars.length)
//
// console.log(cars[2])
//
// cars[0] = 'Porsche'
// console.log(cars)
//
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы

// const cars = ['мазда', 'мерседес', 'форд', 'porsche', 'bmw', 'bugatti']
//
// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }
//
// for (let car of cars) {
//     console.log(car)

// 11 Объекты

const person = {
    firstName: 'Yuriy',
    lastName: 'Pshenov',
    year: 1996,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()


const apples = 20

for (let i = 22; i <= apples; i++) {
    console.log(i)
}


function bim (weight, height) {

}