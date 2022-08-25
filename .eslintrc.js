module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["react-native"],
  env: {
    "react-native/react-native": true,
  },
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 0,
  },
};
