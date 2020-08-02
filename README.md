# Hướng dẫn cách build react không cần dùng create-react-app

babel, webpack,...

# Install the following packages.

## Setup React.js

```ts
yarn add react and react-dom
```

**react** - React.js library.

**react-dom** - This package serves as the entry point to the DOM and server renderers for React.

## Setup webpack

```ts
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

**webpack** - Webpack is a bundler for modules.

**webpack-cli** - Command Line interface for webpack.

**webpack-dev-server** - Development server that provides live reloading.

**html-webpack-plugin** - The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.

**style-loader, css-loader** - handle file css

## Setup Babel

```ts
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```

**@babel/core** - Mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.

**@babel/preset-env** - @babel/preset-env allows you to use the latest JavaScript.

**@babel/preset-react** - This package is a set of plugins used to support React.js specific features.

**babel-loader** - This package allows transpiling JavaScript files using Babel and webpack.

# SOURCE

https://dev.to/theenadayalan/how-to-set-up-react-js-from-scratch-without-using-create-react-app-37mk
https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658