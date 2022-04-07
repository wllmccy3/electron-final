const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  exclude: /node_modules/,
  test: /\.s[ca]ss$/i,
  use: [
    "style-loader",
    'css-loader',
    {
      loader: "sass-loader",
      options: {
        sassOptions: {
          outputStyle: "compressed"
        }
      }
    }
  ]
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss', '.sass'],
  },
};
