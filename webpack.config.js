const path = require('path');

module.exports = {
  entry: './index.js',
  context: path.resolve(__dirname, 'client'),
  output: {
    filename: 'bundle.js',
    // Output path using nodeJs path module
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        loader: "babel-loader",
        query: {
          presets: ["react", 'es2015']
        },
        test: /\.jsx?$/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
