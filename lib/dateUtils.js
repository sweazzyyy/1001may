/**
 * Форматирует дату в строку вида "17 декабря 2025".
 * @param {string | Date} inputDate - Дата в формате ISO-строки или объект Date.
 * @returns {string} Отформатированная дата на русском языке.
 * @example
 * formatDate("2025-12-17") // → "17 декабря 2025"
 * formatDate(new Date())   // → текущая дата, например "17 декабря 2025"
 */
export function formatDate(inputDate) {
  const date = new Date(inputDate);
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}