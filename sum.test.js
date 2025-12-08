// 1. Тест на сложение
function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// 2. Тест на проверку чётности числа
function isEven(num) {
  return num % 2 === 0;
}

test('4 is even', () => {
  expect(isEven(4)).toBe(true);
});

test('5 is not even', () => {
  expect(isEven(5)).toBe(false);
});

// 3. Тест на длину строки
function getStringLength(str) {
  return str.length;
}

test('string "hello" has length 5', () => {
  expect(getStringLength('hello')).toBe(5);
});

// 4. Тест массива: содержит ли элемент
function hasElement(arr, element) {
  return arr.includes(element);
}

test('array [1, 2, 3] includes 2', () => {
  expect(hasElement([1, 2, 3], 2)).toBe(true);
});

test('array [1, 2, 3] does not include 5', () => {
  expect(hasElement([1, 2, 3], 5)).toBe(false);
});