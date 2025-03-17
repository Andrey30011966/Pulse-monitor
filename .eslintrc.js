module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // Если используется TypeScript
    "plugin:react-native/all", // Для React Native
  ],
  rules: {
    "indent": ["error", 2],          // Отступы в 2 пробела
    "no-console": "warn",           // Запретить console.log (или предупреждение)
    "react-native/no-inline-styles": "warn", // Запретить инлайн-стили в React Native
  },
};

