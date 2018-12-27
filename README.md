# Typescript Three.js 

- Typescript support.
- Webpack
- Html plugin
- BrowserSync

## Usage

### Install Typscript

```
npm install typescript -g
```

### Start

```
$ npm install # or yarn
$ npm start
$ tsc  #编译ts -> js
```
### !!!!  webpack 一定要全局安装 

### js 生成.d.ts


```
$ npm i dtsmake -g
$ npm i tern --save-dev
$ dtsmake -s fileame.js
```

## js压缩 
```
$ npm install uglify-js -g
$ uglifyjs lib/shaders/BokehShader2.js -m -o lib/shaders/BokehShader2.min.js //需要在 nodemodule 下 使用 
```


#### 缺少的 .d.ts 库  https://github.com/DefinitelyTyped/DefinitelyTyped 查找

#### jetbrain 可以安装 glsl 插件 高亮度 代码
