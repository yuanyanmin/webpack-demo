### 项目初始化

```
npm init
```

### 安装webpack

```
npm install webpack webpack-cli
```

### 执行 webpack 命令

```
npx webpack
```

### 配置入口、出口

```
webpack.config.js

const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}
```

### 插件 html-webpack-plugin

```
npm install html-webpack-plugin --save-dev

const HtmlWebpackPlugin = require('html-webpack-plugin')

plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html',
      inject: 'body'
    })
  ]
```

### 打包清空之前的文件

```
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },
```
### webpack-dev-server 

```
npm install webpack-dev-server -D

devServer: {
    static: './dist',
  }

npx webpack-dev-server
```
