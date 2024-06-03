module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['module:react-native-dotenv']
  ],
  overrides: [
    {
      test: fileName => !fileName.includes('node_modules/react-native-maps'),
      plugins: [
        ["@babel/plugin-transform-private-methods", { "loose": true }]
      ],
    },
  ],
};
