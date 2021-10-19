
/**
 **  Функция складывает 2 числа
 * @param {number} a число 1
 * @param {number} b число 2
 * @returns {number} return(a + b) - возвращает число.
 */
function sum(a, b) {
  return (a + b)
}

/**
 ** Функция sub возвращает разность двух чисел. Вычитает из большего числа меньшее.
 * @param {number} a число 1
 * @param {number} b число 2
 * @returns  {number}  return(a / b) - возвращает разность чисел
 */
function sub(a, b) {
  return (Math.max(a, b) - Math.min(a, b))
}

/**
 ** Функция mul возвращает произведение двух  чисел. 
 * @param  {number} a число 1
 * @param  {number} b число 2
 * @param  {number} return(a * b) - возвращает произведение чисел
 */
function mul(a, b) {
  return (a * b)
}

/**
** Функция div возвращает частное двух  чисел.
 * @param {number} a делимое
 * @param {number} b делитель
 * @returns {number} return(a / b) - возвращает частное чисел
 */
function div(a, b) {
  return (a / b)
}
/*
*/


/**
** Функция mathOperation результат вычислениий операций с двумя  числами.
* @param {number} a число 1
* @param {number} b число 2
* @param {string}  operation: '+', '-', '*', '='. Иначе default: "used wrong operetor"
* @returns {number}  возвращает результат операции
*/
function mathOperation(a, b, operation) { // не знаю уместен ли тут CASE, но просто решил попробывать
  switch (operation) {
    case "+":
      return (sum(a, b));
    case "-":
      return (sub(a, b));
    case "*":
      return (mul(a, b));
    case "/":
      return (div(a, b));
    default:
      return `for numbers ${a} and ${b} used wrong operetor: ${operation}`;

  }

}
console.log(mathOperation(3, 5, "+"));
console.log(mathOperation(3, 5, "-"));
console.log(mathOperation(3, 5, "*"));
console.log(mathOperation(3, 5, "/"));
console.log(mathOperation(3, 5, "some wrong operetor"));
