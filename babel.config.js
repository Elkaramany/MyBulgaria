module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  overrides: [{
    "plugins": [
      'react-native-reanimated/plugin',
      ["@babel/plugin-transform-private-methods", {
        "loose": true
      }]
    ]
  }]
};