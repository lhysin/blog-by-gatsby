---
title: "VueJS, Webpack 시작하기"
date: "2019-06-20"
category:
  - vuejs
tags:
  - vuejs
  - webpack
---
> VueJs, Webpack을 활용하여 개발환경을 구축한다.

##### webpack4 설치
```shell
yarn add webpack webpack-cli --dev
```

##### package.json에 script 설정
```js
"scripts": {
  "dev": "webpack --mode build/webpack.dev.conf.js",
  "build": "webpack --mode build/webpack.prod.conf.js"
}
```
@babel/core @babel/plugin-syntax-dynamic-import @babel/preset-env babel-loader cross-env
node-sass css-loader sass-loader vue-loader
##### vuejs 기본설치
```shell
yarn add vue vue-loader --dev
```

##### vuejs 기본설치
```shell
yarn add html-webpack-plugin  --dev
```

##### ./src/main.js 추가
```js
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
```

##### ./src/App.vue 추가
```js
<template>
  <div id="app">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hellow World'
    }
  }
}
</script>
```