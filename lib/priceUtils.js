/**
 * Форматирует цену в виде строки с разделителем тысяч и двумя знаками после запятой.
 * @param {number} price - Цена в рублях.
 * @returns {string} Отформатированная цена, например: "1 000,00 ₽".
 * @example
 * formatPrice(1000) // → "1 000,00 ₽"
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  }).format(price);
}