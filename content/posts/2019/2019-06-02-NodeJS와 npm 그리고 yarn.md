---
title: "NodeJS와 npm 그리고 yarn"
date: "2019-06-02"
category:
  - devops
tags:
  - nodejs
  - npm
  - yarn
---

> NodeJS, npm, yarn에 대해 알아본다.

* [NodeJs](#nodejs)
* [npm](#nodejs의-패키지-매니저-npm)
* [yarn](#yarn)



#### NodeJS

---

* NodeJS 설치 [다운로드 페이지](https://nodejs.org/en/download/)

  * Node.js는 오픈 소스 서버 환경입니다.
  * Node.js는 무료입니다.
  * Node.js는 다양한 플랫폼 (Windows, Linux, Unix, Mac OS X 등)에서 실행됩니다.
  * Node.js는 서버에서 JavaScript를 사용합니다.
  * Reference by [nodejs_intro](https://www.w3schools.com/nodejs/nodejs_intro.asp)

##### node 설치 확인

```shell noLineNumbers
# 버전확인
node -v
```

##### NodeJS의 패키지 매니저 (NPM)

---

* npm 설치 [다운로드 페이지](https://www.npmjs.com/get-npm)

  * NPM은 Node.js 패키지 또는 원하는 경우 모듈의 패키지 관리자입니다.
  * [https://www.npmjs.com](https://www.npmjs.com) 은 수천 개의 무료 패키지를 다운로드하여 사용합니다.
  * Node.js를 설치할 때 NPM 프로그램이 컴퓨터에 설치됩니다.
  * Reference by [nodejs_npm](https://www.w3schools.com/nodejs/nodejs_npm.asp)

##### npm 설치 확인

```shell noLineNumbers
# 버전확인
npm -v
```

##### npm 기본적인 명령어

```shell noLineNumbers

# node 초기화
npm init

# 초기화 기본값 선택
npm init -y

# 모듈 설치
npm install <package...>
npm i <package...>

# 전역 모듈 설치
npm install <package...> --global

# package.json 의존성 추가 및 설치
npm install <package...> --save

# package.json 개발의존성 추가 및 설치
npm install <package...> --save-dev

# 모듈 삭제
npm uninstall <package...>

# package.json의 scipts 실행
npm run <script> [<args>]
```

##### npx 활용

* npm 5버전 이상에 추가된 기능으로서 설치하지 않고 바로 앱을 실행한다.

```shell noLineNumbers
npx http-server
```

#### yarn

---

* npm의 속도, 신뢰성을 높인 패키지 매니저
* yarn 설치 [다운로드 페이지](https://yarnpkg.com/en/docs/install)

##### yarn 설치 확인

```shell noLineNumbers
# 버전확인
yarn -v
```

##### yarn 기본적인 명령어

```shell noLineNumbers
# node 초기화
yarn init

# 초기화 기본값 선택
yarn init -y

# 모듈 설치
yarn add <package...>

# 전역 모듈 설치
yarn add global <package...>

# package.json 개발의존성 추가
yarn add <package...> --dev

# 모듈 삭제
yarn remove <package...>

# package.json의 scipts 실행
yarn <script> [<args>]
```
