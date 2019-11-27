---
title: "라즈베리파이 Apache2와 Tomcat7 연동하기"
date: "2016-07-02"
category:
  - devops
tags:
  - rasberrypi
---
> 라즈베리 파이에 Apache2와 Tomcat7 연동을 한다.

##### JDK 설치
```shell
categoriesPathsudo apt-get install openjdk-7-jdk
```

##### apache2 설치
```shell
sudo apt-get install apache2
```
apache2 설치 확인 [http://192.168.0.1](http://192.168.0.1)

##### tomcat7 설치
```shell
sudo apt-get install tomcat7 tomcat7-admin
```
apache2 설치 확인 [http://192.168.0.1:8080](http://192.168.0.1:8080)

##### apache2 tomcat7 연동 라이브러리 설치
```shell
sudo apt-get install libapache2-mod-jk
```

##### apache 요청을 톰캣으로 전부 이관
```shell
categoriesPathnano /etc/apache2/sites-enabled/000-default.conf
```

```
JkMount /* ajp13_worker
```

하지만 예외로 사용하지 않는 패턴은 아래와 같이 정의
```
JkUnMount /phpmyadmin ajp13_worker
JkUnMount /phpmyadmin/* ajp13_worker
JkUnMount /php ajp13_worker
JkUnMount /php/* ajp13_worker
```