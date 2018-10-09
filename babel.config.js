const plugins = [];

if (process.env.NODE_ENV !== 'production') {
  plugins.push('babel-plugin-typescript-to-proptypes');
}

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins,
};