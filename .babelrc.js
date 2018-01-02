module.exports = {
  presets: [
    '@babel/flow',
    '@babel/react',
    ['@babel/es2015', { modules: false }],
  ],
  plugins: [
    ['module-resolver', { root: ['./src'] }],
  ],
};
