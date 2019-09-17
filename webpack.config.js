const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              {
                "plugins": [
                  "@babel/plugin-proposal-class-properties",
                  "babel-plugin-transform-object-rest-spread"
                ]
              }
            ],
        }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
