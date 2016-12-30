# Ref
https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.k4gasi54u

- Install webpack
npm install webpack -g

- Transpile
webpack ./app.js bundle.js

- If you have a config file just run
webpack

- Install webserver
npm install webpack-dev-server -g

- Install libs for transpiling & check js
npm install babel-core babel-loader jshint jshint-loader node-libs-browser babel-preset-es2015 babel-preset-react webpack --save-dev

- Launch webserver
webpack-dev-server
