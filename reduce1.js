/* 1) Напишите функцию JavaScript, которая принимает массив из списка названий стран в качестве входных данных и возвращает самое длинное название страны в качестве выходных данных.

Например вызывая функцию getLongestCountryName(["Россия", "Украина", "Соединённые Штаты Америки"])

Ожидаемые результат: Соединённые Штаты Америки */

// function getLongestCountryName(countries) {
//     let longestCountry = "";
//     for (let i = 0; i < countries.length; i++) {
//         if (countries[i].length > longestCountry.length) {
//             longestCountry = countries[i];
//         }
//     }
//     return longestCountry;
// }
// console.log(getLongestCountryName(["Россия", "Украина", "Соединённые Штаты Америки"]));


/* 2) Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке.

Например вызывая функцию  alphabetOrder('alphabetical') */

// function alphabetOrder(str) {
//     return str.split('').sort().join('');
// }
// console.log(alphabetOrder('alphabetical'));


/* 3) Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

Например: const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

На выходе должно быть: [7,4,7,8] */

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// const lengths = vegetables.map(function(vegetable) {
//     return vegetable.length;
// });
// console.log(lengths);

/* 4) Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, заполненный целыми числами, где каждое число больше предыдущего на единицу.

Например вызывая функцию generateNumbers(0, 5)

Ожидаемый результат: [0,1,2,3,4] */

// function generateNumbers (start, len) {
//     if (len <= 0) {
//         return [];
//     }
//     let result = [];
//     for (let i = 0; i < len; i++) {
//         result.push(start + i);
//     }
//     return result;
// }

// const generatedArray = generateNumbers(0,5);
// console.log(generatedArray);

/* 5) Напишите функцию, которая возвращает новый объект без указанных значений.

const without = (object, ...args) => {

    Напишите здесь свое решение

}
Например дан объект const data = { a: 1, b: 2, c: 3 } и при вызове функции without(data, 'b', 'c')

Ожидаемые результат: { a: 1 } */

const without = (object, ...args) => {
    // Преобразуем объект в массив [ключ, значение] с помощью Object.entries()
    const entries = Object.entries(object);

    // Отфильтруем массив entries, исключая ключи, переданные в args
    const filteredEntries = entries.filter(([key, value]) => !args.includes(key));

    // Преобразуем отфильтрованный массив entries обратно в объект с помощью Object.fromEntries()
    const filteredObject = Object.fromEntries(filteredEntries);

    return filteredObject;
};

const data = { a: 1, b: 2, c: 3 };
const result = without(data, 'b', 'c');
console.log(result);






