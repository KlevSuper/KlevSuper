"use strict";

/**
 * Функция, возвращающая x в степени n (n - целое число)
 * @param {number} x - запрашиваемое числ, котоое возводится в степень n
 * @param {number} n - степень, в которую возводится x
 * @returns {number} - значение x, вовзведенное в степень 
 */

function pow(x, n) {
    /*return x**n;*/
    if (n == 0) {
        return 1
    } else if (n > 0) {
        for (let i = 1; i < n; i++) {
            x *= x
        }
        return x
    } else return 1 / pow(x, -n);
}

/**
 * вычисляет сумму чисел от 1 до n включительно
 * @param {number} n - число, до которого необходимо рассчитать сумму
 * @returns {number} - сумму всех чисел от n до 1 
 */

function sumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
}

/**
 * возвращает факториал числа n!
 * @param {number} n - число, для которого вычисляется факториал 
 * @returns {BigInt} - Факториал заданного числа в виде BigInt
 */

function factorial(n) {
    if (n === 0 || n === 1) {
        return BigInt(1);
    } else {
        return BigInt(n) * factorial(n - 1);
    }
}

/**
 * возвращает n-е число Фибоначчи
 * @param {number} n - индекс желаемого числа Фибоначчи
 * @returns  {BigInt} - n-е число Фибоначчи в виде BigInt
 */

function fib(n) {
    if (n === 0) {
        return BigInt(0);
    } else if (n === 1) {
        return BigInt(1);
    } else {
        let a = BigInt(0);
        let b = BigInt(1);
        let c;
        for (let i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}

/**
 * принимает целочисленное значение x и возвращает анонимную функцию
 * @param {number} x - значение, с которым нужно сравнить
 * @returns {function} -  функция, которая принимает входное значение и возвращает логическое значение
 */

function compare(x) {
    return function (y) {
        if (y > x) {
            return true;
        } else if (y < x) {
            return false;
        } else {
            return null;
        }
    }
}

/**
 * возвращает сумму всех своих аргументов
 * @param  {...number} args - значения дя суммирования
 * @returns {number} -  общая сумма всех аргументов
 */

function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}