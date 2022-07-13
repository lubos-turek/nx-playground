module.exports = {
  name: 'consumer',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
