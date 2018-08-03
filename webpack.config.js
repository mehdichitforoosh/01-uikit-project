var path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                // use https://www.npmjs.com/package/babel-loader for ES6 to ES5 like import in js
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          }
        ]
      }
};