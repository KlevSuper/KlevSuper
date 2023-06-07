"use strict";
function age_and_pol() {
    let age, gender;
    age = prompt('Сколько вам лет?');
    gender = prompt('Вы мужчина или женщина? (или "м" и "ж" соответственно)');
    if ((age >= 0 && age <= 17) && ((gender == 'мужчина' || gender == 'м') || (gender == 'женщина' || gender == 'ж'))) {
        alert('Вам работать ещё рано — учитесь!');
    } else if ((age >= 18 && age <= 59) && (gender == 'мужчина' || gender == 'м')) {
        alert('Вам ещё работать и работать!');
    } else if ((age >= 18 && age <= 54) && (gender == 'женщина' || gender == 'ж')) {
        alert('Вам ещё работать и работать!');
    } else if ((age >= 60 && age < 65) && (gender == 'мужчина' || gender == 'м')) {
        alert('Скоро пенсия!');
    } else if ((age >= 55 && age < 60) && (gender == 'женщина' || gender == 'ж')) {
        alert('Скоро пенсия!');
    } else if (age >= 65 && (gender == 'мужчина' || gender == 'м')) {
        alert('Вам пора на пенсию!');
    } else if (age >= 60 && (gender == 'женщина' || gender == 'ж')) {
        alert('Вам пора на пенсию!');
    } else if (age == null && gender == null) {
        alert('Надо было вводить значения!');
    } else {
        alert('Да кто ты такой?')
    }
}

function crow() {
    let num, message, mod;
    num = +prompt('Введите количество ворон', 1);
    mod = num % 100;
    if (mod > 10 && mod < 20) {
        message = `На ветке сидит ${num} ворон`;
    }
    else {
        switch (num % 10) {
            case 1:
                message = `На ветке сидит ${num} ворона`;
                break;
            case 2:
            case 3:
            case 4:
                message = `На ветке сидит ${num} вороны`;
                break;
            default:
                message = `На ветке сидит ${num} ворон`;
                break;
        }
    }
    alert(message);
}
function onKeydown(event, num) {
    if (event.code === 'Escape') {
        num = null;
        return;
    }
}
function hundred() {
    let num;
    do {
        num = prompt('Введите число большее 100');
        if (num === null) return; // выход из функции, если нажали "Отмена"
        if (num === '') continue; // продолжаем цикл, если введена пустая строка
    } while (num <= 100 ||  isNaN(num));
    alert(num);
    document.addEventListener('keydown', function (event) {
        onKeydown(event, num);
    });
}

function simple() {
    let n;
    n = prompt('Введите число большее чем 2');
    easy:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue easy;
        }
        console.log(i);
    }
}
function catdog() {
    let num = prompt("Введите количество строк: ");
    let k = Math.floor(num / 5);
    let l = num - 5 * k;
    const one = "dog dog dog cat cat dog";
    const two = "dog dog cat cat dog dog";
    const three = "dog cat cat dog dog dog";
    const four = "cat cat dog dog dog dog";
    const five = "cat dog dog dog dog cat";
    var list = [one, two, three, four, five]
    for (let i = 1; i <= k; i++) {
        for (let j = 0; j < 5; j++) console.log(list[j]);
    }
    for (let j = 0; j < l; j++) console.log(list[j]);
}


