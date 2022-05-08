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

### 资源模块

```
loader：

asset/resource 发送一个单独的文件并导出 URL。 
asset/inline 导出一个资源的 data URI。 
asset/source 导出资源的源代码。
asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。
```
