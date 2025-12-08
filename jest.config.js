// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Путь к Next.js для загрузки конфигурации next.config.js и .env файлов
  dir: './',
})

// Пользовательская конфигурация Jest
const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Алиасы Next.js
    '^@/(.*)$': '<rootDir>/$1',
    // CSS modules
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist'
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
}

module.exports = createJestConfig(customJestConfig)