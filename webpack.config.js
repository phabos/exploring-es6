module.exports = {
  entry: "./app/app.js",
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'

      }
   ],
   loaders: [
     {
       test: /\.es6$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  output: {
    filename: "./dist/app.js"
  },
  watch: true
}
