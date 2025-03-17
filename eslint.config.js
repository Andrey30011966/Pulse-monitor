// eslint.config.js
export default [
  // Импортируем базовые конфигурации
  require('eslint:recommended'),
  require('plugin:react/recommended'),
  require('plugin:@typescript-eslint/recommended'), // Если используется TypeScript
  require('plugin:react-native/all'), // Для React Native

  // Настройки для парсера
  {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, // Включите, если используете JSX
      },
    },
  },

  // Правила (можно добавить свои)
  {
    rules: {
      'indent': ['error', 2], // Отступы в 2 пробела
      'no-console': 'warn', // Предупреждение о console.log
      'react-native/no-inline-styles': 'warn', // Запрет инлайн-стилей в React Native
      'react/prop-types': 'off', // Отключить проверку PropTypes (если используете TypeScript)
    },
  },

  // Глобальные переменные
  {
    env: {
      browser: true, // Для браузерных приложений
      node: true,    // Для Node.js
      es2021: true,
    },
  },
];
