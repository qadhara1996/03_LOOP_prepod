// loop - цикл
// позволяет выполнить код многократно
// итерация - единичное выполнение цикла

// for
// for in
// for of
// while
// do while

// for
// break - прекратить выполнение цикла
// for(let i = 0;; i++) {
//     if (i === 10) {
//         break;
//     }
//     console.log(i);
// }

// continue - прекратить текущую итерацию и перейти к следующей
// for(let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }

//     console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//     // console.log(`${i}-е выполнение`)
//     for (let j = 1; j < 10; j++) {
//         const result = i * j;
//         console.log(`${i} * ${j} = ${result}`)
//     }
// }

// 1 * 1 = 1
// 1 * 2 = 2
// ...
// 9 * 9 = 81

// while (УСЛОВИЕ) {}

// let i = 0;
// const max = 5;

// while (i < max) {
//     console.log(i);
//     i++;
// }

// do {} while (УСЛОВИЕ)
// выполнится минимум 1 раз в любом случае
// let i = 0;
// const max = 5;

// do {
//     console.log(i);
//     i++;
// } while (i > max);

// -------------------------------
// ЗАДАЧИ
// -------------------------------

// 1 Написать программу где 2 пользователя вводят свои возрасты и вывести в консоль старшего (если хотя бы один из возрастов не был введен - null, то вывести в консоль сообщение об ошибке)

// const age1 = prompt("Возраст 1-го");
// const age2 = prompt("Возраст 2-го");

// if (age1 === null || age2 === null) {
//     console.log('Что-то не ввели')
// } else {
//     if (+age1 > +age2) {
//         console.log(`Старше ${+age1}`);
//       } else {
//         console.log(`Старше ${+age2}`);
//       }
// }

// 2) Пользователь вводит свой возраст. В зависимости от возраста приветствовать в консоли по разному:
// от 0 до 10 - привет мальчик
// от 11 до 18 - привет подросток
// от 19 до 40 - здарова пацан
// от 41 до 80 - добрый вечер
// от 81 до 100 - здравия желаю

// const age = +prompt("Возраст");

// if (age > 0 && age <= 10) {
//     console.log('Привет мальчик')
// } else if (age >= 11 && age <= 18) {
//     console.log('Привет подросток')
// } else if (age >= 19 && age <= 40) {
//     console.log('здарова пацан')
// } else if (age >= 41 && age <= 80) {
//     console.log('добрый вечер')
// } else if (age >= 81 && age <= 100) {
//     console.log('здравия желаю')
// } else {
//     console.log('Столько не живут')
// }

// 3) Пользователь вводит 3 числа, вывести их среднее арифметическое (сделать проверку на строку, пользователь должен вводить только числа и не должен вводить строки)

// const a = +prompt("Число 1");
// const b = +prompt("Число 2");
// const c = +prompt("Число 3");
// // '', NaN, null, false, undefined, 0
// if (a && b && c) {
//   console.log((a + b + c) / 3);
// } else {
//   console.log("No no no");
// }

// 4) С помощью switch напишите программу, которая по названию возвращает номер цвета:
// red => 1
// blue => 2
// orange => 3
// gray => 4
// salmon => 5
// Если ни один из цветов не совпал - вывести сообщение об ошибке

// const colorName = prompt("Color name");

// switch (colorName) {
//   case "red":
//     console.log("1");
//     break;
//   case "blue":
//     console.log("2");
//     break;
//   case "orange":
//     console.log("3");
//     break;
//   case "gray":
//     console.log("4");
//     break;
//   case "salmon":
//     console.log("5");
//     break;
//   default:
//     console.log("No no no");
//     break;
// }

// 5) Запросить у пользователя номер месяца и вывести на экран его название (switch)

const monthNumber = prompt("Month number");

switch (monthNumber) {
  case "1":
  case "2":
    console.log("Январь");
    break;
  case "3":
    console.log("Март");
    break;
  case "4":
    console.log("Апрель");
    break;
  default:
    console.log("No no no");
    break;
}
