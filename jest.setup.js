// jest.setup.js
require('@testing-library/jest-dom');
// Убедитесь, что правильный путь установлен
const path = require('path');
module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': path.join(__dirname, '$1'),
  },
}