module.exports = {
    preset: "react-native",
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
      },
      moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
      },
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
      moduleFileExtensions: ['js', 'jsx']  };
  