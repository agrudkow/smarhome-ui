module.exports = {
  name: 'consumer-feature-algorithms-state',
  preset: '../../../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory:
    '../../../../../coverage/libs/consumer/feature/algorithms/state',
};
